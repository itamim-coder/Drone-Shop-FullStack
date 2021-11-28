import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import DashNav from '../Dashboard/DashNav/DashNav';
import './ManageOrder.css'


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
        <div className="text-center  container">
     <Table  striped bordered>
   
     <thead>
<tr >
                <th className="m-3">Product Name</th>
                <th>Products image</th>
                <th>Unit Price</th>
              
                <th>Active Status</th>
                <th>Action</th>
            </tr>
</thead>
                {ordersStatus.map(order =>(
                 
                     
                     <tbody>
   <tr>
    <td> {order?.productName}  </td>       
    <td> <img className="order-product" src={order.image} alt="" />  </td>       
     <td> {order?.price} </td>
       <td>  
<form onSubmit={handleSubmit(onSubmit)}>      
<select
onClick={()=>handleStatus(order?._id)} 
{...register("status")}>


<option value="pending">Pending</option>
<option value="shipped">Shipped</option>

</select>
<input  className="green-btn m-2" type="submit" />
</form> </td>
     <td> <button className="green-btn"  onClick={()=>handleStatus(order?._id)} >Done</button> </td>
   </tr>
</tbody>
       
                    
                 ))}
           
     </Table>
     </div>
       



              
              {/* <Table striped bordered>
<thead>
<tr >
                <th className="m-3">Product Name</th>
                
                <th>Unit Price</th>
                <th>Active Status</th>
                <th>Action</th>
            </tr>
</thead>
{ordersStatus.map(order  =>(
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
))}

</Table> */}


</div>
    
    
);

};
    


export default ManageOrder;