import React from "react";

const Product = ({ product, cart, addProduct, products }) => {
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
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      {products ? (
        <button type="button" onClick={() => selectProduct(product.id)}>
          Buy item
        </button>
      ) : (
        <button type="button" onClick={() => deleteProduct(product.id)}>Delete</button>
      )}
    </div>
  );
};

export default Product;
