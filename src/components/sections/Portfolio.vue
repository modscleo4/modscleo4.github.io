<script setup lang="ts">
import { onBeforeMount, onMounted, onUnmounted } from 'vue';

import {
  IconDeviceDesktopCode,
} from '@tabler/icons-vue';

import { Dev } from '../../Dev.js';
import PortfolioItem from './Portfolio.Item.vue';

const { portfolio, tech_filter } = defineProps<{
  portfolio: Dev['portfolio'];
  tech_filter: string[];
}>();

let portfolioLeftMargin: number = 0;

function scrollHandlerPortfolio() {
  const portfolioSectionWrapper = document.querySelector<HTMLDivElement>(`section#portfolio .section-wrapper`)!;
  const ul = document.querySelector<HTMLUListElement>(`section#portfolio .portfolio-items ul`)!;
  const target = document.querySelector<HTMLElement>(`section#portfolio`)!;
  const targetBounds = target.getBoundingClientRect();
  if (targetBounds.top < 32 && targetBounds.bottom >= 0) {
    if (window.matchMedia('(max-width: 800px)').matches) {
      // mobile
      return;
    }

    const top = targetBounds.top;
    const bottom = targetBounds.bottom;

    if (!portfolioSectionWrapper.classList.contains('visible')) {
      portfolioSectionWrapper.classList.add('visible');
    }

    if (bottom < window.innerHeight) {
      portfolioSectionWrapper.classList.add('bottom');
      return;
    } else {
      portfolioSectionWrapper.classList.remove('bottom');
    }

    ul.style.setProperty('--top', `${top + portfolioLeftMargin}px`);
  } else {
    portfolioSectionWrapper.classList.remove('visible');
    if (targetBounds.top > 0) { // scrolled up
      ul.style.setProperty('--top', `0px`);
    }
  }
}

function resizePortfolio() {
  const sectionPortfolio = document.querySelector<HTMLElement>(`section#portfolio`)!;
  const itemsContainer = document.querySelector<HTMLUListElement>(`#portfolio .portfolio-items ul`)!;

  if (window.matchMedia('(max-width: 800px)').matches) {
    // mobile
    sectionPortfolio.style.height = '';
    return;
  }

  sectionPortfolio.style.height = itemsContainer.getBoundingClientRect().width + 'px';
  portfolioLeftMargin = itemsContainer.getBoundingClientRect().x;
}

onBeforeMount(() => {
  window.addEventListener('scroll', scrollHandlerPortfolio);

  window.addEventListener('resize', resizePortfolio);
});

onMounted(resizePortfolio);

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandlerPortfolio);

  window.removeEventListener('resize', resizePortfolio);
});
</script>

<template>
  <section id="portfolio">
    <div class="section-wrapper">
      <h1><IconDeviceDesktopCode :size="36" stroke-width="1.25" /> Alguns dos meus projetos</h1>

      <div v-if="portfolio.length === 0">
        <p>Nenhum item encontrado.</p>
      </div>

      <div class="portfolio-items" v-else>
        <ul>
          <li v-for="item in portfolio">
            <PortfolioItem :item="item" :tech_filter="tech_filter" />
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>

#portfolio {
  --top: 190px;
  overflow-x: hidden;
}

#portfolio .section-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;
  max-width: unset;
}

#portfolio .section-wrapper > h1 {
  margin: 0;
  margin-left: calc((100vw - var(--app-max-width)) / 2);
  padding: 0 32px;
}

#portfolio .section-wrapper.visible > h1 {
  top: 100px;
  left: 0;
  position: fixed;
}

#portfolio .section-wrapper.bottom > h1 {
  position: unset;
}

#portfolio .portfolio-items {
  overflow: hidden;
  margin-left: calc(32px + (100vw - var(--app-max-width)) / 2);
}

#portfolio .section-wrapper.visible .portfolio-items {
  top: var(--top);
  left: 0;
  position: fixed;
  margin-left: 0;
}

#portfolio .section-wrapper.bottom .portfolio-items {
  position: absolute;
  top: unset;
  bottom: 125px;
  left: 0;
}

#portfolio .portfolio-items ul {
  --top: 0px;
  display: grid;
  grid-column-gap: 32px;
  grid-auto-flow: column;
  grid-auto-columns: 25vw;
  list-style: none;
  padding: 0;
  margin: 0;
  transform: translate3d(var(--top), 0, 0);
  position: absolute;
}

#portfolio .section-wrapper.visible .portfolio-items ul {
  position: unset;
}

#portfolio .portfolio-items ul li {
  transition: all 200ms;
  background: var(--odd);
  height: 35rem;
}

#portfolio .portfolio-items ul li:hover {
  color: var(--text-color);
  box-shadow: -1px 1px 5px 0 rgba(0, 0, 0, 0.35);
  background: var(--even);
}

@media (max-width: 800px) {
  #portfolio .section-wrapper {
    padding: 0 32px;
  }

  #portfolio .section-wrapper > h1 {
    margin-left: 0;
    padding: 0;
    position: unset;
  }

  #portfolio .portfolio-items {
    margin-left: 0;
    position: unset;
  }

  #portfolio .portfolio-items ul {
    position: unset;
    display: flex;
    flex-direction: column;
    transform: unset;
    gap: 16px;
  }

  #portfolio .portfolio-items ul li {
    height: unset;
  }
}
</style>
