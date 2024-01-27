<script setup lang="ts">
import { } from 'vue';

import {
  IconWorld,
} from '@tabler/icons-vue';

import { Dev } from '../../Dev.js';
import { languageLevel } from '../../util.js';
import UList from '../UList.vue';

const { dev } = defineProps<{ dev: Dev; }>();
</script>

<template>
  <section id="languages">
    <div class="section-wrapper">
      <h2><IconWorld :size="24" stroke-width="1.25" /> Idiomas</h2>

      <UList>
        <li v-for="language in dev.languages">
          <h1>{{ language.name }}</h1>
          <aside>
            <span>Leitura: {{ languageLevel(language.read) }}</span>
            <span>Escrita: {{ languageLevel(language.write) }}</span>
            <span>Escuta: {{ languageLevel(language.listen) }}</span>
            <span>Fala: {{ languageLevel(language.speak) }}</span>
          </aside>
        </li>
      </UList>
    </div>
  </section>
</template>

<style scoped>
aside {
  display: grid;
  grid-template-columns: max-content max-content;
  grid-column-gap: 8px;
  grid-row-gap: 4px;
}
</style>
