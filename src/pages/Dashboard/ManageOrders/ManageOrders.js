import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [manageOrders, setManageOrder] = useState([])

    useEffect(() => {
        fetch('https://fierce-garden-19986.herokuapp.com/myOrders')
            .then(res => res.json())
            .then(data => setManageOrder(data))

    }, [manageOrders])
    return (
        <div className="mx-5 my-5">
            <h3 className="text-primary">Manage All Order</h3>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Coustomer Name</th>
                        <th>Product Name</th>
                        <th>Coustomer Email</th>
                        <th>Product Price</th>
                        <th>Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageOrders.map(manageOrder => <ManageOrder
                            key={manageOrder._id}
                            manageOrder={manageOrder}
                        ></ManageOrder>
                        )
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default ManageOrders;