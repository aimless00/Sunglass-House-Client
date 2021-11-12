import React from 'react';
import { Button } from 'react-bootstrap';
import design from '../../../shop_design.jpg'

const ShopDesign = () => {
    return (
        <div style={{ height: '300px' }} className="bg-light">
            <div className='d-flex justify-content-evenly'>
                <div className='py-5'>
                    <h2 className="fw-bold">Elgant Shop Design</h2>
                    <p>Oculus makes it easy for your customers to find more of what they’re looking for. For the coolest shop around, try Oculus.</p>
                    <Button variant="secondary">PREVIEW SHOP</Button>
                </div>
                <div>
                    <img className="pt-2" style={{ width: '600px', height: '300px' }} src={design} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ShopDesign;