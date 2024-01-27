<script setup lang="ts">
import { defineEmits } from 'vue';

import {
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
</script>

<template>
  <nav id="sidebar-nav" class="right center" :class="{ 'open': sidebarOpened }">
    <ul @click="emit('toggleSidebar')">
      <li style="display: none;"><a href="#dev-info">Dev</a></li>
      <li><a href="#about"><IconInfoCircle :size="24" stroke-width="1.25" /> Sobre</a></li>
      <li>
        <a href="#resume"><IconFileText :size="24" stroke-width="1.25" /> Currículo</a>
        <ul>
          <li><a href="#formation"><IconSchool :size="24" stroke-width="1.25" /> Formação acadêmica</a></li>
          <li><a href="#experience"><IconBriefcase :size="24" stroke-width="1.25" /> Experiência profissional</a></li>
          <li><a href="#languages"><IconWorld :size="24" stroke-width="1.25" /> Idiomas</a></li>
          <li><a href="#skills"><IconTool :size="24" stroke-width="1.25" /> Habilidades técnicas</a></li>
        </ul>
      </li>
      <li><a href="#portfolio"><IconDeviceDesktopCode :size="24" stroke-width="1.25" /> Portfólio</a></li>
      <li><a href="#contact"><IconMail :size="24" stroke-width="1.25" /> Contato</a></li>
    </ul>
    <ul @click="emit('toggleSidebar')">
      <li><a href="https://mail.modscleo4.dev.br"><IconExternalLink :size="24" stroke-width="1.25" /> E-Mail</a></li>
      <li><a href="https://blogs.modscleo4.dev.br"><IconExternalLink :size="24" stroke-width="1.25" /> Blogs</a></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  left: 0;
  height: 100%;
  width: 0;
  z-index: 1000;
  background: none;
  transition: width 100ms;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

nav.right {
  left: unset;
  right: 0;
}

nav.center {
  right: -50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

nav.center.open {
  right: 0;
}

nav.open {
  width: 100%;
}

nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

nav ul li {
  margin: 0;
  padding: 16px;
  width: 100%;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: min-content;
  align-items: center;
  font-family: 'Oswald', sans-serif;
}

nav a {
  transition: all 100ms;
}

nav a.active {
  color: var(--body-color-alt);
}
</style>
