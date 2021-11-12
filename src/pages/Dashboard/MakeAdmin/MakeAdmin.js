import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import User from '../User/User';

const MakeAdmin = () => {
    const [users, setUsers] = useState()
    useEffect(() => {
        fetch('https://fierce-garden-19986.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])
    return (
        <div>
            <h2>All Login User</h2>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>User Email</th>
                        <th>Update Role</th>
                        <th>User Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users?.map(user => <User
                            key={user._id}
                            user={user}
                        ></User>)
                    }
                </tbody>
            </Table>
        </div >
    );
};

export default MakeAdmin;