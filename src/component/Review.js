import React, { useState, useEffect } from 'react';
import { POSTMESSAGES, useStore } from './store/store';
import { postMessageRev } from '../request';
import { Form, Button } from 'react-bootstrap';

function Review() {
	const dispatch = useStore((state) => state.dispatch);
	const [post, setPost] = useState('');

	useEffect(() => {
		postMessageRev().then((data) => {
			dispatchEvent({ type: POSTMESSAGES, payload: data.message });
		});
	}, [dispatch]);

	function handlePost(e) {
		postMessageRev(post);
	}

	const keyHandler = (e) => {
		if (e.keyCode === 13) {
			handlePost(post);
			setPost('');
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', keyHandler);
		return () => {
			window.removeEventListener('keydown', keyHandler);
		};
	});

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
						onChange={(e) => setPost(e.target.value)}
						value={post}
					/>
				</label>
				<Button variant='outline-primary'>Rate it!</Button>{' '}
			</Form>
		</div>
	);
}

export default Review;
