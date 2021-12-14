import React, { useEffect, useState } from 'react';
import './Testimonial.css'
import Testimonial from './Testimonial';
const GetReview = () => {
    const[review, setReview] = useState([])
    useEffect(() => {
        fetch('http://localhost:8000/getReview')
        .then(res => res.json())
        .then(data => {
            setReview(data);
        })
        .catch(err => console.log(err))
    } ,[]);

    return (
        <div className="container">
            {review.length === 0 && <p>Loading...</p>}
            <h1 className="my-5 header">What People Say About Us</h1>
      <div className="row">
          {
              review.map(data => <Testimonial data={data}/>)
          }
      </div>
        </div>
      
    );
};

export default GetReview;