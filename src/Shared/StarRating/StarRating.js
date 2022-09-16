import React, { useState, memo } from "react";
import './StarRating.scss'
import axios from "axios";
const StarRating = (props) => {
  const { setIndexStarRating } = props
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleRating = (index) => {
    setRating(index)
    setIndexStarRating(index)
  }
  return (
    <div className="star__rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            id="handle__StarRating"
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => handleRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
export default memo(StarRating);
