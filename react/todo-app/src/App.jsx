import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import {useTodo} from "./hooks/useTodo.js";
import './App.css'

export default function App() {
  const { tasks, addTask, toggleTask, removeTask } = useTodo();

  return (
    <>
      <h1>React To-Do App 📝</h1>
      <AddTask addTask={addTask} />
      <TodoList tasks={tasks} toggleTask={toggleTask} removeTask={removeTask} />
    </>
  );
}