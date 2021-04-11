import React from 'react';
import { imageRequest } from '../request';
import Movie from './Movie';

const base_url = 'https://image.tmdb.org/t/p/original/';

function ImageCard({ image }) {
	return (
		<div className='imageCard'>
			<img src={`${base_url}${image.backdrop_path || image.poster_path}`} alt='' />
			<p>{image.overview}</p>
			<h2>Movie title</h2>
			<p>number of likes </p>
		</div>
	);
}

export default ImageCard;
