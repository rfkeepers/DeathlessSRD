import { createRouter, createWebHistory } from 'vue-router'
import home from '@/views/site/Home.vue'
import feedback from '@/views/site/Feedback.vue'

const titleMaker = (...t) => t.join(' - ').concat(' - Innumerable Engines');

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
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
