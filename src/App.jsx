// import React from 'react'
// import Navbar from './Navbar'


// import { BrowserRouter, Routes, Route } from "react-router-dom"

// import Home from "./Home"
// import Products from "./Products"

// function App() {
//   return (
//     <BrowserRouter>

//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />} />
//       </Routes>

//     </BrowserRouter>
//   )
// }

// export default App

// import React from 'react'
// import{useState} from 'react'
// const arr = ["Home", "Products", "About", "Contact"," Services", "Blog", "Careers",
//    "FAQ", "Testimonials", "Gallery", "Events", "Pricing", "Support", "Privacy Policy",
//    "Terms of Service", "Sitemap", "Login", "Register", "Dashboard", "Settings"]

// function App() {
//   const[page, setPage] = useState(1)
//   const perpage = 3;
//   const startIndex = (page - 1) * perpage
//   // console.log(startIndex)

// //   const myProducts = arr.slice(startIndex, startIndex + perpage)
// //   const totalPages = Math.floor(arr.length / perpage)
// // //   console.log(totalPages)

// // //   return (
// // //     <div>
// // //       <button>{index+1}</button>


// // //     </div>
// // //   )
// // // }

// // // // export default App


// // import { useState } from "react";
// // const arr = ["Java", "Oops", "React", "JavaScript", "Oracle", "HoneySingh", "DBMS", "Badshaah", "JAvac", "JRE"]
// // function App(){
// // const[page, setPage] = useState(1);
// // const perpage = 3
// // const startIndex = (page-1)*perpage
// // // console.log(startIndex);
// // const myproducts = arr.slice(startIndex, startIndex+perpage)
// // const totalpages = Math.ceil(arr.length/perpage);





// import { useState } from "react";

// const arr = [
//   "Phone", "Laptop", "Tv", "Fridge", "Ac",
//   "Fan", "Projector", "Charger", "Controller", "Wires"
// ];

// function App() {
//   const [page, setPage] = useState(1);

//   const perpage = 3;

//   const startIndex = (page - 1) * perpage;

//   const myproducts = arr.slice(startIndex, startIndex + perpage);

//   const totalpages = Math.ceil(arr.length / perpage);

//   return (
//     <div>
     

//       {myproducts.map((i, index) => {
//         return (
//           <li key={index}>
//             {i}
//           </li>
//         );
//       })}

      

      
//       <button
//         onClick={() => setPage(page - 1)}
//         disabled={page === 1}
//       >
//         Previous
//       </button>

      
//       {Array.from({ length: totalpages }, (_, index) => {
//         return (
//           <button
//             key={index}
//             onClick={() => setPage(index + 1)}
//             style={{
//               backgroundColor: page === index + 1 ? "lightblue" : "white",
//               margin: "5px"
//             }}
//           >
//             {index + 1}
//           </button>
//         );
//       })}

     
//       <button
//         onClick={() => setPage(page + 1)}
//         disabled={page === totalpages}
//       >
//         Next
//       </button>

//     </div>
//   );
// }

// export default App;



// import { useState } from "react";
// import React from 'react'

// function App() {
//   const[x, setX] = useState(false);
//   return (
//     <div>

//       <button onClick={()=>setX(true)}>
//         show
//       </button>
//       {
//         x && (
//           <div>
//             <h1>hello</h1>
//             <button onClick={()=>setX(false)}>
//               close
//             </button>
//           </div>
//         )
//       }
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react';


// function App() {
//   const[x, setX] = useState("Home");
//   return (
//     <div>

//       <button onClick={() => setX("Home")}>Home</button>
//       <button onClick={() => setX("Contacts")}>Contacts</button>
//       <button onClick={() => setX("About")}>About</button>

//       {
//         x=== "Home" && (<h1>Home</h1>)}
//       {
      
//         x=== "Contacts" && (<h1>Contacts</h1>)
// }
//  {     
//         x=== "About" && (<h1>About</h1>)
//       }
//     </div>
//   )
// }

// export default App


// import React from 'react';
// import { useState } from 'react';

// function App() {
//   const[x,setX] = useState("");
//   return (
//     <div>
//       <select value={x} onChange={(e) => setX(e.target.value)}>
//         <option value="home">Home</option>
//         <option value="about">About</option>
//         <option value="contact">Contact</option>
//       </select>
//       {x}
//     </div>
//   );
// }
// export default App;

// import React, { useEffect, useState } from 'react';

// function App() {
//   const [x, setX] = useState([]);
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     let timer = setTimeout(() => {
//        fetch(`https://dummyjson.com/products/search?q=${input}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setX(data.products);
//       },5000);
   
//   }, [input]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />

//       {x.map((item) => (
//         <li key={item.id}>{item.title}</li>
//       ))}
//     </div>
//   );
// }

// export default App;

// query parameter banana ne pdega;

// import React, { useEffect, useState } from 'react';

// function App() {
//   const [x, setX] = useState([]);
//   const [input, setInput] = useState("");

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       fetch(`https://dummyjson.com/products/search?q=${input}`)
//         .then((res) => res.json())
//         .then((data) => {
//           setX(data.products);
//         });
//     }, 5000);

//     return () => {clearTimeout(timer)};
//   }, [input]);

//   return (
//     <div>
//       <input
//         type="text"
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//       />

//       {x.map((item) => (
//         <li key={item.id}>{item.title}</li>
//       ))}
//     </div>
//   );
// }

// export default App;



//Query parameter URL ke andar additional information bhejne ka ek way hai, 
// usually ? ke baad.
//Debouncing delays a function's execution until a 
// certain amount of time has passed since the last event.


// import React from "react";
// import{ToastContainer, toast} from "react-toastify"


// function App() {
//   // const notify = () => toast("YOO YOO HONEY SINGH");
//   function notification(e){
//     e.preventDefault()
    
//     toast.success("YOO YOO HONEY SINGH!")
//   }
//   return (
//     <div>

//       <ToastContainer />


//       <form onSubmit={notification}>
//         <label>Name:</label>
//         <input type="text" name="name" />
        

//         <label>Gmail:</label>
//         <input type="email" name="gmail" />
        

//         <label>Password:</label>
//         <input type="password" name="password" />
       

//         <label>Phone No:</label>
//         <input type="tel" name="phone" />
        

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;





import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  function submit(e) {
    e.preventDefault();

    toast.success("YOO YOO HONEY SINGH");

  }

  return (
    <div>
      

      <form onSubmit={submit}>

        Name:
        <input type="text" onChange={(e) => setName(e.target.value)} />
    

        Email:
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        

        Password:
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        

        Phone:
        <input type="tel" onChange={(e) => setPhone(e.target.value)} />
        

        <button type="submit">Submit</button>

      </form>

     

      <p>{name}</p>
      <p>{email}</p>
      <p>{password}</p>
      <p>{phone}</p>

      <ToastContainer />

    </div>
  );
}

export default App;