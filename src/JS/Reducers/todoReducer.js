import { ADD_TASK ,EDIT_TASK,COMPLETE_TASK,DELETE_TASK} from "../Constants/actions-types";

const initialState = {
    todoList: [
        
        {
            description:"My first Task",
            id:0,
            isDone: false

        },
        {
            description:"My second Task",
            id:1,
            isDone: false

        },
        {
            description:"My third Task",
            id:2,
            isDone: false
        }

    ]
}

const todoReducer =(state=initialState,{type,payload})=>{
    switch (type){
case ADD_TASK :
    return { 

        ...state, 
        todoList:[...state.todoList,payload]
    }
case EDIT_TASK :
    return { 

        ...state, 
        todoList:state.todoList.map(
            (todo)=>todo.id === payload.id ?
            {...todo,text:payload.text}: todo

            )
    }
case COMPLETE_TASK :
    return { 

        ...state, 
        todoList:state.todoList.map(
            (todo)=>todo.id === payload.id ?
            {...todo,isDone:!todo.isDone}: todo

            )
    }
case DELETE_TASK :
    return { 

        ...state, 
        todoList:state.todoList.filter(
            (todo)=>todo.id != payload.id 

            )
    }


        default : 
        return state;
    }
}
 export default todoReducer;