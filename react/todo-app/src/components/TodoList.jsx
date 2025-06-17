import TodoItem from "./TodoItem";
import {useMemo} from "react";
import TaskFilter from "./TaskFilter.jsx";
import {useTaskFilter} from "../hooks/useTaskFilter.js";

export default function TodoList({ tasks, toggleTask, removeTask }) {
  const { filterOption, setFilterOption, filteredTasks } = useTaskFilter(tasks);
  // Compute completed tasks count
  const completedTasks = useMemo(() => tasks.filter(task => task.done), [tasks]);

  // Compute remaining tasks count
  const remainingTasks = tasks.filter(task => !task.done);

  return (
    <>
      <p>✅ Completed: {completedTasks.length}</p>
      <p>📌 Remaining: {remainingTasks.length}</p>

      <TaskFilter filterOption={filterOption} setFilterOption={setFilterOption} />

      <ul>
        {filteredTasks.map(task => (
          <TodoItem key={task.id} task={task} onToggle={toggleTask} onRemove={removeTask} />
        ))}
      </ul>
    </>

  );
}