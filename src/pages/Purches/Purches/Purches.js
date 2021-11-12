import React, { useEffect, useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Navigation from '../../Home/Navigation/Navigation';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Purches = () => {
    const { id } = useParams();
    const [purches, setpurches] = useState();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const history = useHistory()

    useEffect(() => {
        fetch(`https://fierce-garden-19986.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setpurches(data))
    }, [id])
    const onSubmit = data => {
        data.status = "Pending "
        data.email = user.email
        data.price = purches?.price
        data.productName = purches?.name
        fetch("https://fierce-garden-19986.herokuapp.com/myOrders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    reset();
                    alert('Purches Succesfully');
                    history.push('/products')

                }
            })
    };
    return (
        <div>
            <Navigation></Navigation>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-light form mt-5">
                <h2>Purches Details</h2>
                <input
                    style={{ width: 350 }}
                    className="input ms-2 mt-2"
                    defaultValue={user?.displayName}
                    {...register("name")} />

                <br />
                <input
                    disabled
                    style={{ width: 350 }}
                    defaultValue={user.email}
                    className="input ms-2 mt-2"
                    {...register("email")} />

                <br />
                <input
                    disabled
                    style={{ width: 350 }}
                    defaultValue={purches?.name}
                    className="input ms-2 mt-2"
                    {...register("productName")} />

                <br />
                <input
                    disabled
                    style={{ width: 350 }}
                    defaultValue={purches?.price}
                    className="input ms-2 mt-2"
                    placeholder="price"
                    {...register("price")} />

                <br />
                <input
                    style={{ width: 350 }}
                    className="input ms-2 text-start mt-2"
                    placeholder="Your Location"
                    {...register("location",
                        { required: true })} />

                <br />
                <input className="btn btn-primary my-3" type="submit" />
            </form>
            <Footer></Footer>
        </div>
    );
};

export default Purches;