import React, { useState, useEffect } from "react";
import { POSTREVIEW, useStore } from "./store/store";
import { reviewRequest, createMessageRev } from "../request";
import { Form, Button } from "react-bootstrap";
import Favoriteheader from "../stories/Favoriteheader";
import film from "../stories/assets/filmstrip.png";
import FavoritePage from "../stories/Favoritepage";

export default function Review() {
  const dispatch = useStore((state) => state.dispatch);
  const [post, setPost] = useState("");
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
      <Favoriteheader />
    </div>
  );
}
