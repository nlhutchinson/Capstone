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

// import { useState } from 'react'
// import {puppyList} from './data.js'
// import './App.css'

// function App() {
// const [puppies, setPuppies] = useState(puppyList);
// const [featPupId, setFeatPupId] = useState(null);
//   console.log("puppyList: ",puppies);
//   const featuredPup = puppies.find((pup)=> pup.id === featPupId);
//   console.log(featuredPup);
//   return (
//       <div className="App">
//         {
//           puppies.map((puppy) => {
//             return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>
//               {puppy.name}</p>
//           })
//         }
//         {featPupId && (
//           <div>
//             <h2>{featuredPup.name}</h2>
//             <ul>
//               <li>Age: {featuredPup.age}</li>
//               <li>Email: {featuredPup.email}</li>
//             </ul>
//             </div>
//         )}
//       </div>
//   );
// }

// export default App
