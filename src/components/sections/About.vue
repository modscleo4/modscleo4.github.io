<script setup lang="ts">
import { } from 'vue';

import {
  IconFileTypePdf,
  IconInfoCircle,
} from '@tabler/icons-vue';

import { Dev } from '../../Dev.js';

const { dev } = defineProps<{
  dev: Dev;
}>();
</script>

<template>
  <section id="about">
    <div class="section-wrapper">
      <h1><IconInfoCircle :size="36" stroke-width="1.25" /> Olá</h1>
      <p>{{ dev.brief }}</p>

      <a href="res/resume.pdf" target="_blank" class="download-btn"><IconFileTypePdf :size="24" stroke-width="1.25" /> Baixar currículo</a>
    </div>
  </section>
</template>

<style scoped>
p {
  margin-bottom: 32px;
  text-align: justify;
}

.download-btn {
  padding: 12px 20px;
  background: var(--btn-background-color);
  transition: all 100ms ease;
  border-radius: 50px;
  color: var(--btn-text-color);
}

.download-btn:hover {
  background: var(--btn-background-color-hover);
  text-decoration: none;
}
</style>
