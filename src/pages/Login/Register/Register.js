import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Home/Footer/Footer';
import Navigation from '../../Home/Navigation/Navigation';

const Register = () => {
    const { createUser, error } = useAuth()
    const [loginData, setLoginData] = useState({});
    const history = useHistory()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };

        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleSubmit = e => {
        createUser(loginData.email, loginData.password, loginData.name);
        const role = 'Users';
        const user = { email: loginData.email, displayName: loginData.name, role: role }
        fetch("https://fierce-garden-19986.herokuapp.com/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Registration Succesfully')
                    history.push('/dashboard');
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name='name'
                                onBlur={handleOnBlur}
                                className="form-control mt-2"
                                placeholder='Your Name'
                                aria-describedby="inputGroup-sizing-sm"
                            />
                            <input
                                type="email"
                                name='email'
                                onBlur={handleOnBlur}
                                className="form-control mt-2"
                                placeholder='Your Email'
                                aria-describedby="inputGroup-sizing-sm"
                            />
                            <input
                                type="password"
                                name='password'
                                onBlur={handleOnBlur}
                                className="form-control mt-2"
                                placeholder='Your PassWord'
                                aria-describedby="inputGroup-sizing-sm"
                            />
                            <input
                                type="submit"
                                className='bg-primary text-white rounded px-5 mt-2'
                                value="Register" />
                            <p>{error}</p>
                            <h4 className='mt-2'>Have an Account? <Link style={{ textDecoration: 'none' }} to='/login'>Please Log In</Link></h4>
                        </form>
                    </div>
                    <div className="col">
                        <img className='rounded' width='100%' src="https://i.ibb.co/X5wQwnT/login.jpg" alt="" />
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;