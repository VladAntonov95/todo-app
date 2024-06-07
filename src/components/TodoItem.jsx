import React from "react";
import { BsCircleFill, BsFillCheckCircleFill } from "react-icons/bs";
import { FaTrashAlt, FaPencilAlt } from "react-icons/fa";

function TodoItem({ todo, onToggleDone, onDelete, onEdit }) {
  return (
    <div
      className={`flex items-center p-2 m-2 w-full max-w-md mx-auto rounded ${
        todo.done ? "bg-gray-400" : "bg-black text-white"
      }`}
    >
      <div
        className="flex-grow flex items-center cursor-pointer"
        onClick={() => onToggleDone(todo._id)}
      >
        {todo.done ? (
          <BsFillCheckCircleFill className="m-3 min-w-[20px] min-h-[20px]" />
        ) : (
          <BsCircleFill className="m-3 min-w-[20px] min-h-[20px]" />
        )}
        <p className={`flex-grow ${todo.done ? "line-through" : ""}`}>
          {todo.task}
        </p>
      </div>
      <div className="flex-shrink-0">
        <FaPencilAlt
          className="m-2 cursor-pointer min-w-[20px] min-h-[20px]"
          onClick={() => onEdit(todo._id)}
        />
        <FaTrashAlt
          className="m-2 cursor-pointer min-w-[20px] min-h-[20px]"
          onClick={() => onDelete(todo._id)}
        />
      </div>
    </div>
  );
}

export default TodoItem;
