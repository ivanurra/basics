import { Fragment, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

  const [ products, setProducts] = useState([
    { id: 1, name: 'tshirt', price: 30},
    { id: 2, name: 'jeans', price: 60},
    { id: 3, name: 'hut', price: 50},
    { id: 4, name: 'shoes', price: 80},
  ]);

  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        title="Virtual Shop"
      />
      <Footer 
        date={date}
      />
    </Fragment>
  );
}

export default App;
