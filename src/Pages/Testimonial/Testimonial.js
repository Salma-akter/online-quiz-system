import React from "react";
import { Grid } from '@mui/material';
import "./Testimonial.css";
import { Avatar } from "@material-ui/core";
const Testimonial = ({ data }) => {
  const { name, comment, image } = data;
  return (
    <div className="col-md-4 mb-4 box-area">
      <div className="card">
        <div className="card-body">
          <p>{comment}</p>
          <Grid xs={6} md={4}>
            <div style={{display: 'flex', justifyContent:"space-between" ,textAlign: 'center'}}>
              <Avatar src={image} alt={name}> {name?.charAt(0)}</Avatar>
              <h5 > {name}</h5>
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
