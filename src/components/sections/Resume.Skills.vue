<script setup lang="ts">
import { } from 'vue';

import {
  IconTool,
} from '@tabler/icons-vue';

import { Dev } from '../../Dev.js';
import Badge from '../Badge.vue';

const { dev } = defineProps<{ dev: Dev; }>();
</script>

<template>
  <section id="skills">
    <div class="section-wrapper">
      <h2><IconTool :size="24" stroke-width="1.25" /> Habilidades técnicas</h2>

      <article>
        <section v-for="skill_kind in dev.skills">
          <h1>{{ skill_kind.description }}</h1>
          <div class="skills">
            <Badge v-for="skill in skill_kind.list" :key="skill.name" :highlight="skill.main">{{ skill.name }}</Badge>
          </div>
        </section>
      </article>
    </div>
  </section>
</template>

<style scoped>
article {
  display: grid;
  grid-template-rows: auto;
  grid-auto-flow: row;
  grid-row-gap: 24px;
}

article section {
  display: grid;
  grid-template-rows: auto;
  grid-auto-flow: row;
  grid-row-gap: 4px;
}

article section h1 {
  font-size: 1.25rem;
  font-weight: 300;
  margin: 0;
}

article section .skills {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  width: 100%;
  gap: 8px;
}
</style>
