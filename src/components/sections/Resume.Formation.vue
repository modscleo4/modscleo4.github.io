<script setup lang="ts">
import { } from 'vue';

import {
  IconSchool,
} from '@tabler/icons-vue';

import { Dev } from '../../Dev.js';
import UList from '../UList.vue';

const { dev } = defineProps<{ dev: Dev; }>();
</script>

<template>
  <section id="formation">
    <div class="section-wrapper">
      <h2><IconSchool :size="24" stroke-width="1.25" /> Formação acadêmica</h2>

      <UList>
        <li v-for="education in dev.resume.formation">
          <h1>{{ education.school_name }}</h1>
          <aside>
            <p>{{ education.course }}</p>
            <p>{{ education.start_year }} - {{ education.end_year ?? '' }}</p>
          </aside>
        </li>
      </UList>
    </div>
  </section>
</template>

<style scoped>

</style>
