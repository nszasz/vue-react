
export default function TodoItem({ task, onToggle, onRemove }) {
  return (
    <li>
      <input type="checkbox" checked={task.done} onChange={() => onToggle(task.id)} />
      <span style={{ textDecoration: task.done ? "line-through" : "none" }}>{task.text}</span>
      <button onClick={() => onRemove(task.id)}>❌</button>
    </li>
  );
}