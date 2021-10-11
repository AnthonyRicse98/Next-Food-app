import React from 'react';

export default function Rating(props) {
  const {  numReviews } = props;
  return (
    <div className="rating">    
        <span > <small>{numReviews }</small></span> 
    </div>
  );
}