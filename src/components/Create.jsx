import React, { useState } from "react";

function Create({ addTodo }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (!task.trim()) {
      alert("Task cannot be empty!");
      return;
    }
    addTodo({
      _id: Date.now().toString(),
      task: task,
      done: false,
    });
    setTask("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="p-4 w-full max-w-md mx-auto">
      <input
        type="text"
        value={task}
        className="w-full p-2 border-b-2 rounded"
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Enter a task"
      />
      <button
        type="button"
        className="w-full mt-2 p-2 text-white bg-black rounded hover:bg-orange-300 active:bg-orange-600 focus:bg-orange-600"
        onClick={handleAdd}
      >
        Add Todo
      </button>
    </div>
  );
}

export default Create;
