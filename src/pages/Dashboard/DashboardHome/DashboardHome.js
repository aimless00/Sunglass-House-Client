import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth()
    return (
        <div className='bg-success text-white p-5 mx-auto mt-5' >
            <h2 ><strong>Hey! {user.displayName}</strong></h2>
            <h3 className='text-light'>Welcome To Our Website</h3>
        </div>
    );
};

export default DashboardHome;