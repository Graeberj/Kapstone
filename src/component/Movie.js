import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import request from '../request';
import Review from 'react';

import axios from '../axios';

import ImageCard from './ImageCard';
import BreadcrumbHeader from '../stories/BreadcrumbsHeader';
import MovieDetail from './MovieDetail';

function Movie({ movieOption }, props) {
	const [image, setImage] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const requests = await axios.get(movieOption);
			console.log(requests.data.results);
			setImage(requests.data.results);
			// return requests;
		}

		fetchData();
	}, []);

	return (
		<div className='movie'>
			<BreadcrumbHeader />
			{image &&
				image.map((image) => (
					<Link to={'movie/' + image.id}>
						<ImageCard key={image.id} image={image} />
					</Link>
				))}
		</div>
	);
}

export default Movie;
