import React from 'react';
import Rating from 'react-rating';

const Rev = ({ rev }) => {
    const { email, coustomerName, reviewText, reviewNum } = rev;
    return (
        <div className="container d-flex align-items-center shadow-lg p-3 mb-5 bg-body rounded">
            <div className='text-start mx-5'>
                <h3><strong>{coustomerName}</strong></h3>
                <h5> {email}</h5>
                <p>{reviewText}</p>
                <Rating
                    readonly
                    initialRating={reviewNum}
                    emptySymbol="far fa-star text-warning"
                    fullSymbol="fas fa-star text-warning"
                />
            </div>
        </div >
    );
};

export default Rev;