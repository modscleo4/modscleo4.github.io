particlesJS.load('particles-js', 'js/particles.json', () => {
    console.log('callback - particles.js config loaded');
});

Vue.component('education', {
    props: ['education'],

    template: `
<li>
    <p class="school-name">{{ education.school_name }}</p>
    <div class="school-details">
        <p>{{ education.course }}</p>
        <p>{{ education.start_year }} - {{ education.end_year }}</p>
    </div>
</li>`,
});

Vue.component('job', {
    props: ['job'],

    template: `
<li>
    <p class="company-name">{{ job.company_name }}</p>
    <div class="company-details">
        <p>{{ job.description }}</p>
        <span class="divider"></span>
        <p>{{ job.activities }}</p>
        <p>{{ job.start_year }} - {{ job.end_year }}</p>
    </div>
</li>`,
});

Vue.component('skill', {
    props: ['skill'],

    template: `
<div class="skill">
    <p>{{ skill }}</p>
</div>`,
});

Vue.component('portfolio-item', {
    props: ['portfolio_item'],

    template: `
<a :href="portfolio_item.url" target="_blank">
    <div class="portfolio-item">
        <aside class="project-img">
            <img :src="portfolio_item.image_url" alt="Project Image">
        </aside>

        <div class="project-info">
            <p class="project-name">{{ portfolio_item.name }}</p>
            <p class="project-description">{{ portfolio_item.description }}</p>
            <div class="techs-div">
                <p>Tecnologias: </p>
                <div class="techs">
                    <div class="stack" v-for="tech in portfolio_item.techs">{{ tech }}</div>
                </div>
            </div>
        </div>
    </div>
</a>`,
});

window.addEventListener('scroll', e => {
    ['dev-info', 'about', 'resume', 'portfolio', 'contact'].forEach((section, i, a) => {
        const target = document.querySelector(`section#${section}`);
        if (window.scrollY > (target.offsetTop - 32)) {
            a.filter(s => document.querySelector(`header a[href="#${s}"]`)).forEach(s => {
                document.querySelector(`header a[href="#${s}"]`).classList.remove('active');
            });

            if (document.querySelector(`header a[href="#${section}"]`)) {
                document.querySelector('header').classList.remove('alt-bg');
                document.querySelector(`header a[href="#${section}"]`).classList.add('active');
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
                stackoverflow: '147419/modscleo4',
            },
            brief: 'Sou um programador pleno capaz de desenvolver um website completo do zero. Atualmente busco por colocação profissional no mercado de trabalho. Sou proativo, aprendo rápido, com boa comunicação e com bom desempenho em trabalho em grupo.',
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
                    list: ['TDD', 'CI', 'CD', 'MVC', 'SPA'],
                },
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
    }
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
