import React from 'react';
import Product from "./Product";
import './cart.css';


const Cart = ({cart, addProduct}) => (
    <div className="cart">
        <h3>Your shopping cart</h3>
        {cart.length === 0
        
        ?
            <p>No items</p>
        : cart.map(product =>(
            <Product 
                key={product.id}
                product={product}
                cart={cart}
                addProduct={addProduct}
            />
        ))}
    </div>
);
 
export default Cart;
