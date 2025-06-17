<template>
  <h1>Vue To-Do App with Options API 📝</h1>
  <AddTask @add-task="addTask" />
  <TodoList :tasks="tasks" @toggle="toggleTask" @remove="removeTask" />
</template>

<script>
import AddTask from "./components/AddTask.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: { AddTask, TodoList },
  data() {
    return {
      tasks: JSON.parse(localStorage.getItem("tasks")) || []
    };
  },
  watch: {
    tasks: {
      handler(newTasks) {
        localStorage.setItem("tasks", JSON.stringify(newTasks));
      },
      deep: true // ✅ Ensures reactivity for nested array changes
    }
  },
  methods: {
    addTask(task) {
      this.tasks.push({ id: Date.now(), text: task, done: false });
    },
    toggleTask(id) {
      const task = this.tasks.find(t => t.id === id);
      if (task) task.done = !task.done;
    },
    removeTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id);
    }
  }
};
</script>