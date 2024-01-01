<template>
  <div
    class="
      border-l-slate-400
      border-l
      border-l-solid
      border-t-slate-400
      border-t
      border-t-solid
      w-fit
    "
  >
    <div v-if="columns.length > 0" class="flex">
      <div
        class="
          px-2
          py-px
          border-r-slate-400
          border-r
          border-r-solid
          border-b-slate-400
          border-b
          border-b-solid
          box-border
        "
        :class="size"
      />
      <div class="flex-col w-fit">
        <div v-for="(levelColumns, level) in columns" :key="level" class="flex">
          <div
            v-for="(val, colIndex) in levelColumns"
            :key="colIndex"
            class="
              border-r-slate-400
              border-r
              border-r-solid
              border-b-slate-400
              border-b
              border-b-solid
              box-border
              w-20
              h-5
              px-2
              py-px
              overflow-hidden
            "
          >
            {{ val }}
          </div>
        </div>
      </div>
    </div>
    <div
      v-for="(row, rowIndex) in props.data"
      :key="rowIndex"
      class="flex w-fit"
      :class="
        rowIndex === 0 && columns.length === 0
          ? 'border-t border-t-slate-300 border-t-solid'
          : ''
      "
    >
      <div
        class="
          w-5
          flex
          overflow-hidden
          box-border
          border-r-slate-400
          border-r
          border-r-solid
          border-b
          border-b-slate-400
          border-b-solid
          px-2
          py-px
        "
        v-for="(levelIndex, level) in index[rowIndex]"
        :key="level"
      >
        {{ levelIndex }}
      </div>
      <div
        v-for="(val, colIndex) in row"
        :key="colIndex"
        class="
          border-r-slate-300
          border-r
          border-r-solid
          border-b
          border-b-slate-300
          border-b-solid
          w-20
          px-2
          py-px
          overflow-hidden
          box-border
        "
      >
        {{ val }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
type IndexType = (string | number)[][] | (string | number)[];
const props =
  defineProps<{
    data: string[][];
    columns: IndexType;
    index: IndexType;
  }>();

const widths = ref<number[]>([]);

function normalizeIndex(
  index: IndexType,
  transpose?: boolean
): (string | number)[][] {
  if (index.length === 0) return [[]];
  if (index[0] instanceof Array) {
    if (transpose) {
      return index as (string | number)[][];
    } else {
      const result = index[0].map((i) => [i]);
      for (let i = 1; i < index.length; i++) {
        const iThIndex = index[i] as (string | number)[];
        for (let j = 0; j < iThIndex.length; j++) {
          result[j].push(iThIndex[j]);
        }
      }
      return result;
    }
  } else {
    return (transpose ? index.map((i) => [i]) : [index]) as (
      | string
      | number
    )[][];
  }
}

const columns = computed(() => normalizeIndex(props.columns, false));
const index = computed(() => normalizeIndex(props.index, true));

const size = computed(
  () => `w-${index.value[0].length * 5} h-${columns.value.length * 5}`
);
</script>

<style scoped></style>
