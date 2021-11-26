import React, { useEffect } from 'react';
import Footer from '../../Shared/Navigation/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Experience from '../Experience/Experience';
import Products from '../Products/Products';
import ShowReview from '../ShowReview/ShowReview';


const Home = () => {
 
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Experience
           
            ></Experience>
            <h1 className="mt-2 text-center text-danger">Featured Drone</h1>
            <Products></Products>
            <div className="container"><ShowReview></ShowReview></div>
            <Footer></Footer>
        </div>
    );
};

export default Home;