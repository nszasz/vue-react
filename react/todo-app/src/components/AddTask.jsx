import { useState } from "react";

export default function AddTask({ addTask }) {
  const [taskInput, setTaskInput] = useState("");

  const handleSubmit = () => {
    if (taskInput.trim()) {
      addTask(taskInput);
      setTaskInput("");
    }
  };

  return (
    <div>
      <input value={taskInput} onChange={(e) => setTaskInput(e.target.value)} placeholder="Add a new task..." />
      <button onClick={handleSubmit}>➕ Add</button>
    </div>
  );
}