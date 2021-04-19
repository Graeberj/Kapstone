import React from 'react';
import { useState, useEffect } from 'react';
import request from '../request';

import axios from '../axios';

import ImageCard from './ImageCard';
import BreadcrumbHeader from '../stories/BreadcrumbsHeader'

function Movie({ movieOption }) {
	const [image, setImage] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const requests = await axios.get(movieOption);
			setImage(requests.data.results);
			return requests;
		}

		fetchData();
	}, []);

	return (
		<div className='movie'>
			<BreadcrumbHeader/> 
			{image.map((image) => (
				<ImageCard key={image.id} image={image} />
			))}
		</div>
	);
}

export default Movie;
