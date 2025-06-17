import { computed, ref } from "vue";

const filterOption = ref("All");

export function useTaskFilter(tasks) {
  const filteredTasks = computed(() => {
    switch (filterOption.value) {
      case "Completed":
        return tasks.value.filter(task => task.done);
      case "Pending":
        return tasks.value.filter(task => !task.done);
      default:
        return tasks.value;
    }
  });

  return { filterOption, filteredTasks };
}