import React, { useState, useEffect } from 'react';
import { POSTREVIEW, useStore } from './store/store';
import { reviewRequest, createMessageRev } from '../request';
import { Form, Button } from 'react-bootstrap';

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
