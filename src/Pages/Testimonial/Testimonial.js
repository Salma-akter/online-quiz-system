import React from "react";
import { Grid } from '@mui/material';
import "./Testimonial.css";
const Testimonial = ({ data }) => {
  const { name, comment, imageURL } = data;
  return (
    <div className="col-md-4 mb-4 box-area">
      <div className="card">
        {/* <img src={images} alt="" className="card-img-top"/> */}
        <div className="card-body">
          <p>{comment}</p>
          <h5>by {name}</h5>
          <Grid xs={6} md={4}>
            <img
              style={{ width: "50px", height: "50px", textAlign: "center" }}
              src={imageURL}
              roundedCircle
              alt={imageURL}
             />
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
