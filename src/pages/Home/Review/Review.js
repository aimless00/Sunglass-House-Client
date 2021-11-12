import React, { useEffect, useState } from 'react';
import Rev from '../Rev/Rev';

const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('https://fierce-garden-19986.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div>
            <h4>Customer Review</h4>
            <div>
                {
                    review.map(rev => <Rev
                        key={rev._id}
                        rev={rev}
                    ></Rev>)
                }
            </div>
        </div>
    );
};

export default Review;