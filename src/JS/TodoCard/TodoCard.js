import React from "react";
import { useDispatch } from "react-redux";
import { COMPLETE_TASK, DELETE_TASK } from "../Constants/actions-types";
import EditTask from "../../Components/EditTask/EditTask";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div class="form-check">
        <label
          class="form-check-label"
          style={{
            descriptionDecoration: todo.isDone ? "line-through" : "none",
          }}
        >
          <input
            class="checkbox"
            type="checkbox"
            onClick={() => dispatch(COMPLETE_TASK(todo))}
          />
          {todo.description}
          <i class="input-helper"></i>
        </label>
      </div>{" "}
      <i
        class="remove mdi mdi-close-circle-outline"
        onClick={() => dispatch(DELETE_TASK(todo))}
      ></i>
      <button>
        <EditTask todo={todo} />
      </button>
    </li>
  );
};

export default TodoCard;
