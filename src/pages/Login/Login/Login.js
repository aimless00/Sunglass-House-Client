import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Footer from '../../Home/Footer/Footer';
import Navigation from '../../Home/Navigation/Navigation';

const Login = () => {
    const { logInUSer, error } = useAuth()
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory()
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleSubmit = e => {
        logInUSer(loginData.email, loginData.password);
        const destination = location?.state?.from || '/dashboard'
        history.replace(destination)
        e.preventDefault()
    }


    return (
        <div className=''>
            <Navigation></Navigation>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col">
                        <form onSubmit={handleSubmit}>
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
                                className='bg-primary px-5 text-white rounded border-1 mt-2'
                                value="Log In" />
                        </form>
                        <div className="text-danger rounded my-2 py-2">{error && <p className='mx-auto'>Your Password or email was wrong</p>}</div>
                        <h4 className='mt-2'>Don't Have an Account? <Link style={{ textDecoration: 'none' }} to='/register'>Register Now</Link></h4>
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

export default Login;