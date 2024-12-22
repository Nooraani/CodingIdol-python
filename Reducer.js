//reducer me do argument hotA hai pehla 
// reducer hamesha new state ko return krta hai 
//reducer old state ko direct modify nhi krtaa hai
import {createStore} from '@reduxjs/toolkit'
const Add_Task="Task/Add";//Task is Initial State
const Delete_Task="Task/Delete";
const inittialstate={
    task:[],
    isLoading:false,
}

const Reducer = (state=inittialstate,action) => {
     switch(action.type){
        case Add_Task:
            return{
                ...state,//ye old state ko direct modify nhi krta hai isliye spread opr ka use kiye hain
                task:[...state.task,action.payload],//payload new data ko add krta hai yahan pe payload ki jagah kuchh bhi likh sakte hai 
            }
        case Delete_Task:
            const update=state.task.filter((curElement,index)=>{
                return index !== action.payload;
            })
            return{
                ...state,
                task:update,

            }
        default:return state;      
     }
}
const store=createStore(Reducer);
console.log(store)
//getState hame btata hai ki reducer me initialstate ke andr kya hai
console.log(store.getState()) 
//dispatch ki mdd se array me data ko add aur delete krte hain
store.dispatch({type:Add_Task,payload:"hey EveryOne"}); 
console.log("update value in Array",store.getState())
store.dispatch({type:Add_Task,payload:"i am noorani"})
console.log(store.getState())
store.dispatch({type:Delete_Task,payload:1})
console.log(store.getState())
