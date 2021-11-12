import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllProduct = ({ allProduct }) => {
    const { name, description, price, img, _id } = allProduct;
    return (
        <div>
            <div style={{ height: 450 }} className="col w-75 mx-auto shadow p-3 mb-5 bg-body rounded">
                <div className="card">
                    <img style={{ height: 200 }} src={img} className="card-img-top " alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <h6><strong>Price: {price}</strong></h6>
                        <p className="card-text"><strong>Desprition: </strong>{description?.slice(0, 165)}</p>
                    </div>
                    <Link to={`/purches/${_id}`}><Button variant="success">Buy Now</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;