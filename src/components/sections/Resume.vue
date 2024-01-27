<script setup lang="ts">
import { } from 'vue';

import {
  IconFileText,
} from '@tabler/icons-vue';

import { Dev } from '../../Dev.js';

import SectionFormation from './Resume.Formation.vue';
import SectionExperience from './Resume.Experience.vue';
import SectionLanguages from './Resume.Languages.vue';
import SectionSkills from './Resume.Skills.vue';

const { dev } = defineProps<{
  dev: Dev;
}>();
</script>

<template>
  <section id="resume">
    <div class="section-wrapper">
      <h1><IconFileText :size="36" stroke-width="1.25" /> Currículo</h1>

      <SectionFormation :dev="dev" />
      <SectionExperience :dev="dev" />
      <SectionLanguages :dev="dev" />
      <SectionSkills :dev="dev" />
    </div>
  </section>
</template>

<style scoped>

</style>
