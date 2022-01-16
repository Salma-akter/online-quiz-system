import React, { useState } from 'react';
import { Button, Input, TextField } from '@mui/material';
import axios from 'axios';

const Reviews = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [imageUrl, setImageUrl] = useState(null);

    const handleSubmit = () => {
         const Result = {
             name:name,
             comment:comment,
             image:imageUrl
         }

        fetch('http://localhost:8000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Result)
        })
            .then(res => {
                console.log('res data', res);
            })
    }

    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '6bf0cd718179276f282785bb56c7be39');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <h3>Your Feedback Added Here</h3>
                <TextField
                    sx={{ width: '50%' }}
                    label="Name"
                    required
                    onChange={e => setName(e.target.value)}
                    variant="standard" />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Your Comment"
                    type="text"
                    required
                    onChange={e => setComment(e.target.value)}
                    variant="standard" />
                <br />
                <Input
                    accept="image/*"
                    type="file"
                    onChange={handleImageUpload}
                />
                <br />
                <Button variant="contained" onClick={handleSubmit}>
                    Add Review
                </Button>
        </div>
    );
};

export default Reviews;
