import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';
import clerk from 'astro-clerk-auth';

export default defineConfig({
  integrations: [clerk()],
  output: 'server',
  adapter: netlify(),
});
