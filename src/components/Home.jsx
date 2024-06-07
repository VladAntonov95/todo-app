import React, { useEffect, useState } from "react";
import Create from "./Create";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

function Home() {
  const [todos, setTodos] = useState([]);
  const [editTask, setEditTask] = useState(null);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDone = (id) => {
    const todo = todos.find((todo) => todo._id === id);
    if (todo) {
      setTodos(
        todos.map((todo) =>
          todo._id === id ? { ...todo, done: !todo.done } : todo
        )
      );
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  const handleEdit = (id) => {
    const todo = todos.find((todo) => todo._id === id);
    if (todo) {
      setEditTask(todo);
    }
  };

  const handleUpdate = (id, newText) => {
    setTodos(
      todos.map((todo) => (todo._id === id ? { ...todo, task: newText } : todo))
    );
    setEditTask(null);
  };

  const handleCancelEdit = () => {
    setEditTask(null);
  };

  const sortedTodos = [...todos].sort((a, b) => a.done - b.done);

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto">
      <div className="text-3xl font-bold p-10">Todo List</div>
      <Create addTodo={addTodo} />

      {editTask && (
        <EditTodo
          todo={editTask}
          onUpdate={handleUpdate}
          onCancel={handleCancelEdit}
        />
      )}

      {sortedTodos.length === 0 ? (
        <div>
          <h2>No active todos</h2>
        </div>
      ) : (
        sortedTodos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onToggleDone={handleDone}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))
      )}
    </div>
  );
}

export default Home;
