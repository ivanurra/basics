import { Fragment } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {

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
