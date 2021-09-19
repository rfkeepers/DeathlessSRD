import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/site/Home.vue'
import moveExamples from '@/views/site/MoveExamples.vue'
import exampleExamples from '@/views/site/ExampleExamples.vue'
import feedback from '@/views/site/Feedback.vue'
import glossary from '@/views/site/Glossary.vue'
import glossaryHome from '@/glossary/GlossaryHome.vue'
import glossaryNotFound from '@/glossary/GlossaryNotFound.vue'
import glossaryRoutes from '@/glossary/routes.js'

const titleMaker = (...t) => t.join(' - ').concat(' - Deathless');

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
      {
        path: 'landing',
        name: 'Glossary Landing',
        component: glossaryHome,
      },
      ...glossaryRoutes,
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
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
