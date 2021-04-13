import React, { useState, useEffect } from 'react';
import { POSTMESSAGES, useStore } from './store/store';
import { postMessageRev } from '../request';

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

	const keyhandler = (e) => {
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
			<div classsName='message'>Message</div>
			<textarea className='text' rows='5' cols='20'></textarea>
		</div>
	);
}

export default Review;
