import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar className="bg-info">
            <Container>
                <Navbar.Toggle />
                <NavLink to='/home' className="text-decoration-none fw-bold fs-5 text-light mx-2">Home</NavLink>
                <NavLink to='/products' className="text-decoration-none fw-bold fs-5 text-light mx-2">Explore Products</NavLink>
                {user?.email && <NavLink to='/dashboard' className="text-decoration-none fw-bold fs-5 text-light mx-2">Dashboard</NavLink>}
                {!user?.email && <NavLink to='/login' className="text-decoration-none fw-bold fs-5 text-light mx-2">Login</NavLink>}
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {user.displayName}
                        {user.email && <button onClick={logOut} className="btn btn-secondary mx-2 my-0">LogOut</button>}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;