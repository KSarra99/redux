import React from 'react'
import {useSelector} from 'react-redux'
import TodoCard from '../TodoCard/TodoCard'


const TodoList = ({done,unDone}) => {


const todoList = useSelector(state => state.todoList)




    return (
        <div>
                <div class="padding">
            <div class="list-wrapper">
                                
                                     { done === unDone ?
                                         todoList.map((todo) =>
                                            
                                            <ul class="d-flex flex-column-reverse todo-list"><TodoCard todo={todo} /> </ul>)
                                            : done ?  
                                            todoList.filter((todo) =>(todo.isDone ))
                                            .map((todo) => ( <ul class="d-flex flex-column-reverse todo-list"><TodoCard todo={todo}key={todo.id} /> </ul>))
                                            : todoList.filter((todo) =>(todo.isDone === false))
                                            .map((todo) => ( <ul class="d-flex flex-column-reverse todo-list"><TodoCard todo={todo} key={todo.id}/> </ul>))
                                            
                                           
                                     }



                         
                                
                            
                        </div>
                        </div>  
        </div>
    )
}

export default TodoList

