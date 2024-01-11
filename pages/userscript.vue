<script setup lang="ts">
const counter = useState("countdder", () => Math.round(Math.random() * 1000));
</script>

<template>
  <div>
    Counter: {{ counter }}
    <button @click="counter++">+</button>
    <button @click="counter--">-</button>
  </div>
</template>
