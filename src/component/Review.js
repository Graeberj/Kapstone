import React, { useState, useEffect } from 'react';
import { POSTMESSAGES, useStore } from './store/store';
import { postMessageRev } from '../request';
import { Form, Button } from 'react-bootstrap';
import Favoriteheader from '../stories/Favoriteheader'
import film from '../stories/assets/filmstrip.png';

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
