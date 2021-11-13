import React, { useEffect, useState } from 'react';

import useAuth from '../../../hooks/useAuth'
import DashNav from '../DashNav/DashNav';


const MyOrder = () => { 
    const {user} = useAuth();
    const [userOrder, setUserOrder] = useState([])
    const userEmail = user.email;

    const [control , setControl] = useState(false)

    useEffect(()=>{
        fetch(`http://localhost:5000/myorder/${userEmail}`)
        .then(res => res.json())
        .then(data => setUserOrder(data))
    },[control])    

    const handleDelete = (id) =>{
        alert("are you sure?");
        fetch(`http://localhost:5000/cancelorder/${id}`,{
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
                    {userOrder.map(order =>(
                        <div>
                           <table>
                <thead>
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
                       {order?.status} <td/>

                       <button onClick={()=>handleDelete(order?._id)} >Cancel Order</button> <td/>
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

export default MyOrder;