// 

// import { configureStore } from "@reduxjs/toolkit";

// import counterReducer from "./createSlice";

// const store = configureStore({


// reducer: {
//     mystore: counterReducer
// }


// });

// export default store;

// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./createSlice.js";

// const store = configureStore({
//   reducer: {
//     mystore: counterReducer
//   }
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./createSlice.jsx";

const store = configureStore({
  reducer: {
    mystore: counterReducer
  }
});

export default store;