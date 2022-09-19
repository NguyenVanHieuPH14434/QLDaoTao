import React, { useState, memo } from "react";
import './StarRating.scss'
<<<<<<< HEAD
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
=======
const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleClickStar = (index) => {
      setRating(index)
      console.log(index);
    }
    return (
      <div className="star__rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={(e) => handleClickStar(index)}
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

export default StarRating;
>>>>>>> 56e159249e531ff66cb2af7283da4459cf21685f
