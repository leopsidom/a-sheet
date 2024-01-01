<template>
  <sheet :data="data" :columns="columns" :index="index"></sheet>
  <sheet :data="data2" :columns="columns2" :index="index2"></sheet>
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

const data2 = [
  ["a", "b", "m", "n"],
  [
    "c",
    "d                     3287233829819218728172191281972872837",
    "d",
    "e",
  ],
  ["a", "b", "m", "n"],
];

const columns2 = [
  ["col1", "col11"],
  ["col2", "col22"],
  ["col3", "col22"],
  ["col4", "col22"],
];
const index2 = [
  [0, 0],
  [1, 0],
  [2, 0],
  [3, 0],
];
</script>

<style scoped></style>
