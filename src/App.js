import { Fragment, useState } from "react";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Product from "./components/Product";

export default function App() {

  // List of products
  const [ products, setProducts] = useState([
    { id: 1, name: 'Tshirt', price: 30},
    { id: 2, name: 'Jeans', price: 60},
    { id: 3, name: 'Hut', price: 50},
    { id: 4, name: 'Shoes', price: 80},
  ]);

  const [cart, addProduct] = useState([])

  // Get the date
  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        title="Fake Shop"
      />

      <h1>List of products</h1>
      {products.map(product => (
        <Product
            key={product.id}
            product={product}
            products={products}
            cart={cart}
            addProduct={addProduct}
        />
      ))}

    <Cart
      cart={cart}
      addProduct={addProduct}
    />
      <Footer 
        date={date}
      />
    </Fragment>
  );
}
