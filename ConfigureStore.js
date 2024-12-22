//configure Store ek aisa hai store hai jahan pe combine krta hai bohot saare reducer ko 

import { configureStore } from "@reduxjs/toolkit";

// isme byDefault redux thunk ko apply kr deta hai 
export const InitialStage={
    task:[],
}
const Add_Task="task/Add";
const Delete_Task="task/Delete";
const ConfigureStores=(state=InitialStage,action)=>{
    switch(action.type){
        case Add_Task:
            return{
                ...state,
                task:[...state.task,action.payload],
            }
        case Delete_Task:
            const Delete=state.task.filter((cur_Element,index)=> index !==action.payload);
            return{
                ...state,
                task:Delete,
            }
        default :return state;    
    
    }
}
export const ConfigStore=configureStore({
    reducer:{
        ConfigureStores,
    }
})
console.log(ConfigStore)// isme yah ata hai ke kon kon se function use kr sakte hain
console.log(ConfigStore.getState())// isme hame pta chalta hai ke initial state ke andr kya hai
// Add Data
export const HandleInputes=(input)=>{
    return({type:Add_Task,payload:input})
}
// ConfigStore.dispatch({type:Add_Task,payload:"Noorani"})
console.log(ConfigStore.getState())
export const Delete_Item=(id)=>{
    return({type:Delete_Task,payload:id})
}
ConfigStore.dispatch({type:Delete_Task,payload:1})
console.log(ConfigStore.getState())
// acess  in react
