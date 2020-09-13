particlesJS.load('particles-js', 'js/particles.json', () => {
    console.log('callback - particles.js config loaded');
});

Vue.directive('select2', {
    twoWay: true,
    bind: function (el, binding, vnode) {
        function handler(e) {
            el.dispatchEvent(new Event('change', {target: e.target}));
        }

        jQuery(el).select2().on('select2:select', handler).on('select2:unselect', handler);
    },
});

window.addEventListener('scroll', e => {
    ['dev-info', 'about', 'resume', 'portfolio', 'contact'].forEach((section, i, a) => {
        const target = document.querySelector(`section#${section}`);
        if (window.scrollY > (target.offsetTop - 32)) {
            a.filter(s => document.querySelector(`header a[href="#${s}"]`)).forEach(s => {
                document.querySelector(`header a[href="#${s}"]`).classList.remove('active');
                document.querySelector(`nav a[href="#${s}"]`).classList.remove('active');
            });

            if (document.querySelector(`header a[href="#${section}"]`)) {
                document.querySelector('header').classList.remove('alt-bg');
                document.querySelector(`header a[href="#${section}"]`).classList.add('active');
                document.querySelector(`nav a[href="#${section}"]`).classList.add('active');
            }

            if (['dev-info', 'contact'].includes(section)) {
                document.querySelector('header').classList.add('alt-bg');
            }
        }
    });
});

function formatPhone(phone) {
    const {CountryCode, DDD, P1, P2} = /(?<CountryCode>[\d]{2})(?<DDD>[\d]{2})9(?<P1>[\d]{4})(?<P2>[\d]{4})/gm.exec(phone).groups;
    return `+${CountryCode} (${DDD}) 9${P1}-${P2}`;
}

const app = new Vue({
    el: '#app',
    data: {
        sidebarOpened: false,
        tech_filter: [],
        dev: {
            name: 'Dhiego Cassiano Fogaça Barbosa',
            title: 'Desenvolvedor full stack',
            age: 18,
            contact: {
                email: 'modscleo4@outlook.com',
                phone: '5514991513719',
                github: 'modscleo4',
                gitlab: 'modscleo4',
                linkedin: 'Modscleo4',
                facebook: 'Modscleo4',
                twitter: 'modscleo4',
                reddit: 'modscleo4',
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
                    list: ['C', 'C++', 'C#', 'PHP', 'Java', 'HTML', 'CSS', 'JS', 'Python', 'SQL',],
                },

                {
                    description: 'Bancos de Dados',
                    list: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB',],
                },

                {
                    description: 'Sistemas Operacionais',
                    list: ['Windows', 'Linux',],
                },

                {
                    description: 'Ferramentas',
                    list: ['Git', 'GitHub',],
                },

                {
                    description: 'Frameworks',
                    list: ['React', 'Vue.js', 'Laravel',]
                },

                {
                    description: 'Tecnologias',
                    list: ['Node.js', 'WebSocket', 'Fetch API', 'CSS Grid', 'CSS Flexbox'],
                },

                {
                    description: 'Desenvolvimento',
                    list: ['TDD', 'CI', 'CD', 'MVC', 'SPA', 'Docker',],
                },
            ],
            languages: [
                {
                    name: 'English',
                    read: 2,
                    write: 2,
                    listen: 2,
                    speak: 2,
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
                    description: 'O SGE é um Trabalho de Conclusão de Curso apresentado ao CTI - Colégio Técnico Industrial "Prof. Isaac Portal Roldán" - Unesp - Universidade Estadual Paulista "Júlio de Mesquita Filho" - Campus de Bauru. Desenvolvido pela equipe Blitz, o projeto tem como finalidade gerenciar os estágios do CTI.',
                    techs: ['PHP', 'HTML', 'CSS', 'JS', 'Laravel', 'PostgreSQL', 'SQL', 'MVC',],
                },

                {
                    url: 'https://modscleo4.github.io/kana-list',
                    image_url: 'res/project-4.png',
                    name: 'Kana List',
                    description: 'A website with a Kana (Hiragana and Katakana) list.',
                    techs: ['HTML', 'CSS', 'JS', 'Fetch API', 'CSS Grid', 'Vue.js'],
                },
            ]
        },
    },

    computed: {
        portfolio: function () {
            if (this.tech_filter.length === 0) {
                return this.dev.portfolio;
            }

            return this.dev.portfolio.filter(p => p.techs.find(t => this.tech_filter.includes(t)));
        },
    },

    methods: {
        techs: function () {
            return this.dev.skills.reduce((a, s) => a.concat(s.list), []);
        },

        language_level: function (i) {
            return ['Básico', 'Intermediário', 'Avançado', 'Fluente'][i];
        }
    },
});

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
    mirror: false,
    anchorPlacement: 'top-bottom',
});
