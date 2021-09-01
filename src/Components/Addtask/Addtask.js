import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import '../Addtask/Addtask.css'

import {addTask } from '../../JS/Actions/action'

const Addtask = () => {

const [newTaskInput, setNewTaskInput] = useState('')



 const dispatch = useDispatch()

const handleAdd=()=>{
    const todo={
        description: newTaskInput,
        id:Math.random(),
        isDone:false
    }


    dispatch(addTask(todo))
    setNewTaskInput("")
}


    return (
        <div>
            <div className="page-content page-container" id="page-content">
    <div className="padding">
        <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
                <div className="card px-3">
                    <div className="card-body">
                        <h4 className="card-title">Awesome Todo list</h4>
                        <div className="add-items d-flex">
                             <input type="text" className="form-control todo-list-input" 
                                                placeholder="What do you need to do today?"
                                               value={newTaskInput}
                                                onChange={(e)=>setNewTaskInput(e.target.value)} required/> 
                             <button className="add btn btn-primary font-weight-bold todo-list-add-btn" 
                                     onClick={handleAdd}>
                                 Add
                            </button> 
                        </div>
                     
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default Addtask
