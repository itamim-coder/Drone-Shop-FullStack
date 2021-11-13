import React from 'react';
import Footer from '../../Shared/Navigation/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import AllProducts from './AllProducts/AllProducts';

const Shop = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AllProducts></AllProducts>
            <Footer></Footer>
        </div>
    );
};

export default Shop;