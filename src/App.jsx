import "./App.css";
import AllProducts from "./components/allProducts";
import SingleProduct from "./components/singleProduct";
import Nav from "./components/nav";
import { useState } from 'react'

function App() {
  console.log(AllProducts);
  return (
    <div className="App">
      <h1>My Store</h1>
      <Nav />
      {/* <Routes>
        <Route path="/" element={<allProducts />} />
        <Route path="/:id" element={<singleProduct />} />
      </Routes> */}
    </div>
  );
}

export default App;
