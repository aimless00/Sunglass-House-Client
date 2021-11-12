import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth()
    const [review, setReview] = useState({});
    const history = useHistory()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...review };

        newReview[field] = value;
        setReview(newReview);
    }
    const onSubmit = e => {
        const addReview = { email: review.email, coustomerName: review.name, reviewText: review.reviewText, reviewNum: review.reviewNum }
        fetch('https://fierce-garden-19986.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Add Succesfully');
                    console.log('data');
                    history.push('/home');
                }
            })
        e.preventDefault()
    };
    return (
        <div>
            <h2>Add Your Review</h2>
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        name='name'
                        onBlur={handleOnBlur}
                        defaultValue={user.displayName} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        name='email'
                        onBlur={handleOnBlur}
                        defaultValue={user.email} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Review text</Form.Label>
                    <Form.Control
                        required
                        onBlur={handleOnBlur}
                        name='reviewText'
                        as="textarea" rows={3} />
                </Form.Group>
                <Form.Label>Review Number</Form.Label>
                <input
                    required
                    style={{ width: '100%' }}
                    type="number"
                    id="tentacles"
                    onBlur={handleOnBlur}
                    name="reviewNum"
                    min="1" max="5" />
                <br />
                <Button className='mt-2' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddReview;