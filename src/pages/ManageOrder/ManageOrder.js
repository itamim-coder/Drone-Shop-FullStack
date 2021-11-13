import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import DashNav from '../Dashboard/DashNav/DashNav';


const ManageOrder = () => {
    // const {user} = useAuth();
    const [ordersStatus, setOrdersStatus] = useState([])
    const { register, handleSubmit } = useForm();
    // const [id, setId] = useState("");
    const [orderId, setOrderId] = useState("");
    
    // const userEmail = user.email;

    const [control , setControl] = useState(false)

    useEffect(()=>{
        fetch("https://stormy-woodland-20048.herokuapp.com/confirmOrder")
        .then(res => res.json())
        .then(data => setOrdersStatus(data))
    },[])    

   const handleStatus = (id) => {
       console.log(id)
       setOrderId(id)

   }
    const onSubmit = (data , e) => {
       
        console.log(data)
        fetch(`https://stormy-woodland-20048.herokuapp.com/status/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((result) => console.log(result));
            e.preventDefault()
        };

  
    return (
        <div>
        <DashNav></DashNav>
        <div>
            <div>
                {ordersStatus.map(order =>(
                    <div>
                       <table>
            < thead>
            <tr >
                <th className="m-3">Product Name</th>
                
                <th>Unit Price</th>
                <th>Active Status</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
                <tr>
                  {order?.productName}  <td/>
                    
                   {order?.price} <td/>
                    <td>  
             <form onSubmit={handleSubmit(onSubmit)}>      
      <select
      onClick={()=>handleStatus(order?._id)} 
      {...register("status")}>
       
       
        <option value="pending">Pending</option>
        <option value="shipped">Shipped</option>
       
      </select>
      <input type="submit" />
    </form> </td>
                   <button  onClick={()=>handleStatus(order?._id)} >Done</button> <td/>
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
    


export default ManageOrder;