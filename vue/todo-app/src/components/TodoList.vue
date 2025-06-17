<script setup>
import TodoItem from "./TodoItem.vue";
import TaskFilter from "./TaskFilter.vue";
import { useTodoStore } from "../store/useTodoStore";
import {computed} from "vue";
import {useTaskFilter} from "../composables/useTaskFilter.js";

const { tasks, toggleTask, removeTask } = useTodoStore();

// Compute the count of completed tasks
const completedTasks = computed(() => tasks.value.filter(task => task.done));

// Compute the count of remaining tasks
const remainingTasks = computed(() => tasks.value.filter(task => !task.done));

const { filteredTasks } = useTaskFilter(tasks); // ✅ Apply filtering logic
</script>

<template>
  <p>✅ Completed: {{ completedTasks.length }}</p>
  <p>📌 Remaining: {{ remainingTasks.length }}</p>

  <TaskFilter />
  <ul>
    <TodoItem
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        @toggle="toggleTask(task.id)"
        @remove="removeTask(task.id)"
    />
  </ul>
</template>