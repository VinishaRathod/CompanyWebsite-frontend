import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ReviewSection.css';

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get('http://localhost:5000/reviews', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, 
          },
        });
        setReviews(res.data);
      } catch (err) {
        console.error('Failed to fetch reviews', err);
      }
    };
    fetchReviews();
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star filled' : 'star'}>★</span>
      );
    }
    return stars;
  };

  return (
    <div className="review-section">
      <h2 className="subheading">QUALITY FEATURES</h2>
      <b><p className="subtext">Tutorials that people love most</p></b>
      
      <div className="review-container">
        {reviews.map((review) => (
          <div key={review._id} className="review-box">
            <img src={review.imageUrl} alt="Review" className="review-image" />
            <div className="review-rating">
              <div className="stars">{renderStars(review.rating)}</div>
              <p>{review.rating.toFixed(1)} ({review.studentsWatched} reviews)</p>
            </div>
            <p className="review-title">{review.reviewTitle}</p>
            <p className="students-watched">
              <span role="img" aria-label="eye">👁️</span> {review.studentsWatched} watched
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
