import React, { Fragment, useState } from "react";

import {useDispatch} from 'react-redux'
import Modal from "react-modal";
import "../EditTask/EditTask.css";



const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
     marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EditTask = ({todo}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
const [newTaskdescription, setNewTaskdescription] = useState(todo.description)

 const dispatch = useDispatch()

 


  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };



const handelUpdate = ()=>{
  dispatch(EditTask({
    description: newTaskdescription,
    id:todo.id
  }))
  closeModal();
}


  return (
    <Fragment>
       onClick={openModal} 



      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form>
          <input
            style={{ padding: "0.5rem 1rem" }}
            type="text"
            value={newTaskdescription}
            onChange={(e)=>setNewTaskdescription(e.target.value)}
           
          />
          <button className="my-btn" onClick={handelUpdate} >
            Confirm
          </button>
        </form>
      </Modal>
    </Fragment>
  );
};

export default EditTask;
