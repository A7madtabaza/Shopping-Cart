import Cart from "./components/cart";

import Productlist from "./components/productlist";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Productlist />} />
        <Route path="/Cart" element={<Cart />} />

      </Routes>
    </Router>
  );
}

export default App
