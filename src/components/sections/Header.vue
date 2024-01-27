<script setup lang="ts">
import { onBeforeMount, onUnmounted, defineEmits } from 'vue';

import {
  IconMenu2,
  IconInfoCircle,
  IconFileText,
  IconSchool,
  IconBriefcase,
  IconWorld,
  IconTool,
  IconDeviceDesktopCode,
  IconMail,
  IconExternalLink,
} from '@tabler/icons-vue';

const { sidebarOpened } = defineProps<{
  sidebarOpened: boolean;
}>();

const emit = defineEmits(['toggleSidebar']);

function scrollHandlerHeader() {
  // shrink/grow header
  if (window.scrollY > 100) {
    document.querySelector('header')?.classList.add('shrink');
  } else {
    document.querySelector('header')?.classList.remove('shrink');
  }
}

function scrollHandlerSection() {
  ['dev-info', 'about', 'resume', 'portfolio', 'contact'].forEach(async (section, _i, a) => {
    const target = document.querySelector<HTMLElement>(`section#${section}`)!;
    const targetBounds = target.getBoundingClientRect();
    if (targetBounds.top < 32 && targetBounds.bottom >= 0) {
      a.forEach(s => {
        document.querySelector(`header a[href="#${s}"]`)?.classList.remove('active');
        document.querySelector(`nav a[href="#${s}"]`)?.classList.remove('active');
      });

      document.querySelector('header')?.classList.remove('alt-bg');
      document.querySelector(`header a[href="#${section}"]`)?.classList.add('active');
      document.querySelector(`nav a[href="#${section}"]`)?.classList.add('active');

      if (target.classList.contains('no-bg')) {
        document.querySelector('header')?.classList.add('alt-bg');
      }

      if (section === 'resume') {
        document.querySelector(`header a[href="#${section}"]`)?.parentElement?.querySelector(`ul`)?.classList.add('visible');
        document.querySelector(`nav a[href="#${section}"]`)?.parentElement?.querySelector(`ul`)?.classList.add('visible');
      } else {
        document.querySelector(`header a[href="#resume"]`)?.parentElement?.querySelector(`ul`)?.classList.remove('visible');
        document.querySelector(`nav a[href="#resume"]`)?.parentElement?.querySelector(`ul`)?.classList.remove('visible');
        ['formation', 'experience', 'languages', 'skills'].forEach(s => {
          document.querySelector(`header a[href="#${s}"]`)?.classList.remove('active');
          document.querySelector(`nav a[href="#${s}"]`)?.classList.remove('active');
        });
      }
    }
  });

  ['formation', 'experience', 'languages', 'skills'].forEach(async (section, _i, a) => {
    const target = document.querySelector(`section#${section}`)!;
    const targetBounds = target.getBoundingClientRect();
    if (targetBounds.top < 32 && targetBounds.bottom >= 0) {
      a.forEach(s => {
        document.querySelector(`header a[href="#${s}"]`)?.classList.remove('active');
        document.querySelector(`nav a[href="#${s}"]`)?.classList.remove('active');
      });

      document.querySelector('header')?.classList.remove('alt-bg');
      document.querySelector(`header a[href="#${section}"]`)?.classList.add('active');
      document.querySelector(`nav a[href="#${section}"]`)?.classList.add('active');

      if (target.classList.contains('no-bg')) {
        document.querySelector('header')?.classList.add('alt-bg');
      }
    }
  });
}

onBeforeMount(() => {
  window.addEventListener('scroll', scrollHandlerHeader);
  window.addEventListener('scroll', scrollHandlerSection);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandlerHeader);
  window.removeEventListener('scroll', scrollHandlerSection);
});
</script>

<template>
  <header class="alt-bg" :class="{ 'no-bg': sidebarOpened, 'bg-filter': sidebarOpened }">
    <div class="section-wrapper">
      <div class="links-container">
        <ul class="links">
          <li style="display: none;"><a href="#dev-info">Dev</a></li>
          <li><a href="#about"><IconInfoCircle :size="24" stroke-width="1.25" /> Sobre</a></li>
          <li>
            <a href="#resume"><IconFileText :size="24" stroke-width="1.25" /> Currículo</a>
            <ul class="sublinks">
              <li><a href="#formation"><IconSchool :size="24" stroke-width="1.25" /> Formação acadêmica</a></li>
              <li><a href="#experience"><IconBriefcase :size="24" stroke-width="1.25" /> Experiência profissional</a></li>
              <li><a href="#languages"><IconWorld :size="24" stroke-width="1.25" /> Idiomas</a></li>
              <li><a href="#skills"><IconTool :size="24" stroke-width="1.25" /> Habilidades técnicas</a></li>
            </ul>
          </li>
          <li><a href="#portfolio"><IconDeviceDesktopCode :size="24" stroke-width="1.25" /> Portfólio</a></li>
          <li><a href="#contact"><IconMail :size="24" stroke-width="1.25" /> Contato</a></li>
        </ul>

        <ul class="links">
          <li><a href="https://mail.modscleo4.dev.br"><IconExternalLink :size="24" stroke-width="1.25" /> E-Mail</a></li>
          <li><a href="https://blogs.modscleo4.dev.br"><IconExternalLink :size="24" stroke-width="1.25" /> Blogs</a></li>
        </ul>
      </div>

      <div class="sidebar-button">
        <button @click="emit('toggleSidebar')">
          <IconMenu2 :size="24" stroke-width="1.25" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  font-family: 'Oswald', sans-serif;
  font-weight: 300;
  font-size: 1rem;
  padding: 20px 0;
  position: sticky;
  top: 0;
  background: var(--background-color);
  z-index: 1000;
  color: var(--text-color);
  transition: all 100ms;
  display: flex;
  justify-content: center;
}

header.shrink {
  padding: 0;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}

header.alt-bg {
  background: none;
  color: var(--text-color-alt);
}

header .links-container {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
}

header .links,
header .links .sublinks,
header .sidebar-button {
  display: inline-flex;
  padding: 0;
  list-style: none;
  gap: 12px;
}

header .links .sublinks {
  background-color: var(--card-color);
  border-radius: 50px;
  max-width: 0;
  height: min-content;
  overflow: hidden;
  white-space: nowrap;
  transition: all 100ms;
}

header .links .sublinks.visible {
  max-width: 1000px;
  margin-left: 6px;
  padding: 0 4px;
}

header .links li,
header .links .sublinks li {
  display: inline-flex;
  justify-content: flex-start;
}

header a {
  transition: all 100ms;
}

header a:hover {
  color: var(--text-color-hover-alt);
}

header a.active {
  color: var(--text-color-active);
}

header.content a:hover {
  color: var(--text-color-hover);
}

header.content a.active {
  color: var(--body-color);
}

header .sidebar-button {
  display: none;
}

header .sidebar-button button {
  position: fixed;
  right: 16px;
  top: 16px;
  color: var(--link-color);
  background: none;
  cursor: pointer;
  font-size: 24px;
  border: none;
}

header .sidebar-button button:hover {
  color: var(--link-color-hover);
}

header.alt-bg .sidebar-button button {
  color: var(--text-color-alt);
}

header .sidebar-button button:hover {
  color: var(--text-color-hover-alt);
}

@media (max-width: 640px) {
  header {
    background: none;
  }

  header .links {
    display: none;
  }

  header .sidebar-button {
    display: unset;
  }
}
</style>
