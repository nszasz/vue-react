<template>
  <div>
    <label for="filter">Filter:</label>
    <select v-model="filterOption">
      <option value="All">All</option>
      <option value="Completed">Completed</option>
      <option value="Pending">Pending</option>
    </select>
  </div>
</template>

<script setup>
import { useTaskFilter } from "../composables/useTaskFilter";

const { filterOption } = useTaskFilter(); // ✅ Reactive filter option
</script>