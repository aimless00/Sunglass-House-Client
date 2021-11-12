import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Products from '../Products/Products';
import Review from '../Review/Review';
import ShopDesign from '../ShopDesign/ShopDesign';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Products></Products>
            <ShopDesign></ShopDesign>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;