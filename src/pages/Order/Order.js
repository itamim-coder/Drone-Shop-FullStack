import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Order.css'
import useAuth from '../../hooks/useAuth';

const Order = () => {
    const {productId} = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    const { register, handleSubmit } = useForm();
   
    const {user} = useAuth()

    const email = user.email;
    const price = singleProduct?.price;
    const product = singleProduct?.name;
    const image = singleProduct?.image;

    const onSubmit = data => {
        data.email = email;
        data.price = price;
        data.productName = product;
        data.image = image;
        data.status = "pending"

        fetch("https://stormy-woodland-20048.herokuapp.com/confirmOrder",{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data),            
        })
        .then( res => res.json())
        .then(result => console.log(result))
        console.log(data);

    }
   

    useEffect(()=>{
        fetch(`https://stormy-woodland-20048.herokuapp.com/singleproduct/${productId}`)
        .then(res => res.json())
        .then(data => setSingleProduct(data))
    },[])
    return (
        <div className="row">
            <h2>Order</h2>
            <div className="col-md-6">
                <img className="w-50" src={singleProduct?.image} alt="" />
                <p>{singleProduct?.description}</p>
                <h3>{singleProduct?.price}</h3>


            </div>
            <div className="col-md-6">
               
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Order Form</h2>

<input placeholder="Your Name" defaultValue="" {...register("name")} />
<input placeholder="Address" defaultValue="" {...register("address")} />
<input placeholder="City" defaultValue="" {...register("city")} />
<input placeholder="phone number" defaultValue="" {...register("phone")} />

<input  type="submit" />
            </form>
                

            </div>
        </div>
    );
};

export default Order;