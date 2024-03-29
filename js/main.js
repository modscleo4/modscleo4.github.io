'use strict';

import * as Vue from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.5/vue.esm-browser.prod.js';

particlesJS.load('particles-js', 'js/particles.json', () => {
    console.log('callback - particles.js config loaded');
});

window.addEventListener('scroll', () => {
    ['dev-info', 'about', 'resume', 'portfolio', 'contact'].forEach((section, i, a) => {
        const target = document.querySelector(`section#${section}`);
        if (target?.getBoundingClientRect().top < 32 && target?.getBoundingClientRect().bottom >= 0) {
            a.forEach(s => {
                document.querySelector(`header a[href="#${s}"]`)?.classList.remove('active');
                document.querySelector(`nav a[href="#${s}"]`)?.classList.remove('active');
            });

            document.querySelector('header')?.classList.remove('alt-bg');
            document.querySelector(`header a[href="#${section}"]`)?.classList.add('active');
            document.querySelector(`nav a[href="#${section}"]`)?.classList.add('active');

            if (target?.classList.contains('no-bg')) {
                document.querySelector('header')?.classList.add('alt-bg');
            }

            if (section === 'resume') {
                document.querySelector(`header a[href="#resume"]`)?.parentElement?.querySelector(`.sublinks`)?.classList.add('visible');
            } else {
                document.querySelector(`header a[href="#resume"]`)?.parentElement?.querySelector(`.sublinks`)?.classList.remove('visible');
                ['formation', 'experience', 'languages', 'skills'].forEach(s => {
                    //console.log(document.querySelector(`header a[href="#${s}"]`)?.classList);
                    document.querySelector(`header a[href="#${s}"]`)?.classList.remove('active');
                    //document.querySelector(`nav a[href="#${s}"]`).classList.remove('active');
                });
            }
        }
    });

    ['formation', 'experience', 'languages', 'skills'].forEach((section, i, a) => {
        const target = document.querySelector(`section#${section}`);
        if (target?.getBoundingClientRect().top < 32 && target?.getBoundingClientRect().bottom >= 0) {
            a.forEach(s => {
                document.querySelector(`header a[href="#${s}"]`)?.classList.remove('active');
                //document.querySelector(`nav a[href="#${s}"]`).classList.remove('active');
            });

            document.querySelector('header')?.classList.remove('alt-bg');
            document.querySelector(`header a[href="#${section}"]`)?.classList.add('active');
            //document.querySelector(`nav a[href="#${section}"]`).classList.add('active');

            if (target?.classList.contains('no-bg')) {
                document.querySelector('header')?.classList.add('alt-bg');
            }
        }
    });
});

