export function filterTasks(tasks, filterOption) {
  switch (filterOption) {
    case "Completed":
      return tasks.filter(task => task.done);
    case "Pending":
      return tasks.filter(task => !task.done);
    default:
      return tasks;
  }
}