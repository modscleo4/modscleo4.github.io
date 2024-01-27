<script setup lang="ts">
import { onBeforeMount, onUnmounted } from 'vue';

import { Dev } from './Dev';
import Main from './components/Main.vue';

const particlesLoaded = async (container: any) => {
  console.log("Particles container loaded", container);
};

const dev: Dev = {
  name: 'Dhiego Cassiano Fogaça Barbosa',
  title: 'Desenvolvedor full stack',
  birth_date: new Date('2002-07-06'),
  contact: {
    email: 'modscleo4@modscleo4.dev.br',
    github: 'modscleo4',
    gitlab: 'modscleo4',
    linkedin: 'Modscleo4',
    stackoverflow: '147419/modscleo4',
  },
  brief: 'Bem-vindo ao meu portfólio. Sou um entusiasta por tecnologia desde os 9 anos de idade. Aprendi programação por curiosidade aos 12 anos, sendo minha primeira linguagem o Visual Basic .NET. Desde então decidi seguir a carreira de Computação e continuei aprendendo novas linguagens, como C, Java, PHP, HTML + CSS + JS.',
  resume: {
    formation: [
      {
        school_name: 'Universidade Estadual Paulista “Júlio de Mesquita Filho”',
        course: 'Bacharel em Ciência da Computação',
        start_year: 2020,
        end_year: null,
      },

      {
        school_name: 'Colégio Técnico Industrial “Prof. Isaac Portal Roldán”',
        course: 'Técnico em Informática',
        start_year: 2017,
        end_year: 2019,
      },
    ],

    experience: [
      {
        company_name: 'DSIN Tecnologia da Informação LTDA',
        description: 'Desenvolvedor Jr.',
        activities: 'Desenvolvimento de rotinas de acordo com o requisito, planejamento ou solicitação conforme os padrões exigidos pela empresa',
        start_year: 2021,
        end_year: 2023,
      },

      {
        company_name: 'DSIN Tecnologia da Informação LTDA',
        description: 'Estagiário',
        activities: 'Desenvolvimento de rotinas de acordo com o requisito, planejamento ou solicitação conforme os padrões exigidos pela empresa',
        start_year: 2021,
        end_year: 2021,
      },

      {
        company_name: 'Universidade Estadual Paulista “Júlio de Mesquita Filho”',
        description: 'Estagiário',
        activities: 'Gerenciei redes Linux usando o protocolo LDAP, além de dar manutenção aos computadores.',
        start_year: 2019,
        end_year: 2020,
      },
    ]
  },
  skills: [
    {
      description: 'Linguagens',
      list: [{ name: 'C', main: false }, { name: 'C++', main: false }, { name: 'C#', main: false }, { name: 'PHP', main: true }, { name: 'Java', main: false }, { name: 'HTML', main: true }, { name: 'CSS', main: true }, { name: 'JS', main: true }, { name: 'TS', main: true }, { name: 'Python', main: false }, { name: 'SQL', main: false }, { name: 'Delphi', main: false },],
    },

    {
      description: 'Bancos de Dados',
      list: [{ name: 'PostgreSQL', main: true }, { name: 'MySQL', main: false }, { name: 'SQLite', main: false }, { name: 'MongoDB', main: false }, { name: 'Firebird', main: false },],
    },

    {
      description: 'Sistemas Operacionais',
      list: [{ name: 'Windows', main: false }, { name: 'Linux', main: true },],
    },

    {
      description: 'Ferramentas',
      list: [{ name: 'Git', main: true }, { name: 'GitHub', main: true }, { name: 'GitLab', main: false }, { name: 'Jira', main: false }, { name: 'VS Code', main: true }, { name: 'Docker', main: false },],
    },

    {
      description: 'Frameworks',
      list: [{ name: 'React', main: false }, { name: 'Vue.js', main: false }, { name: 'Laravel', main: false },]
    },

    {
      description: 'Tecnologias',
      list: [{ name: 'Node.js', main: true }, { name: 'WebSocket', main: false }, { name: 'Fetch API', main: false }, { name: 'CSS Grid', main: false }, { name: 'CSS Flexbox', main: false },],
    },

    {
      description: 'Desenvolvimento',
      list: [{ name: 'TDD', main: false }, { name: 'CI', main: false }, { name: 'CD', main: false }, { name: 'MVC', main: true }, { name: 'SPA', main: false },],
    },
  ],
  languages: [
    {
      name: 'English',
      read: 2,
      write: 2,
      listen: 2,
      speak: 1,
    },

    {
      name: 'Español',
      read: 0,
      write: 0,
      listen: 0,
      speak: 0,
    }
  ],
  portfolio: [
    {
      url: 'https://github.com/modscleo4/midori',
      image_url: 'res/project-13.png',
      name: 'Midori',
      description: 'Um framework para APIs Web em Node.js sem Express, baseado no PSR.',
      techs: ['JS', 'Node.js', 'TS', 'REST', 'JSON', 'JWT'],
    },

    {
      url: 'https://github.com/modscleo4/dos',
      image_url: 'res/project-12.png',
      name: 'DOS',
      description: 'Sistema Operacional x86 simples, feito para entender os conceitos de OSDev.',
      techs: ['C', 'FAT12', 'FAT16', 'Ext2', 'ISO9660', 'BIOS', 'MBR', 'Multiboot2', 'VGA', 'E1000'],
    },

    {
      url: 'https://blogs.modscleo4.dev.br',
      image_url: 'res/project-11.png',
      name: 'Blogs',
      description: 'Um blog simples escrito em Vue 3, usando Editor.js.',
      techs: ['HTML', 'CSS', 'JS', 'TS', 'CSS Flexbox', 'Vue.js'],
    },

    {
      url: 'https://github.com/modscleo4/jukesbox',
      image_url: 'res/project-14.png',
      name: 'Jukes Box',
      description: 'Um bot de música para o Discord feito em TypeScript, baseado nas falas do streamer Jukes.',
      techs: ['TS', 'Node.js', 'Discord', 'Discord.js', 'FFMpeg', 'YouTube', 'SoundCloud', 'Spotify', 'PostgreSQL', 'Prisma'],
    },

    {
      url: 'https://github.com/modscleo4/jsdb',
      image_url: 'res/project-1.png',
      name: 'JSDB',
      description: 'Um banco de dados simples feito em JS, armazenando os dados em arquivos JSON.',
      techs: ['JS', 'Node.js', 'SQL'],
    },

    {
      url: 'https://chess.modscleo4.dev.br',
      image_url: 'res/project-8.png',
      name: 'Chess.js',
      description: 'Chess.js (com online)',
      techs: ['HTML', 'CSS', 'JS', 'Local Storage', 'Vue.js'],
    },

    {
      url: 'https://github.com/modscleo4/WPFUI',
      image_url: 'res/project-2.png',
      name: 'WPFUI',
      description: 'WPFUI é uma biblioteca de UI para WPF escrita em C# e XAML. Suporta estilos customizados para janelas e caixas de diálogo.',
      techs: ['WPF', 'C#', 'XAML', '.NET', 'Windows',],
    },

    {
      url: 'https://github.com/blitzcti/sgecti',
      image_url: 'res/project-3.png',
      name: 'SGE',
      description: 'O SGE é um Trabalho de Conclusão de Curso apresentado ao CTI - Colégio Técnico Industrial "Prof. Isaac Portal Roldán". Desenvolvido pela equipe Blitz, o projeto tem como finalidade gerenciar os estágios do CTI.',
      techs: ['PHP', 'HTML', 'CSS', 'JS', 'Laravel', 'PostgreSQL', 'SQL', 'MVC',],
    },

    {
      url: 'https://modscleo4.dev.br/minesweeper',
      image_url: 'res/project-7.png',
      name: 'Minesweeper.js',
      description: 'Campo Minado feito em Vue.js',
      techs: ['HTML', 'CSS', 'JS', 'Local Storage', 'Vue.js'],
    },

    {
      url: 'https://modscleo4.dev.br/passwordgen',
      image_url: 'res/project-9.png',
      name: 'Password Generator',
      description: 'Um simples gerador de senhas feito em Vue.js',
      techs: ['HTML', 'CSS', 'JS', 'Web Crypto', 'Vue.js'],
    },

    {
      url: 'https://modscleo4.dev.br/wpmtest',
      image_url: 'res/project-10.png',
      name: 'WPM Test',
      description: 'Teste de WPM (Words Per Minute)',
      techs: ['HTML', 'CSS', 'JS', 'Vue.js'],
    },

    {
      url: 'https://modscleo4.dev.br/kana-list',
      image_url: 'res/project-4.png',
      name: 'Kana List',
      description: 'Um website com uma lista de Hiragana e Katakana junto com suas pronúncias em IPA.',
      techs: ['HTML', 'CSS', 'JS', 'Fetch API', 'CSS Grid', 'Vue.js'],
    },

    {
      url: 'https://modscleo4.dev.br/kanji-list',
      image_url: 'res/project-5.png',
      name: 'Kanji List',
      description: 'Um website com uma lista de Kanji junto com suas pronúncias em kunyomi e onyomi.',
      techs: ['HTML', 'CSS', 'JS', 'Fetch API', 'CSS Grid', 'Vue.js'],
    },

    {
      url: 'https://modscleo4.dev.br/truthtable',
      image_url: 'res/project-6.png',
      name: 'Truth Table generator',
      description: 'Um gerador de tabela verdade feito em Vue.js',
      techs: ['HTML', 'CSS', 'JS', 'CSS Flexbox', 'Vue.js'],
    },
  ],
};

