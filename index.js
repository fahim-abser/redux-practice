// // const { createStore } = require("redux")

// // const INCREMENT ="INCREMENT"
// // const DECREMENT ="DECREMENT"
// // const INCREMENT_BY_VALUE ="INCREMENT_BY_VALUE"
// // const RESET="RESET"

// // //state
// // const initialState={
// //     count: 0
// // }

// // //action
// // const incrementCounterAction =()=>{
// //     return{
// //         type: INCREMENT
// //     }
// // }
// // const decrementCOunterAction=()=>{
// //     return{
// //         type: DECREMENT
// //     }
// // }
// // const resetAction=()=>{
// //     return{
// //         type: RESET
// //     }
// // }
// // const incrementCounterByValue=(value)=>{
// //     return{
// //         type: INCREMENT_BY_VALUE,
// //         payload: value
// //     };
// // };
// // //reducer
// // const counterReducer = (state=initialState, action) =>{
// //     switch (action.type) {
// //         case INCREMENT:

// //             return{
// //                 ...state,
// //                 count: state.count + 1,
// //             }
// //         case DECREMENT:
// //             return{
// //                 ...state,
// //                 count: state.count-1
// //             }
// //         case RESET:
// //             return{
// //                 ...state,
// //                 count: 0
// //             }
// //         case INCREMENT_BY_VALUE:
// //             return{
// //                 ...state,
// //                 count: state.count + action.payload
// //             }
// //         default:
// //             state;
// //     }
// // }

// // //store
// // const store = createStore(counterReducer)

// // store.subscribe(()=>{
// //     console.log(store.getState());
// // })
// // // store.dispatch(incrementCounterAction())
// // // store.dispatch(incrementCounterAction())
// // // store.dispatch(incrementCounterAction())
// // // store.dispatch(decrementCOunterAction())
// // // store.dispatch(resetAction())
// // // store.dispatch(incrementCounterAction())
// // store.dispatch(incrementCounterByValue(5))
// // store.dispatch(incrementCounterByValue(2))

// const { createStore } = require("redux");
// const ADD_USER="ADD_USER"
// //state
// const initialState =  {
//     users:['Abul'],
//     count:1
// }
// //Action
// const addUser=(name)=>{
//     return{
//         type: ADD_USER,
//         payload: name,
//     };
// };
// //Reducer
// const userReducer = (state=initialState, action)=>{
// switch (action.type) {
//     case ADD_USER:

//         return{
//             users: [...state.users, action.payload],
//             count: state.count +1
//         }

//     default:
//         state;
// }
// }
// //store
// const store= createStore(userReducer)
// store.subscribe(()=>{
//     console.log(store.getState());
// })
// store.dispatch(addUser('Babul'))
// store.dispatch(addUser('Kalam'))

// const { createStore, combineReducers } = require("redux");
// //product constant
// const GET_PRODUCTS = "GET_PRODUCTS";
// const ADD_PRODUCT = "ADD_PRODUCT";

// //cart constant
// const GET_CART_ITEMS = "GET_CART_ITEMS";
// const ADD_CART_ITEM = "ADD_CART_ITEM";

// //product state
// const initialProductState = {
//   products: ["Egg", "Banana"],
//   numberOfProduct: 2,
// };
// //cart state
// const initialProductCart = {
//   cart: ["Egg"],
//   numberOfProduct: 1,
// };

// //Product Action
// const getProducts = () => {
//   return {
//     type: GET_PRODUCTS,
//   };
// };
// const addProduct = (product) => {
//   return {
//     type: ADD_PRODUCT,
//     payload: product,
//   };
// };
// // Cart Product Action
// const getCart = () => {
//   return {
//     type: GET_CART_ITEMS,
//   };
// };
// const addCart = (product) => {
//   return {
//     type: ADD_CART_ITEM,
//     payload: product,
//   };
// };

// //Product reducer
// const productReducer = (state = initialProductState, action) => {
//   switch (action.type) {
//     case GET_PRODUCTS:
//       return {
//         ...state,
//       };
//     case ADD_PRODUCT:
//       return {
//         products: [...state.products, action.payload],
//         numberOfProduct: state.numberOfProduct + 1,
//       };

//     default:
//       return state;
//   }
// };
// //cart reducer
// const cartReducer = (state = initialProductCart, action) => {
//   switch (action.type) {
//     case GET_CART_ITEMS:
//       return {
//         ...state,
//       };
//     case ADD_CART_ITEM:
//       return {
//         cart: [...state.cart, action.payload],
//         numberOfProduct: state.numberOfProduct + 1,
//       };

//     default:
//       return state;
//   }
// };
// const rootReducer = combineReducers({
//     productReducer: productReducer,
//     cartReducer: cartReducer,
// });

// //store

// const store = createStore(rootReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// });
// //dispatch
// store.dispatch(getProducts());
// store.dispatch(addProduct("Mango"));


// store.dispatch(getCart());
// store.dispatch(addCart("Apple"));




const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");
//product constant
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

//product state
const initialProductState = {
  products: ["Egg", "Banana"],
  numberOfProduct: 2,
};


//Product Action
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  };
};
const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

//Product reducer
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProduct: state.numberOfProduct + 1,
      };

    default:
      return state;
  }
};

//store

const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});
//dispatch
store.dispatch(getProducts());
store.dispatch(addProduct("Mango"));


