import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import DashNav from '../DashNav/DashNav';

const CreateAdmin = () => {
    const [email, setEmail] = useState('');
    const { register, handleSubmit } = useForm();

    // const handleOnBlur = e => {
      
        const [success, setSuccess] = useState(false);

      
        
    //     setEmail(e.target.value);
    // }
    const onSubmit = data => {
      
       fetch("https://stormy-woodland-20048.herokuapp.com/users",{
        method: "PUT",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(data),            
    })
    .then( res => res.json())
    .then(result => {
        if (data.modifiedCount) {
            setEmail('')
            setSuccess(true);
         
        }
       
    }
        )
       
      
    } 

    return (
        <>
        <DashNav></DashNav>
        <div className="">
            
            <h2>create admin</h2>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="email" defaultValue="" {...register("email")} />

<input  type="submit" />
</form>
{ !success &&  
<div class="w-50 alert alert-success alert-dismissible fade show">
        <strong>Success!</strong>  Created Admin Successfully
  </div>  
}
        </div>
        </>
    );
};

export default CreateAdmin;