<script setup lang="ts">
import { } from 'vue';
</script>

<template>
<ul>
  <slot></slot>
</ul>
</template>

<style scoped>
ul {
  list-style: none;
}

ul::v-deep li {
  padding-bottom: 8px;
  position: relative;
}

ul::v-deep li::after {
  content: ' ';
  position: absolute;
  top: 12px;
  left: -20px;
  width: 8px;
  height: 8px;
  background-color: var(--text-color-hover);
  border-radius: 50px;
}

ul::v-deep li:not(:last-child)::before {
  border-left: 2px solid;
  border-color: var(--bg-gradient-end);
  content: ' ';
  position: absolute;
  height: calc(100% - 6px);
  margin-top: 18px;
  margin-left: -17px;
}

ul::v-deep li h1,
ul::v-deep li p {
  margin: 0;
}

ul::v-deep li h1 {
  font-size: 1.25rem;
  font-weight: 300;
}

/* ul::v-deep li p {

} */

ul::v-deep li aside {
  margin-top: 4px;
  font-size: 0.9375rem;
}

@-moz-document url-prefix() {
  ul::v-deep li:not(:last-child)::before {
    margin-left: -17px;
  }
}
</style>
