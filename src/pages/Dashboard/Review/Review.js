import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import DashNav from '../DashNav/DashNav';
import './Review.css'


const Review = () => {
    const { register, handleSubmit } = useForm();
    const [success, setSuccess] = useState(false);

    const {user} = useAuth();

    const onSubmit = data =>{
        console.log(data)
        fetch('https://stormy-woodland-20048.herokuapp.com/reviews',{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data),            
        })
        .then( res => res.json())
        .then(result => console.log(result))
        console.log(data);
        

    }
    

    // useEffect(()=>{
    //     fetch('https://stormy-woodland-20048.herokuapp.com/allreview')
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
            { !success &&  
<div class="w-50 alert alert-success alert-dismissible fade show">
        <strong>Success!</strong>  Review Added Successfully
  </div>  
}
        </div>
    );
};

export default Review;