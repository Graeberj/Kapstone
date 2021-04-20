import React, { useState, useEffect } from 'react';
import { POSTREVIEW, useStore } from './store/store';
import { reviewRequest, createMessageRev } from '../request';
import { Form, Button } from 'react-bootstrap';
import Favoriteheader from '../stories/Favoriteheader'
import film from '../stories/assets/filmstrip.png';

export default function Review() {
	const dispatch = useStore((state) => state.dispatch);
	const [post, setPost] = useState('');
	const [newReview, setNewReview] = useState([]);

	useEffect(() => {
		reviewRequest().then((data) => {
			setNewReview(data.message);
		});
	}, []);

	const handleNewReview = (e) => {
		e.preventDefault();
		createMessageRev(post).then((data) => {
			dispatch({ type: POSTREVIEW, PAYLOAD: data });
			setNewReview([data.message, ...newReview]);
		});
	};

	const handleReview = (e) => {
		setPost(e.target.value);
	};

	// need to add onchange with event pass down within textarea

	return (
		<div>
			<div className="sb-show-main sb-main-padded">
		<div className="container">
			<div className="input-group input-group-sm mb-3">
				<input
					type="text"
					class="form-control"
					aria-label="Sizing example input"
					aria-describedby="inputGroup-sizing-sm"
				/>
				<span className="input-group-text  text-primary" id="inputGroup-sizing-sm">
					Search Movies or TV
				</span>
			</div>
			<div className="wrapper justify-content-center">
				<div className="text-primary display-3">
					<div>I want to WATCH...</div>
					<img className="FilmImage" src={film} class="rounded float-start" alt="Film" />
				</div>
			</div>
		</div>
	</div>
			<Favoriteheader/>
			<Form>
				<label>
					<p>Your Review</p>

					<textarea
						classsName='message'
						rows='10'
						cols='30'
						type='text'
						autoFocus
						onChange={handleReview.username}
						value={post}
					/>
				</label>
				<Button variant='outline-primary' onSubmit={handleNewReview}>
					Rate it!
				</Button>{' '}
			</Form>
		</div>
	);
}
