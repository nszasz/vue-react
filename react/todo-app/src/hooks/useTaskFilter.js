import { useMemo, useState } from "react";

export function useTaskFilter(tasks) {
  const [filterOption, setFilterOption] = useState("All");

  const filteredTasks = useMemo(() => {
    switch (filterOption) {
      case "Completed":
        return tasks.filter(task => task.done);
      case "Pending":
        return tasks.filter(task => !task.done);
      default:
        return tasks;
    }
  }, [tasks, filterOption]);

  return {filterOption, setFilterOption, filteredTasks};
}