const app = Vue.createApp({
    data: () => ({
        sidebarOpened: false,
        projectsExpanded: false,
        tech_filter: [],
        dev: {
            name: 'Dhiego Cassiano Fogaça Barbosa',
            title: 'Desenvolvedor full stack',
            age: 18,
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
                        end_year: 2024,
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
                        description: 'Estagiário',
                        activities: 'Desenvolvimento de rotinas de acordo com o requisito, planejamento ou solicitação conforme os padrões exigidos pela empresa',
                        start_year: 2021,
                        end_year: null,
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
                    list: [{name: 'C', main: false}, {name: 'C++', main: false}, {name: 'C#', main: false}, {name: 'PHP', main: true}, {name: 'Java', main: false}, {name: 'HTML', main: true}, {name: 'CSS', main: true}, {name: 'JS', main: true}, {name: 'Python', main: false}, {name: 'SQL', main: false}, {name: 'Delphi', main: false},],
                },

                {
                    description: 'Bancos de Dados',
                    list: [{name: 'PostgreSQL', main: true}, {name: 'MySQL', main: false}, {name: 'SQLite', main: false}, {name: 'MongoDB', main: false}, {name: 'Firebird', main: false},],
                },

                {
                    description: 'Sistemas Operacionais',
                    list: [{name: 'Windows', main: false}, {name: 'Linux', main: true},],
                },

                {
                    description: 'Ferramentas',
                    list: [{name: 'Git', main: true}, {name: 'GitHub', main: true}, {name: 'GitLab', main: false}, {name: 'Jira', main: false}, {name: 'VS Code', main: true}, {name: 'Docker', main: false},],
                },

                {
                    description: 'Frameworks',
                    list: [{name: 'React', main: false}, {name: 'Vue.js', main: false}, {name: 'Laravel', main: false},]
                },

                {
                    description: 'Tecnologias',
                    list: [{name: 'Node.js', main: true}, {name: 'WebSocket', main: false}, {name: 'Fetch API', main: false}, {name: 'CSS Grid', main: false}, {name: 'CSS Flexbox', main: false},],
                },

                {
                    description: 'Desenvolvimento',
                    list: [{name: 'TDD', main: false}, {name: 'CI', main: false}, {name: 'CD', main: false}, {name: 'MVC', main: true}, {name: 'SPA', main: false},],
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
                    url: 'https://github.com/modscleo4/jsdb',
                    image_url: 'res/project-1.png',
                    name: 'JSDB',
                    description: 'JSDB is a project to create a Node.js database manager which supports SQL. Built on JavaScript, the JSDB uses JSON to store database data.',
                    techs: ['JS', 'Node.js', 'SQL'],
                },

                {
                    url: 'https://github.com/modscleo4/WPFUI',
                    image_url: 'res/project-2.png',
                    name: 'WPFUI',
                    description: 'WPFUI is a WPF UI library written in C# and XAML. It supports custom window and dialog box styles.',
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
                    url: 'https://chess.modscleo4.dev.br',
                    image_url: 'res/project-8.png',
                    name: 'Chess.js',
                    description: 'Chess.js (with online)',
                    techs: ['HTML', 'CSS', 'JS', 'Local Storage', 'Vue.js'],
                },

                {
                    url: 'https://modscleo4.dev.br/minesweeper',
                    image_url: 'res/project-7.png',
                    name: 'Minesweeper.js',
                    description: 'Minesweeper.js (with dark theme!)',
                    techs: ['HTML', 'CSS', 'JS', 'Local Storage', 'Vue.js'],
                },

                {
                    url: 'https://modscleo4.dev.br/passwordgen',
                    image_url: 'res/project-9.png',
                    name: 'Password Generator',
                    description: 'A Simple Password Generator',
                    techs: ['HTML', 'CSS', 'JS', 'Web Crypto', 'Vue.js'],
                },

                {
                    url: 'https://modscleo4.dev.br/wpmtest',
                    image_url: 'res/project-10.png',
                    name: 'WPM Test',
                    description: 'WPM (Words Per Minute) Test',
                    techs: ['HTML', 'CSS', 'JS', 'Vue.js'],
                },

                {
                    url: 'https://modscleo4.dev.br/kana-list',
                    image_url: 'res/project-4.png',
                    name: 'Kana List',
                    description: 'A website with a Kana (Hiragana and Katakana) list.',
                    techs: ['HTML', 'CSS', 'JS', 'Fetch API', 'CSS Grid', 'Vue.js'],
                },

                {
                    url: 'https://modscleo4.dev.br/kanji-list',
                    image_url: 'res/project-5.png',
                    name: 'Kanji List',
                    description: 'A website with a Kanji list with kunyomi and onyomi pronunciations.',
                    techs: ['HTML', 'CSS', 'JS', 'Fetch API', 'CSS Grid', 'Vue.js'],
                },

                {
                    url: 'https://blogs.modscleo4.dev.br',
                    image_url: 'res/project-11.png',
                    name: 'Blogs',
                    description: 'A Simple Markdown Blog Written in Vue 3',
                    techs: ['HTML', 'CSS', 'JS', 'CSS Flexbox', 'Vue.js'],
                },

                {
                    url: 'https://modscleo4.dev.br/truthtable',
                    image_url: 'res/project-6.png',
                    name: 'Truth Table generator',
                    description: 'Truth Table generator written in Vue',
                    techs: ['HTML', 'CSS', 'JS', 'CSS Flexbox', 'Vue.js'],
                },
            ],
        },
    }),

    computed: {
        portfolio() {
            if (this.tech_filter.length === 0) {
                return this.dev.portfolio;
            }

            return this.dev.portfolio.filter(p => p.techs.find(t => this.tech_filter.includes(t)));
        },
    },

    methods: {
        techs() {
            return this.dev.skills.reduce((a, s) => a.concat(s.list.map(v => v.name)), []);
        },

        language_level(i) {
            return ['Básico', 'Intermediário', 'Avançado', 'Fluente'][i];
        },

        formatPhone(phone) {
            const {
                CountryCode,
                DDD,
                P1,
                P2
            } = /(?<CountryCode>[\d]{2})(?<DDD>[\d]{2})9(?<P1>[\d]{4})(?<P2>[\d]{4})/gm.exec(phone).groups;
            return `+${CountryCode} (${DDD}) 9${P1}-${P2}`;
        },
    },
}).directive('select2', {
    twoWay: true,
    beforeMount(el, binding, vnode) {
        function handler(e) {
            el.dispatchEvent(new Event('change', {target: e.target}));
        }

        jQuery(el).select2().on('select2:select', handler).on('select2:unselect', handler);
    },
}).mount('#app');

window.addEventListener('DOMContentLoaded', () => {
    jQuery('#tech-filter').select2({
        language: 'pt-BR',
    });
});

AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 120,
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false,
    mirror: true,
    anchorPlacement: 'top-bottom',
});
