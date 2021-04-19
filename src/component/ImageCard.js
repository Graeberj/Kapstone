import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { HandThumbsDown, HandThumbsUp } from 'react-bootstrap-icons';

// import TextTruncate from 'react-text-truncate';

const base_url = 'https://image.tmdb.org/t/p/original/';

function ImageCard({ image }) {
	const [fav, setFav] = useState(0);

	function dislikes() {
		setFav();
	}

	function likes() {
		setFav();
	}
	return (
		<div className='imageCard'>
			<img src={`${base_url}${image.backdrop_path || image.poster_path}`} alt='' />

			<h2>{image.title || image.original_name}</h2>
			<Link>
				<h3>Reviews</h3>
			</Link>
			<HandThumbsUp onClick={() => likes()} className='thumbsUp' />
			<HandThumbsDown onClick={() => dislikes()} className='thumbsDown' />
		</div>
	);
}

export default ImageCard;
