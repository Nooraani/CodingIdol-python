import { createStore } from "redux";

const InitialStage={
    task:[],
}
const Add_Task="task/Add";
const Delete_Task="task/Delete";
const Store = (state=InitialStage,action) => {
   switch(action.type){
    case Add_Task:
        return{
            ...state,
            task:[...state.task,action.payload],
        }
    case Delete_Task:
       const update=state.task.filter((cur_Element,index)=>{
        return index !==action.payload;
       })
       return{
        ...state,
        task:update,
       }
    default:return state;
        
   }
}
const stores=createStore(Store)

console.log(stores.getState())// getState hame reducer ka state deta hai 
stores.dispatch({type:Add_Task,payload:"noorani"});
console.log(stores.getState())
stores.dispatch({type:Delete_Task,payload:0})//dispatch ki madd se 
console.log(stores.getState())

