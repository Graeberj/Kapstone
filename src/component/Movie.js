import React from 'react';
import { useState, useEffect } from 'react';
import request from '../request';

import axios from '../axios';

import ImageCard from './ImageCard';

function Movie() {
	const [image, setImage] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const requests = await axios.get(request.fetchTopRated);
			setImage(requests.data.results);
			return requests;
		}

		fetchData();
	}, []);

	return (
		<div className='movie'>
			{image.map((image) => (
				<ImageCard image={image} />
			))}
		</div>
	);
}

export default Movie;
