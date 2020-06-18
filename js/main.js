particlesJS.load('particles-js', 'js/particles.json', () => {
    console.log('callback - particles.js config loaded');
});

window.addEventListener('scroll', e => {
    ['dev-info', 'about', 'resume', 'portfolio', 'contact'].forEach((section, i, a) => {
        const target = document.querySelector(`section#${section}`);
        if (window.scrollY > (target.offsetTop - 32)) {
            a.forEach(s => {
                if (document.querySelector(`header a[href="#${s}"]`)) {
                    document.querySelector(`header a[href="#${s}"]`).classList.remove('active');
                }
            });

            if (document.querySelector(`header a[href="#${section}"]`)) {
                document.querySelector('header').classList.add('content');
                document.querySelector(`header a[href="#${section}"]`).classList.add('active');
            }

            if (['dev-info', 'contact'].includes(section)) {
                document.querySelector('header').classList.remove('content');
            }
        }
    });
});

window.addEventListener('DOMContentLoaded', e => {
    /*['about', 'resume', 'portfolio', 'contact'].forEach(section => {
        document.addEventListener(`aos:in:${section}`, () => {
            document.querySelector(`header a[href="#${section}"]`).classList.add('active');
        });

        document.addEventListener(`aos:out:${section}`, () => {
            document.querySelector(`header a[href="#${section}"]`).classList.remove('active');
        });
    });*/

    [
        {name: 'c', percent: 80,},
        {name: 'cs', percent: 75,},
        {name: 'php', percent: 80,},
        {name: 'java', percent: 75,},
        {name: 'sql', percent: 75,},
        {name: 'html', percent: 70,},
        {name: 'css', percent: 60,},
        {name: 'js', percent: 85,},
        {name: 'git', percent: 75,},
        {name: 'linux', percent: 85,},
    ].forEach(skill => {
        const div = document.querySelector(`#skills #skill-${skill.name}`);
        div.querySelector('.percent').innerHTML = `${skill.percent}%`;
        div.querySelector('.progress-bar').style.width = `${skill.percent}%`;
        div.querySelector('.progress-bar').setAttribute('aria-valuenow', skill.percent);
    });
});

AOS.init({
    disable: true,
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
