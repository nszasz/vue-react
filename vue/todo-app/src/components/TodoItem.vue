<script setup>
defineProps(["task"]);
defineEmits(["toggle", "remove"]);
</script>

<template>
  <li>
    <input type="checkbox" :checked="task.done" @change="$emit('toggle')" />
    <span :class="{ done: task.done }">{{ task.text }}</span>
    <button @click="$emit('remove')">❌</button>
  </li>
</template>

<style scoped>
.done { text-decoration: line-through; color: gray; }
</style>