<template>
  <p>✅ Completed: {{ completedTasks.length }}</p>
  <p>📌 Remaining: {{ remainingTasks.length }}</p>

  <TaskFilter :selectedFilter="selectedFilter" @update:selectedFilter="selectedFilter = $event" />
  <ul>
    <TodoItem
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        @toggle="toggleTask"
        @remove="removeTask"
    />
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";
import TaskFilter from "./TaskFilter.vue";
import {filterTasks} from "../helpers/filterTasks.js";

export default {
  components: { TaskFilter, TodoItem },
  props: ["tasks"],
  emits: ["toggle", "remove"], // ✅ Declares the custom events
  data() {
    return {
      selectedFilter: "All"
    };
  },
  computed: {
    filteredTasks() {
      return filterTasks(this.tasks, this.selectedFilter);
    },
    completedTasks() {
      return this.tasks.filter(task => task.done);
    },
    remainingTasks() {
      return this.tasks.filter(task => !task.done);
    }
  },
  methods: {
    toggleTask(id) {
      this.$emit("toggle", id);
    },
    removeTask(id) {
      this.$emit("remove", id);
    }
  }
};
</script>