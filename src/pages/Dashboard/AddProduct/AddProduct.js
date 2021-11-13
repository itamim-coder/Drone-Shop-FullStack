import React, { useState } from 'react';
import DashNav from '../DashNav/DashNav'
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const [success, setSuccess] = useState(false);

    const onSubmit = data => {
       

        fetch("https://stormy-woodland-20048.herokuapp.com/products",{
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(data),            
        })
        .then( res => res.json())
        .then(result => console.log(result))
        console.log(data);

    }
   
    return (
     <>
     <DashNav></DashNav>
        <div>
           
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
            <h2>Add Product</h2>

<input placeholder="Products Name" defaultValue="" {...register("name")} />
<input placeholder="Image Url" defaultValue="" {...register("image")} />
<input placeholder="Price" defaultValue="" {...register("price")} />
<textarea placeholder="Description" defaultValue="" {...register("description")} />

<input  type="submit" />
            </form>
 { !success &&  
<div class="w-50 alert alert-success alert-dismissible fade show">
        <strong>Success!</strong>  Products Successfully
  </div>  
}
                

        </div>
     </>
    );
};

export default AddProduct;