function scrollHandlerGradient() {
  // gradient start HSL
  const baseGradientStart = [249, 65, 36];
  // gradient end HSL
  const baseGradientEnd = [283, 90, 40];

  const scroll = window.scrollY;
  const scrollMultiplier = 0.15;

  // rotate the gradient start on the color wheel
  const gradientStart = [
    (baseGradientStart[0] + scroll * scrollMultiplier) % 360,
    baseGradientStart[1],
    baseGradientStart[2],
  ];

  // rotate the gradient end on the color wheel
  const gradientEnd = [
    (baseGradientEnd[0] + scroll * scrollMultiplier) % 360,
    baseGradientEnd[1],
    baseGradientEnd[2],
  ];

  const particlesJS = document.querySelector<HTMLDivElement>('div#particles-js');

  if (particlesJS) {
    // set the gradient colors as CSS variables
    particlesJS.style.setProperty('--bg-gradient-start', `hsl(${gradientStart[0]}, ${gradientStart[1]}%, ${gradientStart[2]}%)`);
    particlesJS.style.setProperty('--bg-gradient-end', `hsl(${gradientEnd[0]}, ${gradientEnd[1]}%, ${gradientEnd[2]}%)`);
  }
}

onBeforeMount(() => {
  window.addEventListener('scroll', scrollHandlerGradient);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandlerGradient);
});
</script>

