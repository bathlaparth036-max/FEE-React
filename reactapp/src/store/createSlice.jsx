// // import {createSlice} from "@reduxjs/toolkit";

// // const createSlice = createSlice({
// //     name : "counter",
// //     initialState:{
// //         value:0
// //     },
// //     reducers:{
// //         increment:(state)=>{
// //             state.value+=1;
// //         },
// //         decrement:(state)=>{
// //             state.value-=1;
// //         },
// //         reset:(state)=>{
// //             state.value = 0;
// //         }
// //     }
// // });
// // export const { increment, decrement, reset } = counterSlice.actions;
// // export default counterSlice.reducer;


// // import { createSlice } from "@reduxjs/toolkit";

// // const counterSlice = createSlice({


// // name: "counter",

// // initialState: {
// //     value: 0
// // },

// // reducers: {

// //     increment: (state) => {
// //         state.value += 1;
// //     },

// //     decrement: (state) => {
// //         state.value -= 1;
// //     },

// //     reset: (state) => {
// //         state.value = 0;
// //     }

// // }


// // });

// // export const { increment, decrement, reset } = counterSlice.actions;

// // export default counterSlice.reducer;
// import { createSlice } from "@reduxjs/toolkit";

// const counterSlice = createSlice({
//   name: "counter",

//   initialState: {
//     value: 0
//   },

//   reducers: {
//     increment: (state) => {
//       state.value += 1;
//     },

//     decrement: (state) => {
//       state.value -= 1;
//     },

//     reset: (state) => {
//       state.value = 0;
//     },

//     changeName: (state, action) => {
//       state.name = action.payload;
//     }
 
//   }
// });

// export const { increment, decrement, reset, changeName } = counterSlice.actions;

// export default counterSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0,
    name: "Parth"
  },

  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    reset: (state) => {
      state.value = 0;
    },

    changeName: (state, action) => {
      state.name = action.payload;
    }
  }
});

export const {
  increment,
  decrement,
  reset,
  changeName
} = counterSlice.actions;

export default counterSlice.reducer;