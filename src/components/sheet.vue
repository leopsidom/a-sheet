<template>
  <div>
    <div
      v-if="columns.length > 0"
      class="flex border-y-slate-500 border-y border-y-solid w-fit"
    >
      <div class="w-5 px-2 py-px border-x-slate-500 border-x border-x-solid">
        {{ "" }}
      </div>
      <div
        v-for="(val, colIndex) in columns"
        :key="colIndex"
        class="
          border-r-slate-500 border-r border-r-solid
          w-20
          px-2
          py-px
          overflow-hidden
        "
      >
        {{ val }}
      </div>
    </div>
    <div
      v-for="(row, rowIndex) in props.data"
      :key="rowIndex"
      class="flex border-b border-b-slate-300 border-b-solid w-fit"
      :class="
        rowIndex === 0 && columns.length === 0
          ? 'border-t border-t-slate-300 border-t-solid'
          : ''
      "
    >
      <div
        class="
          border-x-slate-500 border-x border-x-solid
          w-5
          px-2
          py-px
          overflow-hidden
        "
      >
        {{ index[rowIndex] }}
      </div>
      <div
        v-for="(val, colIndex) in row"
        :key="colIndex"
        class="
          border-r-slate-300 border-r border-r-solid
          w-20
          px-2
          py-px
          overflow-hidden
        "
      >
        {{ val }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props =
  defineProps<{
    data: string[][];
    columns: string[];
    index: (string | number)[];
  }>();
</script>

<style scoped></style>
