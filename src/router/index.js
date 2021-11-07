import { createRouter, createWebHistory } from 'vue-router'
import { glossaryRoutes } from '@/glossary/glossary.js';
import home from '@/views/site/Home.vue'
import moveExamples from '@/views/site/MoveExamples.vue'
import exampleExamples from '@/views/site/ExampleExamples.vue'
import feedback from '@/views/site/Feedback.vue'
import glossary from '@/views/site/Glossary.vue'
import glossaryHome from '@/glossary/GlossaryHome.vue'
import glossaryNotFound from '@/glossary/GlossaryNotFound.vue'
import notFound from '@/views/site/NotFound.vue'
import rolling from '@/views/rules/Rolling.vue'

const titleMaker = (...t) => t.concat('Deathless').join(' - ');

const formattedRoutes = glossaryRoutes.map(gr => {
  const route = Object.assign({}, gr);
  gr.meta.title = titleMaker(gr.meta.title);
  gr.path = gr.path.substring(1);
});

const routes = [
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
    path: '/rules/rolling',
    name: 'Rolling',
    component: rolling,
    meta: {
      title: titleMaker('Rolling', 'Rules'),
      tags: [
        {
          name: 'description',
          content: 'The dice rolling and resolution mechanics in Deathless.',
        }
      ],
    },
  },
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
  {
    path: '/:pathMatch(.*)*',
    component: notFound,
    meta: {
      title: 'Not Found',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