<template>
  <vue-particles id="particles-js" :particlesLoaded="particlesLoaded" url="particles.json" />

  <Main :dev="dev" />
</template>

<style>
:root {
  --app-max-width: 1500px;

  --bg-gradient-start: hsl(249, 65%, 36%);
  --bg-gradient-end: hsl(283, 90%, 40%);
}

* {
  box-sizing: border-box;
  min-width: 0;
}

html,
body {
  font-family: 'Raleway', sans-serif;
  font-size: 14pt;
  background: var(--background-color);
  margin: 0;
  scroll-behavior: smooth;
  /* overflow-x: hidden; */
  color: var(--text-color);
  line-height: 1.5;
}

svg.tabler-icon {
  vertical-align: sub;
}

h1 svg.tabler-icon,
h2 svg.tabler-icon,
h3 svg.tabler-icon,
h4 svg.tabler-icon,
h5 svg.tabler-icon,
h6 svg.tabler-icon {
  vertical-align: baseline;
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-button {
  width: 0;
  height: 0;
}

::-webkit-scrollbar-thumb {
  background-color: var(--scrollbar-thumb);
  border: none;
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--scrollbar-thumb-hover);
}

::-webkit-scrollbar-thumb:active {
  background-color: var(--scrollbar-thumb-active);
}

::-webkit-scrollbar-track {
  background-color: var(--scrollbar-track);
  border: none;
}

::-webkit-scrollbar-corner {
  background-color: transparent;
}

a {
  color: var(--link-color);
  text-decoration: none;
}

a:hover {
  color: var(--link-color-hover);
  text-decoration: underline;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
}

#particles-js {
  position: fixed;
  width: 100%;
  height: 100%;
  background-size: cover;
  background: linear-gradient(135deg, var(--bg-gradient-start) 0%, var(--bg-gradient-end) 100%) no-repeat 50% 50%;
  transition: background-image 100ms ease-in-out;
  /*filter: blur(1px);*/
}
</style>
