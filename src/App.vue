<template>
  <sheet :data="data" :columns="columns" :index="index"></sheet>
</template>

<script setup lang="ts">
import Sheet from "./components/sheet.vue";

const data = [
  ["a", "b", "m", "n"],
  [
    "c",
    "d                     3287233829819218728172191281972872837",
    "d",
    "e",
  ],
  ["a", "b", "m", "n"],
];

const columns = ["col1", "col2", "col3", "col4"];
const index = [0, 1, 2, 3];
</script>

<style scoped></style>
