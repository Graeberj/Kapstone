import React, { useState, useEffect } from "react";
import { POSTREVIEW, useStore } from "./store/store";
import { reviewRequest, createMessageRev } from "../request";
import { Form, Button } from "react-bootstrap";

import film from "../stories/assets/review_film1.png";

function Review({ movieId }) {
  const dispatch = useStore((state) => state.dispatch);
  const [newReview, setNewReview] = useState({
    username: "",
    title: "",
    review: "",
  });
  const [review, setReview] = useState([]);

  useEffect(() => {
    createMessageRev().then((data) => {
      setNewReview(data.reviews);
      console.log(data.reviews);
    });
  }, []);

  useEffect(() => {
    reviewRequest().then((data) => setReview(data));
  }, [newReview]);

  const handleNewReview = (e) => {
    e.preventDefault();
    createMessageRev(
      newReview.username,
      newReview.title,
      newReview.review,
      movieId
    ).then((data) => {
      dispatch({ type: POSTREVIEW, PAYLOAD: data });
    });
    setNewReview({
      username: "",
      title: "",
      review: "",
    });
  };
  console.log(newReview);

  const handleReview = (e) => {
    e.preventDefault();
    setNewReview({
      ...newReview,
      [e.target.name]: e.target.value,
    });
  };

						<textarea
							classsName='username'
							placeholder='username'
							name='username'
							rows='1'
							cols='10'
							type='text'
							autoFocus
							onChange={(e) => handleReview(e)}
							value={newReview.username}
						/>
						<textarea
							classsName='title'
							placeholder='title'
							name='title'
							rows='1'
							cols='10'
							type='text'
							disabled
							value={newReview.title}
							// this should be disabled and filled with the title from the image
						/>
						<textarea
							classsName='review'
							placeholder='review'
							name='review'
							rows='10'
							cols='30'
							type='text'
							autoFocus
							onChange={(e) => handleReview(e)}
							value={newReview.review}
						/>
					</label>
					<Button variant='outline-primary' onClick={(e) => handleNewReview(e)}>
						Rate it!
					</Button>{' '}
				</Form>
			) : (
				<div>
					{review.map((review) => (
						<div>
							<h1>{review.title}</h1>
							<p>{review.username}</p>
							<p>{review.review}</p>
						</div>
					))}
				</div>
			)}
		</div>
	);


export default Review;
