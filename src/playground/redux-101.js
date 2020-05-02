import { createStore } from "redux";

const add = ({a,b}) =>{
    return  a+b
}

console.log(add({a:1,b:12}))

// ActionCreator
const incrementCount = ({ incrementBy = 1 } = {}) =>{
    return({
        type: "INCREMENT",
        incrementBy
    })
}

const decrementCount = ({decrementBy=1} = {}) => {
    return({
        type:'DECREMENT',
        decrementBy
    })
}

// setCount
const setCount = ({count=10} = {}) =>{
    return {
        type:'SET_COUNT',
        count
    }
}

// resetCount
const resetCount = () =>{
    return {
        type:'RESET_COUNT',
    }
}

// Reducers

//  1. reducer is a PureFunction
//  2.Never Change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case "INCREMENT":
          console.log("Increment is running")
        return {
          count: state.count + action.incrementBy,
        };
        case "DECREMENT":
            let decrementBy = typeof action.decrementBy == 'number'? action.decrementBy :-1;
            console.log("Decerement is running")
            return {
                count:state.count-decrementBy
            }
          case 'RESET_COUNT':
              console.log("we are inside the Reset")
              return {
                  count:0
              }
          case 'SET_COUNT':
              console.log("we are inside set Method")
              return {
                  count:action.count
              }
      default:
        return state;
    }
  }

// store  createStore is a callBack
const store = createStore(countReducer);


// using Subscribe Method takes in a callBack
const unSubscribe = store.subscribe(()=>{
console.log(store.getState());
})


// store dispatch takes in object Type
store.dispatch(incrementCount({ incrementBy: 5}))

store.dispatch(incrementCount())
// unSubscribe();

store.dispatch(decrementCount())


store.dispatch(setCount());
 

 store.dispatch(resetCount())

// After action Dispatch
// console.log(store.getState());
 
