import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { img, name, price, description, _id } = product
    return (
        <div className="container d-flex align-items-center shadow-lg p-3 mb-5 bg-body rounded">
            <div >
                <img src={img} alt="" />
            </div>
            <div className='text-start mx-5'>
                <h1>{name}</h1>
                <h5><strong>Price:</strong> ${price}</h5>
                <p><strong>Description:</strong> {description}</p>
                <Link to={`/purches/${_id}`}><Button variant="success">Buy Now</Button></Link>
            </div>
        </div >
    );
};

export default Product;