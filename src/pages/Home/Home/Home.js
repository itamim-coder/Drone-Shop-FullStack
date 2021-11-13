import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import ShowReview from '../ShowReview/ShowReview';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            {/* <Banner></Banner> */}
            <Products></Products>
            <div className="container"><ShowReview></ShowReview></div>
        </div>
    );
};

export default Home;