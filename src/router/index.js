import { createRouter, createWebHistory } from 'vue-router'
import { glossaryRoutes } from '@/glossary/glossary.js';

import home from '@/views/site/Home.vue'
import feedback from '@/views/site/Feedback.vue'

import entanglements from '@/views/rules/Entanglements.vue'
import rolling from '@/views/rules/Rolling.vue'

import glossary from '@/views/site/Glossary.vue'
import glossaryHome from '@/glossary/GlossaryHome.vue'
import glossaryNotFound from '@/glossary/GlossaryNotFound.vue'

import exampleExamples from '@/views/site/ExampleExamples.vue'
import moveExamples from '@/views/site/MoveExamples.vue'

import notFound from '@/views/site/NotFound.vue'

const titleMaker = (...t) => t.concat('Deathless').join(' - ');
const nameMaker = (...t) => t.join('.');

// ------------------------------------------------------------------------------------- 
// core
let routes = [
  {
    path: '/',
    name: 'Home',
    component: home,
    meta: {
      title: titleMaker('Home'),
      tags: [
        {
          name: 'description',
          content: 'Deathless - a pbta about scrutinizing the mechanics of death within a fantasy gaming setting.',
        },
      ],
    },
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: feedback,
    meta: {
      title: titleMaker('Feedback'),
      tags: [
        {
          name: 'description',
          content: 'Give some feedback about the game!',
        },
      ],
    },
  },
];

// ------------------------------------------------------------------------------------- 
// rules
routes = routes.concat([
  {
    path: '/rolling',
    name: 'Rolling',
    component: rolling,
    meta: {
      title: titleMaker('Rolling'),
      tags: [
        {
          name: 'description',
          content: 'The dice rolling and resolution mechanics in Deathless.',
        }
      ],
    },
  },
  {
    path: '/entanglements',
    name: 'Entanglements',
    component: entanglements,
    meta: {
      title: titleMaker('Entanglements'),
      tags: [
        {
          name: 'description',
          content: 'The entanglement mechanics in Deathless.',
        }
      ],
    },
  },
]);

// ------------------------------------------------------------------------------------- 
// glossary
// correct the path for the glossary entries
glossaryRoutes.forEach(gr => {
  gr.meta.title = titleMaker(gr.meta.title);
  gr.path = gr.path.substring(1);
});

routes = routes.concat([
  {
    path: '/glossary',
    name: 'Glossary',
    component: glossary,
    meta: {
      title: titleMaker('Glossary'),
      tags: [
        {
          name: 'description',
          content: 'The glossary reference for all rules in the game.',
        },
      ],
    },
    children: [
      ...glossaryRoutes,
      {
        path: 'landing',
        name: 'Glossary Landing',
        component: glossaryHome,
        meta: {
          title: 'Glossary',
        },
      },
      {
        path: ':pathMatch(.*)*',
        component: glossaryNotFound,
        meta: {
          title: 'Glossary - Not Found',
        },
      },
    ],
  },
]);


// ------------------------------------------------------------------------------------- 
// design
routes = routes.concat([
  {
    path: '/design/moves',
    name: 'Move UX Design',
    component: moveExamples,
    meta: {
      title: titleMaker('Move UX Design'),
      tags: [
        {
          name: 'description',
          content: 'Showcases various designs for the Move component.',
        },
      ],
    },
  },
  {
    path: '/design/examples',
    name: 'Example UX Design',
    component: exampleExamples,
    meta: {
      title: titleMaker('Example UX Design'),
      tags: [
        {
          name: 'description',
          content: 'Showcases designs for the Example panel component.',
        },
      ],
    },
  },
]);

// ------------------------------------------------------------------------------------- 
// catchall
routes = routes.concat([
  {
    path: '/:pathMatch(.*)*',
    component: notFound,
    meta: {
      title: 'Not Found',
    },
  },
]);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
