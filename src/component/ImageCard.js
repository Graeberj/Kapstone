import React from 'react';

// import TextTruncate from 'react-text-truncate';

const base_url = 'https://image.tmdb.org/t/p/original/';

function ImageCard({ image, setMovieOption }) {
	return (
		<div className='imageCard'>
			<img src={`${base_url}${image.backdrop_path || image.poster_path}`} alt='' />

			{/* <TextTruncate line={1} element='p' truncateText='...' text={image.overview} /> */}

			<h2>{image.title || image.original_name}</h2>
			<p>number of likes </p>
		</div>
	);
}

export default ImageCard;
