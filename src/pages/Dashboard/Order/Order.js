import React from 'react';


const Order = ({ order }) => {
    const { productName, email, location, status, name, price, _id } = order

    const handleCancelOrder = id => {
        const url = `https://fierce-garden-19986.herokuapp.com/myOrders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Your Order has Deleted');

                }
            })
    }
    return (
        <div>
            <div style={{ height: '100%' }} className="col mx-auto shadow p-3 mb-5 bg-body rounded">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p>Email: {email}</p>
                        <p>Product Name: <span className='text-info'>{productName}</span></p>
                        <h6><strong>Price: ${price}</strong></h6>
                        <h6 className='text-danger'><strong>Status: {status}</strong></h6>
                        <h6 ><strong>Your Adress: {location}</strong></h6>
                    </div>
                    <button onClick={() => handleCancelOrder(_id)} className="btn btn-success">Cancel Order</button>
                </div>
            </div>
        </div>
    );
};

export default Order;