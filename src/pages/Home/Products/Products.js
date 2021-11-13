import React ,{useEffect, useState} from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() =>{
        fetch('http://localhost:5000/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className="products-container container">
            {
                
                products.slice(0,6).map(product => <Product
                key={product.id}
                product = {product}
                >

                </Product> )
            }
        </div>
    );
};

export default Products;