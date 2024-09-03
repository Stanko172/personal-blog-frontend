import hljs from 'highlight.js';
import 'assets/css/tokyo-night.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('highlightjs', {
    deep: true,
    mounted(el) {
      const blocks = el.querySelectorAll('pre code');
      blocks.forEach((block: HTMLElement) => {
        hljs.highlightElement(block);
      });
    },
    updated(el) {
      const blocks = el.querySelectorAll('pre code');
      blocks.forEach((block: HTMLElement) => {
        hljs.highlightElement(block);
      });
    },
  });
});
