import { createApp } from 'vue';
import Particles from '@tsparticles/vue3';
import { loadFull } from 'tsparticles';
// import aos from 'aos';

import 'aos/dist/aos.css';
import './themes/light.css';
import './themes/dark.css';

import App from './App.vue';

const app = createApp(App);

app.use(Particles, {
    init: async engine => {
        await loadFull(engine);
    },
});

app.mount('#app');

/*aos.init({
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
*/
