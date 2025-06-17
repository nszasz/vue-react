<script setup>
import { ref } from "vue";
import { useTodoStore } from "../store/useTodoStore";

const taskInput = ref("");
const { addTask } = useTodoStore();

const submitTask = () => {
  if (taskInput.value.trim()) {
    addTask(taskInput.value);
    taskInput.value = "";
  }
};
</script>

<template>
  <div>
    <input v-model="taskInput" placeholder="Add a new task..." />
    <button @click="submitTask">➕ Add</button>
  </div>
</template>