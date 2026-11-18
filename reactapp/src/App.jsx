// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, reset } from "./store/createSlice.jsx";
// import "./App.css";

// function App() {
//   const count = useSelector((state) => state.mystore.value);
//   const dispatch = useDispatch();

//   return (
//     <div>
      

//       <h2>Count: {count}</h2>
//        <h2>Name: {name}</h2>

//       <button type="button" onClick={() => dispatch(decrement())}>
//         Decrement
//       </button>

//       <button type="button" onClick={() => dispatch(reset())}>
//         Reset
//       </button>

//       <button type="button" onClick={() => dispatch(increment())}>
//         Increment
//       </button>
//       <button onClick={() => dispatch(changeName("Parth"))}>
//         Change Name
//       </button>
//     </div>
//   );
// }

// export default App;



import { useDispatch, useSelector } from "react-redux";

import {
  decrement,
  increment,
  reset,
  changeName
} from "./store/createSlice.jsx";

import "./App.css";

function App() {
  const count = useSelector((state) => state.mystore.value);
  const name = useSelector((state) => state.mystore.name);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Count: {count}</h2>

      <h2>Name: {name}</h2>

      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(changeName(name === "Parth" ? "Rishu" : "Parth"))}>Change Name</button>
    </div>
  );
}

export default App;