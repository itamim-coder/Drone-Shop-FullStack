import React from 'react';
import { NavLink } from 'react-router-dom';
import './product.css'

const Product = ({ product }) => {
 
    const { _id ,name , price , description, image } = product;
    return (
        <div className="product-div ">
            <img src={image} alt="" />
          <div className="m-2  product">
          
            <h5>{name}</h5>
            <h3>Price: ${price}</h3>
            <p>{description}</p>
          </div>
          <NavLink to={`/order/${_id}`}>
          <button >Buy Now</button>
          </NavLink>
            
        </div>
    );
};

export default Product;