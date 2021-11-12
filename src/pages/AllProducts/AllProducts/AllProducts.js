import React, { useEffect, useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Navigation from '../../Home/Navigation/Navigation';
import AllProduct from '../AllProduct/AllProduct';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://fierce-garden-19986.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">{
                allProducts.map(allProduct => <AllProduct
                    key={allProduct.id}
                    allProduct={allProduct}
                ></AllProduct>)
            }
            </div>
            <Footer></Footer>
        </div >
    );
};

export default AllProducts;