import React from 'react';

const handleCancelOrder = id => {
    const url = `https://fierce-garden-19986.herokuapp.com/products/${id}`
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

const ManageProduct = ({ allProduct }) => {
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
                    <button onClick={() => handleCancelOrder(_id)} className="btn btn-success">Remove Product</button>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;