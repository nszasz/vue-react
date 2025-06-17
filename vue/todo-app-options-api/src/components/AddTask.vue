<template>
  <div>
    <input v-model="taskInput" placeholder="Add a new task..." />
    <button @click="submitTask">➕ Add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskInput: ""
    };
  },
  methods: {
    submitTask() {
      if (this.taskInput.trim()) {
        this.$emit("add-task", this.taskInput);
        this.taskInput = "";
      }
    }
  }
};
</script>