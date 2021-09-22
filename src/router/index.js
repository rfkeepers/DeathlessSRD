import { createRouter, createWebHistory } from 'vue-router'
import { glossaryRoutes } from '@/glossary/glossary.js';
import home from '@/views/site/Home.vue'
import moveExamples from '@/views/site/MoveExamples.vue'
import exampleExamples from '@/views/site/ExampleExamples.vue'
import feedback from '@/views/site/Feedback.vue'
import glossary from '@/views/site/Glossary.vue'
import glossaryHome from '@/glossary/GlossaryHome.vue'
import glossaryNotFound from '@/glossary/GlossaryNotFound.vue'
// import glossaryRoutes from '@/glossary/routes.js'
import notFound from '@/views/site/NotFound.vue'

const titleMaker = (...t) => t.join(' - ').concat(' - Deathless');

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
    path: '/moves',
    name: 'Move Examples',
    component: moveExamples,
    meta: {
      title: titleMaker('Move Examples'),
      tags: [
        {
          name: 'description',
          content: 'Showcases the Move component.',
        },
      ],
    },
  },
  {
    path: '/examples',
    name: 'Example Examples',
    component: exampleExamples,
    meta: {
      title: titleMaker('Example Examples'),
      tags: [
        {
          name: 'description',
          content: 'Showcases the Example component.',
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
          content: 'Showcases the Glossary component.',
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
