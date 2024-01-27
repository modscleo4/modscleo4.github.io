<script setup lang="ts">
import { } from 'vue';

import {
  IconMail,
  IconExternalLink,
  IconSend,
} from '@tabler/icons-vue';

import { Dev } from '../../Dev.js';

const { dev } = defineProps<{
  dev: Dev;
}>();
</script>

<template>
  <footer class="alt-bg">
    <section id="contact" class="no-bg">
      <div class="section-wrapper">
        <h1><IconMail :size="36" stroke-width="1.25" /> Entre em contato</h1>

        <article>
          <aside>
            <ul>
              <li>
                <a :href="`mailto:${dev.contact.email}`">
                  <IconMail :size="24" stroke-width="1.25" />
                  {{ dev.contact.email }}
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a :href="`https://www.linkedin.com/in/${dev.contact.linkedin}`" target="_blank">
                  <IconExternalLink :size="24" stroke-width="1.25" /> LinkedIn
                </a>
              </li>
              <li>
                <a :href="`https://github.com/${dev.contact.github}`" target="_blank">
                  <IconExternalLink :size="24" stroke-width="1.25" /> GitHub
                </a>
              </li>
              <li>
                <a :href="`https://gitlab.com/${dev.contact.gitlab}`" target="_blank">
                  <IconExternalLink :size="24" stroke-width="1.25" /> GitLab
                </a>
              </li>
              <li>
                <a rel="me" href="https://social.modscleo4.dev.br/@modscleo4" target="_blank">
                  <IconExternalLink :size="24" stroke-width="1.25" /> Mastodon
                </a>
              </li>
            </ul>
          </aside>

          <form action="https://formspree.io/modscleo4@outlook.com" method="post">
            <label>
              <span>Seu nome</span>
              <input type="text" name="name" placeholder="Marcos Rocha">
            </label>

            <label>
              <span>Seu email</span>
              <input type="email" name="_replyto" placeholder="marcosrocha@gmail.com">
            </label>

            <label>
              <span>Mensagem</span>
              <textarea name="body" cols="30" rows="12" placeholder="Olá"></textarea>
            </label>

            <button type="submit">
              <IconSend :size="24" stroke-width="1.25" /> Enviar
            </button>
          </form>
        </article>
      </div>
    </section>

    <p>© 2024 {{ dev.name }}. Powered by <a href="https://host.modscleo4.net.br" target="_blank"><IconExternalLink :size="16" stroke-width="1.25" /> Salada de Fruta</a>. <a href="https://github.com/modscleo4/modscleo4.github.io" target="_blank"><IconExternalLink :size="16" stroke-width="1.25" /> Fork on GitHub</a>.</p>
  </footer>
</template>

<style scoped>
footer {
  background: rgba(255, 255, 255, 0);
}

article {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-column-gap: 16px;
  grid-template-rows: auto;
  grid-auto-flow: row;
}

aside {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

aside ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

input,
textarea {
  border: 1px solid var(--input-border-color);
  border-radius: 4px;
  outline: none;
  padding: 8px;
  font-size: 1rem;
  color: var(--text-color);
  background-color: var(--input-background-color);
  transition: all 100ms;
  width: 100%;
}

textarea {
  resize: none;
}

input:hover,
textarea:hover {
  border-color: var(--input-border-color-hover);
  outline: none;
}

input:focus,
textarea:focus {
  border-color: var(--input-border-color-focus);
  outline: none;
}

button {
  text-align: center;
  width: 100%;
  border: none;
  padding: 12px 20px;
  background: var(--body-color-alt);
  transition: all 100ms ease;
  border-radius: 50px;
  color: var(--btn-text-color);
  font-size: 1.25rem;
  cursor: pointer;
}

button:hover {
  background: var(--text-color-hover-alt);
  text-decoration: none;
}

footer p {
  text-align: center;
  font-size: 0.75rem;
  padding: 8px 32px;
  margin: 0;
}

@media (max-width: 640px) {
  article {
    grid-template-columns: auto;
    grid-auto-flow: column;
    grid-template-rows: auto auto;
    grid-row-gap: 32px;
  }
}
</style>
