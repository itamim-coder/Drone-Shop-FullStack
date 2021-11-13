import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import './AllProducts.css'

const AllProducts = () => {
    const [allproducts, setAllproducts] = useState([])

    useEffect(()=>{
        fetch('https://stormy-woodland-20048.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setAllproducts(data))
    },[])
    return (
        <div>
            <h1>All Products</h1>
            <div className="container">
                <div className="allProducts-div">
                    {
                        allproducts.map((pd) =>(
                            <div className="product-div">
                                <div className="mb-3">
                                    <img src={pd.image} alt="" />
                                </div>
                               <div className="mb-3">
                               <h4>{pd?.name}</h4>
                                <p>{pd.description}</p>
                                <h6>{pd.price}</h6>
                               </div>
                               <div>
                                 <NavLink to={`/order/${pd._id}`}>
                                 <button>Buy Now</button>
                                 </NavLink>
                               </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default AllProducts;