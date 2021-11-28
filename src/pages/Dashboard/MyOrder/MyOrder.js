import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

import useAuth from '../../../hooks/useAuth'
import DashNav from '../DashNav/DashNav';
import './MyOrder.css'


const MyOrder = () => { 
    const {user} = useAuth();
    const [userOrder, setUserOrder] = useState([])
    const userEmail = user.email;

    const [control , setControl] = useState(false)

    useEffect(()=>{
        fetch(`https://stormy-woodland-20048.herokuapp.com/myorder/${userEmail}`)
        .then(res => res.json())
        .then(data => setUserOrder(data))
    },[control])    

    const handleDelete = (id) =>{
        alert("are you sure?");
        fetch(`https://stormy-woodland-20048.herokuapp.com/cancelorder/${id}`,{
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
            <div className="text-center  container">
              
                            <Table striped bordered>
  <thead>
    <tr>
      
      <th>#</th>
      <th>Product  Name</th>
      <th>Product  Name</th>
      <th>Unit Price </th>
      <th>Order Status</th>
      <th>Action</th>
    </tr>
  </thead>
  {userOrder.map((order, index) =>(
  <tbody>
      
    <tr>
        
      <td>{index}</td>
      <td>{order?.productName}</td>
      <td> <img className="order-product" src={order?.image} alt="" /></td>
      <td>{order?.price}</td>
      <td> {order?.status}</td>
      <td> <button className="cancel-btn" onClick={()=>handleDelete(order?._id)} >Cancel Order</button></td>
    </tr>
   
   
  </tbody>
   ))}
  
</Table>
         
        </div>
        </div>
        
    );
    
};

export default MyOrder;