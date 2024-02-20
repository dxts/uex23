import { Router } from '@vaadin/router';

import './landing-page.js';

import './projects/empathy-page.js';
import './projects/decomposition-page.js';
import './projects/analogy-page.js';
import './projects/style-page.js';
import './projects/context-page.js';
import './projects/collage-page.js';

const routes = [
  { path: '.', component: 'landing-page' },
  { path: 'empathy', component: 'empathy-page' },
  { path: 'decomposition', component: 'decomposition-page' },
  { path: 'analogy', component: 'analogy-page' },
  { path: 'style', component: 'style-page' },
  { path: 'context', component: 'context-page' },
  { path: 'collage', component: 'collage-page' },
  { path: '(.*)', component: 'landing-page' },
];

const router = new Router(document.querySelector('main'), {
  baseUrl: '/uex23/',
});
router.setRoutes(routes);
