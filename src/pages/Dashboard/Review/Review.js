import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import DashNav from '../DashNav/DashNav';
import './Review.css'


const Review = () => {
    const { register, handleSubmit } = useForm();

    const {user} = useAuth();

    const onSubmit = data =>{
        console.log(data)
        fetch('http://localhost:5000/reviews',{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data),            
        })
        .then( res => res.json())
        .then(result => console.log(result))
        console.log(data);

    }
    

    // useEffect(()=>{
    //     fetch('http://localhost:5000/allreview')
    // },[]))
    return (
        <div>
            <DashNav></DashNav>
           
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
            <h1>Add review</h1>

<input placeholder="Your Name" defaultValue="" {...register("name" ,{required: true})} />
<input placeholder="Rating (0-5)" type="number" {...register("rating", { min: 1, max: 5 })} />
<textarea placeholder="Your Review" defaultValue="" {...register("review", {required: true})} />


<input  type="submit" />
            </form>
        </div>
    );
};

export default Review;