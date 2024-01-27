<script setup lang="ts">
import { } from 'vue';

const { highlight } = defineProps<{
  highlight?: boolean;
}>();
</script>

<template>
<span :class="{'highlight': highlight}">
  <slot></slot>
</span>
</template>

<style scoped>
span {
  border-radius: 4px;
  border: #777777 solid 1px;
  padding: 4px 8px;
  transition: all 50ms ease;
  height: min-content;
}

span.highlight {
  background-color: var(--btn-background-color);
}

span:hover {
  background-color: var(--btn-background-color-hover);
  color: var(--text-color-alt);
}
</style>
