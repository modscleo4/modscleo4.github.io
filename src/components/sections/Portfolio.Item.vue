<script setup lang="ts">
import { } from 'vue';

import { Dev } from '../../Dev.js';
import Badge from '../Badge.vue';

const { item, tech_filter } = defineProps<{
  item: Dev['portfolio'][0];
  tech_filter: string[];
}>();
</script>

<template>
  <a :href="item.url" target="_blank" class="portfolio-item">
    <figure>
      <img :src="item.image_url" alt="Project Image">
    </figure>

    <article>
      <h1>{{ item.name }}</h1>
      <p class="project-description">{{ item.description }}</p>
      <aside>
        <div class="techs">
          <Badge v-for="tech in item.techs" :key="tech" :highlight="tech_filter.includes(tech)">{{ tech }}</Badge>
        </div>
      </aside>
    </article>
  </a>
</template>

<style scoped>
a {
  text-decoration: none;
  transition: all 200ms;
}

a:hover {
  text-decoration: none;
  color: var(--text-color);
}

a {
  display: grid;
  grid-template-rows: 40% auto;
  grid-row-gap: 16px;
}

a figure {
  max-width: 95vw;
  margin: 0;
}

a figure img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  object-position: top left;
}

a article {
  display: grid;
  grid-template-rows: auto auto auto;
  height: fit-content;
  grid-row-gap: 16px;
  overflow: auto;
  padding: 8px 12px;
  font-size: 1.125rem;
}

a article h1 {
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0;
}

a article p {
  margin: 0;
  max-width: 95vw;
}

a article aside {
  overflow: auto;
}

a article aside .techs {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  width: 100%;
  gap: 8px;
}

@media (max-width: 800px) {
  a {
    grid-template-rows: auto auto;
    grid-auto-flow: column;
    grid-template-columns: auto;
    grid-row-gap: 16px;
  }
}
</style>
