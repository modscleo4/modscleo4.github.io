<script setup lang="ts">
import { } from 'vue';

import {
  IconBrandGithub,
  IconBrandGitlab,
  IconBrandLinkedin,
  IconBrandStackoverflow,
} from '@tabler/icons-vue';

import { Dev } from '../../Dev.js';

const { dev } = defineProps<{
  dev: Dev;
}>();
</script>

<template>
  <section id="dev-info" class="no-bg alt-bg">
    <div class="section-wrapper">
      <div class="container">
        <figure>
          <img src="/res/dev.png" alt="Foto" />
        </figure>

        <aside>
          <header>
            <h1>{{ dev.name }}</h1>
            <p>{{ dev.title }}</p>
          </header>

          <ul>
            <li>
              <a :href="`https://github.com/${dev.contact.github}`" target="_blank">
                <IconBrandGithub :size="24" stroke-width="1.25" />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a :href="`https://gitlab.com/${dev.contact.gitlab}`" target="_blank">
                <IconBrandGitlab :size="24" stroke-width="1.25" />
                <span>GitLab</span>
              </a>
            </li>
            <li>
              <a :href="`https://www.linkedin.com/in/${dev.contact.linkedin}`" target="_blank">
                <IconBrandLinkedin :size="24" stroke-width="1.25" />
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a :href="`https://pt.stackoverflow.com/users/${dev.contact.stackoverflow}`" target="_blank">
                <IconBrandStackoverflow :size="24" stroke-width="1.25" />
                <span>Stack Overflow</span>
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;;
  padding-bottom: 32px;
}

figure {
  width: 200px;
  margin: 0;
}

figure img {
  width: 100%;
  border-radius: 50%;
  box-shadow: -1px 1px 5px 0 rgba(0, 0, 0, 0.85);
}

aside {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

aside p {
  margin-bottom: 0;
}

aside header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

aside header h1,
aside header p {
  margin: 0;
}

aside header h1 {
  font-family: 'Source Code Pro', monospace;
  font-size: 1.5rem;
  font-weight: bold;
}

aside ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

aside ul li:not(:first-child)::before {
  content: '•';
  padding: 12px;
}

aside ul li a {
  padding: 4px;
  border-radius: 20px;
}

aside ul li a:hover {
  background-color: var(--card-color);
}

aside ul li span {
  display: inline-flex;
  max-width: 0;
  height: min-content;
  overflow: hidden;
  white-space: nowrap;
  transition: all 100ms;
}

aside ul li:hover span {
  max-width: unset;
  padding-left: 4px;
}
</style>
