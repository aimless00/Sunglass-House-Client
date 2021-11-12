import React from 'react';

const User = ({ user }) => {
    const { _id, email, displayName, role } = user;
    const handleAdmin = id => {
        const url = `https://fierce-garden-19986.herokuapp.com/user/${id}`;
        const updateRole = { role: "Admin" }
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateRole)
        })
            .then(res => res.json())
            .then(data => {
                if (Promise) {
                    alert("Added Admin")
                }
            })
    }
    return (
        <tr>
            <td>{displayName}</td>
            <td>{email}</td>
            <td><button onClick={() => handleAdmin(_id)} className="btn-primary">Make Admin</button></td>
            <td className="btn-Success">{role}</td>
        </tr>
    );
};

export default User;