import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-light mt-5 ">
            <div className="container p-3 d-flex justify-content-between">
                <div>
                    <h5 className="text-dark">Dhaka</h5>
                    <hr className='w-50 text-primary py-1 text-center' />
                    <div className="text-secondary text-start">
                        <p className="m-0 p-0">One Euston Square</p>
                        <p className="m-0 p-0">4 Street,New Market</p>
                        <p className="m-0 p-0">Dhaka</p>
                        <p className="m-0 p-0">NW1 2FD</p>
                    </div>
                </div>
                <div>
                    <h5>Rangpur</h5>
                    <hr className='w-50 text-primary py-1 text-center' />
                    <div className="text-secondary text-start">
                        <p className="m-0 p-0">810 Broadway</p>
                        <p className="m-0 p-0">GL Roy Road</p>
                        <p className="m-0 p-0">Rangpur</p>
                        <p className="m-0 p-0">RNG 2DF</p>
                    </div>
                </div>
                <div>
                    <h5>Chattogram</h5>
                    <hr className='w-50 text-primary py-1 text-center' />
                    <div className="text-secondary text-start">
                        <p className="m-0 p-0">2610 Buffaloy</p>
                        <p className="m-0 p-0">Benagil Street</p>
                        <p className="m-0 p-0">Chattogram</p>
                        <p className="m-0 p-0">CTG 1st Floor</p>
                    </div>
                </div>
                <div>
                    <h5>Newsletter</h5>
                    <hr className='w-50 text-primary py-1 text-center' />
                    <div>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Write Your Email"
                                aria-label="Write Your Email"
                                aria-describedby="basic-addon2"
                            />
                        </InputGroup>
                        <Button className='mt-0' variant="secondary">Subscribe</Button>
                    </div>
                </div>
            </div>
            <p className='container text-secondary text-start'>Handcrafted with love © 2016 All rights reserved.</p>
        </div>
    );
};

export default Footer;