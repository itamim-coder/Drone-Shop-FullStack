import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './product.css'
import Aos from "aos";
import "aos/dist/aos.css"

const Product = ({ product }) => {
  useEffect(()=>{
    Aos.init({duration: 2000});
},[]);
 
    const { _id ,name , price , description, image } = product;
    return (
      
        <div  data-aos="fade-up" className="product-div mt-5">
            <img src={image} alt="" />
          <div className="m-2  product">
          
            <h5>{name}</h5>
            <h3>Price: ${price}</h3>
            <p>{description}</p>
          </div>      
      
         <NavLink to={`/order/${_id}`}>
          <button className="buy-btn">Buy Now</button>
          </NavLink> 
        
            
        </div>
       
       
        
    
    );
};

export default Product;