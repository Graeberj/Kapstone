import React, { useState, useEffect } from 'react';
import { POSTREVIEW, useStore } from './store/store';
import { reviewRequest, createMessageRev } from '../request';
import { Form, Button } from 'react-bootstrap';
import Favoriteheader from '../stories/Favoriteheader';
import film from '../stories/assets/filmstrip.png';

function Review() {
	const dispatch = useStore((state) => state.dispatch);
	const [post, setPost] = useState('');
	const [newReview, setNewReview] = useState([]);

	useEffect(() => {
		reviewRequest().then((data) => {
			setNewReview(data.review);
		});
	}, []);
	console.log(newReview);

	const handleNewReview = (e) => {
		e.preventDefault();
		createMessageRev(post).then((data) => {
			dispatch({ type: POSTREVIEW, PAYLOAD: data });
			setNewReview([data.username, ...newReview]);
		});
	};

	const handleReview = (e) => {
		setPost(e.target.value);
	};

	return (
		<div>
			<Favoriteheader />
			<Form>
				<label className='review-form'>
					<p>Your Review</p>

					<textarea
						classsName='username'
						rows='1'
						cols='30'
						type='text'
						autoFocus
						onChange={handleReview}
						value={post}
					/>
					<textarea classsName='title' rows='1' cols='30' type='text' autoFocus onChange={handleReview} value={post} />
					<textarea
						classsName='review'
						rows='10'
						cols='30'
						type='text'
						autoFocus
						onChange={handleReview}
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

export default Review;
