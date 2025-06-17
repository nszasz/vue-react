<template>
  <li>
    <input type="checkbox" :checked="task.done" @change="$emit('toggle', task.id)" />
    <span :class="{ done: task.done }">{{ task.text }}</span>
    <button @click="$emit('remove', task.id)">❌</button>
  </li>
</template>

<script>
export default {
  props: ["task"]
};
</script>

<style scoped>
.done { text-decoration: line-through; color: gray; }
</style>