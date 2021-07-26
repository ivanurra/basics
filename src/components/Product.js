import React from 'react'

const Product = ({product, cart, addProduct, products}) => {

    const selectProduct = (id) => {
        const product = products.filter(product => product.id === id)[0];
        console.log(product);
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button
                type="button"
                onClick={ () => selectProduct(product.id)}
            >
            Buy item
            </button>
        </div>
    );
}
 
export default Product;