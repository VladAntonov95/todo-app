import React, { useState } from "react";

function EditTodo({ todo, onUpdate, onCancel }) {
  const [editText, setEditText] = useState(todo.task);

  const handleUpdate = () => {
    if (!editText.trim()) {
      alert("Task cannot be empty!");
      return;
    }
    onUpdate(todo._id, editText);
  };

  return (
    <div className="p-4 w-full max-w-md mx-auto">
      <input
        type="text"
        value={editText}
        className="w-full p-2 border-b-2 rounded"
        onChange={(e) => setEditText(e.target.value)}
      />
      <button
        type="button"
        className="w-full mt-2 p-2 text-white bg-black rounded hover:bg-orange-300 active:bg-orange-600 focus:bg-orange-600"
        onClick={handleUpdate}
      >
        Update Task
      </button>
      <button
        type="button"
        className="w-full mt-2 p-2 text-white bg-black rounded hover:bg-gray-300 active:bg-gray-600 focus:bg-gray-600"
        onClick={onCancel}
      >
        Cancel
      </button>
    </div>
  );
}

export default EditTodo;
