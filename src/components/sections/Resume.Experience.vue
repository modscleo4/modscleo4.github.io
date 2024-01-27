<script setup lang="ts">
import { } from 'vue';

import {
  IconBriefcase,
} from '@tabler/icons-vue';

import { Dev } from '../../Dev.js';
import UList from '../UList.vue';

const { dev } = defineProps<{ dev: Dev; }>();
</script>

<template>
  <section id="experience">
    <div class="section-wrapper">
      <h2><IconBriefcase :size="24" stroke-width="1.25" /> Experiência profissional</h2>

      <UList>
        <li v-for="job in dev.resume.experience">
          <h1>{{ job.company_name }}</h1>
          <p>{{ job.description }}</p>
          <aside>
            <p>{{ job.activities }}</p>
            <p>{{ job.start_year }} - {{ job.end_year ?? '' }}</p>
          </aside>
        </li>
      </UList>
    </div>
  </section>
</template>

<style scoped>

</style>
