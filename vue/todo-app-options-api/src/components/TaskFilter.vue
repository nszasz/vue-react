<template>
  <div>
    <label for="filter">Filter:</label>
    <select :value="selectedFilter" @change="$emit('update:selectedFilter', $event.target.value)">
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Pending">Pending</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["selectedFilter"]
};
</script>