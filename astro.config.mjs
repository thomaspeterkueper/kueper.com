// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://kueper.com',
  
  integrations: [mdx()],
  
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true
    }
  },
  
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    }
  }
});
