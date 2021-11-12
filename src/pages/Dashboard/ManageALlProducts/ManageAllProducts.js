import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';

const ManageAllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://fierce-garden-19986.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [allProducts])
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">{
                allProducts.map(allProduct => <ManageProduct
                    key={allProduct.id}
                    allProduct={allProduct}
                ></ManageProduct>)
            }
            </div>
        </div >
    );
};

export default ManageAllProducts;