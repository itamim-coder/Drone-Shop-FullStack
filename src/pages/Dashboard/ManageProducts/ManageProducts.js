import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import DashNav from '../DashNav/DashNav';

const ManageProducts = () => {
    const {user} = useAuth();
    const [products, setProducts] = useState([])
    const userEmail = user.email;

    const [control , setControl] = useState(false)

    useEffect(()=>{
        fetch("https://stormy-woodland-20048.herokuapp.com/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[control])    

    const handleDelete = (id) =>{
        alert("are you sure?");
        fetch(`https://stormy-woodland-20048.herokuapp.com/products/${id}`,{
           method: "DELETE", 
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount) {
                setControl(!control)
            }
        })
console.log(id)

    }
    return (
        <div>
        <DashNav></DashNav>
        <div>
            <div>
                {products.map(product =>(
                    <div>
                       <table>
            <thead>
            <tr >
                <th className="m-3">Product Name</th>
                
                <th>Unit Price</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                  {product?.name}  <td/>
                    
                   {product?.price} <td/>
                   <button onClick={()=>handleDelete(product?._id)} >Delete Product</button> <td/>
                </tr>
            </tbody>
        </table>
                    </div>

                 ))}
            </div>
        </div>
    </div>
    
);

};
    


export default ManageProducts;