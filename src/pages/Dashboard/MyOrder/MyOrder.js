import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Order from '../Order/Order';

const MyOrder = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth()
    useEffect(() => {
        fetch('https://fierce-garden-19986.herokuapp.com/myOrders')
            .then(res => res.json())
            .then(data => {
                const myOrderd = data.filter(order => order.email === user.email);
                setOrders(myOrderd)

            })

    }, [orders])
    return (
        <div>
            <h3>Your Order List</h3>
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-5">
                {
                    orders.map(order => <Order
                        key={order._id}
                        order={order}
                    ></Order>)
                }
            </div>
        </div>
    );
};

export default MyOrder;