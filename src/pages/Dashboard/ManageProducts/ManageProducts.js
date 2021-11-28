import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import DashNav from '../DashNav/DashNav';
import { Table } from 'react-bootstrap';

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
           
    
            <div className="text-center  container">
              
              <Table striped bordered>
<thead>
<tr>


<th>Product  Name</th>
<th>Product  Name</th>
<th>Unit Price </th>

<th>Action</th>
</tr>
</thead>
{products.map(product  =>(
<tbody>

<tr>


<td>{product?.name}</td>
<td> <img className="order-product" src={product.image} alt="" /></td>
<td>{product?.price}</td>

<td>   <button className="cancel-btn" onClick={()=>handleDelete(product?._id)} >Delete Product</button></td>
</tr>


</tbody>
))}

</Table>


</div>
</div>
</div>
              
    
);

};
    


export default ManageProducts;