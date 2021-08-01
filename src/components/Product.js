import React from "react";
import './product.css';

const Product = ({product, cart, addProduct, products }) => {

  const {name, price, id} = product;

  const selectProduct = (id) => {
    const product = products.filter((product) => product.id === id)[0];
    addProduct([...cart, product]);
  };

  const deleteProduct = (id) => {
    const products = cart.filter((product) => product.id !== id);
    addProduct(products);
  };

  return (
    <div>
      <h2 className="product">{name}</h2>
      <p className="price">${price}</p>
      {products ? (
        <button className="button" type="button" onClick={() => selectProduct(id)}>
          Buy item
        </button>
      ) : (
        <button type="button" onClick={() => deleteProduct(product.id)}>Delete</button>
      )}
    </div>
  );
};

export default Product;
