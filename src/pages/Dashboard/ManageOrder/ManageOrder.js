import React from 'react';

const ManageOrder = ({ manageOrder }) => {
    const { _id, name, email, price, productName, status } = manageOrder;
    const handleUpdate = (id) => {
        const url = `https://fierce-garden-19986.herokuapp.com/myOrders/${id}`;
        const updateStatus = { status: "Shipped" }
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (Promise) {
                    alert("Order Shipped")
                }
            })


    }
    const handleDeleteOrder = id => {
        const url = `https://fierce-garden-19986.herokuapp.com/myOrders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Order has Deleted');
                }
            })

    }
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{productName}</td>
            <td>{email}</td>
            <td>${price}</td>
            <td><button onClick={() => handleUpdate(_id)} className="btn-primary">
                {status}</button></td>
            <td><button onClick={() => handleDeleteOrder(_id)} className="btn-danger">Delete</button></td>
        </tr>
    );
};

export default ManageOrder;