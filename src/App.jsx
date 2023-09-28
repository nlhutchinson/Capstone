import "./App.css";
import AllProducts from "./files/allProducts";
import SingleProduct from "./files/singleProduct";
import Nav from "./files/nav";
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
