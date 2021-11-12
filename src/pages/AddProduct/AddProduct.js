import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory()
    const onSubmit = data => {
        fetch("https://fierce-garden-19986.herokuapp.com/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Add Succesfully');
                    console.log('data');
                    history.push('/products');
                    reset();
                }
            })

    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-light form mt-5">
                <h2>Add Product</h2>
                <input
                    style={{ width: 350 }}
                    className="input ms-2 mt-2"
                    placeholder='Product Name'
                    {...register("name", { required: true })} />

                <br />
                <input
                    style={{ width: 350 }}
                    placeholder='Description'
                    className="input ms-2 mt-2"
                    {...register("description", { required: true })} />

                <br />
                <input
                    style={{ width: 350 }}
                    placeholder='Price'
                    className="input ms-2 mt-2"
                    {...register("price", { required: true })} />

                <br />
                <input
                    style={{ width: 350 }}
                    className="input ms-2 mt-2"
                    placeholder="Img Link"
                    {...register("img", { required: true })} />

                <br />
                <input className="btn btn-primary my-3" type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;