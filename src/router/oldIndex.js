import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/site/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/site/About.vue')
  },
  {
    path: '/feedback',
    name: 'Feedback',
    component: () => import(/* webpackChunkName: "feedback" */ '../views/site/Feedback.vue'),
  },
  {
    path: '/abyss',
    name: 'Abyss',
    component: () => import(/* webpackChunkName: "abyss" */ '../views/concepts/Abyss.vue'),
  },
  {
    path: '/death',
    name: 'Death',
    component: () => import(/* webpackChunkName: "death" */ '../views/concepts/Death.vue'),
  },
  {
    path: '/entanglements',
    name: 'Entanglements',
    component: () => import(/* webpackChunkName: "entanglements" */ '../views/concepts/Entanglements.vue'),
  },
  {
    path: '/harm',
    name: 'Harm',
    component: () => import(/* webpackChunkName: "harm" */ '../views/concepts/Harm.vue'),
  },
  {
    path: '/stats',
    name: 'Stats',
    component: () => import(/* webpackChunkName: "stats" */ '../views/concepts/Stats.vue'),
  },
  {
    path: '/agendas',
    name: 'Agendas',
    component: () => import(/* webpackChunkName: "agendas" */ '../views/game/Agendas.vue'),
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import(/* webpackChunkName: "characters" */ '../views/game/Characters.vue'),
  },
  {
    path: '/conversation',
    name: 'Conversation',
    component: () => import(/* webpackChunkName: "conversation" */ '../views/game/Conversation.vue'),
  },
  {
    path: '/hardware',
    name: 'Hardware',
    component: () => import(/* webpackChunkName: "hardware" */ '../views/game/Hardware.vue'),
  },
  {
    path: '/intro',
    name: 'Introduction',
    component: () => import(/* webpackChunkName: "intro" */ '../views/game/Introduction.vue'),
  },
  {
    path: '/safety',
    name: 'Safety',
    component: () => import(/* webpackChunkName: "safety" */ '../views/game/Safety.vue'),
  },
  {
    path: '/scenes',
    name: 'Scenes',
    component: () => import(/* webpackChunkName: "scenes" */ '../views/game/Scenes.vue'),
  },
  {
    path: '/basic',
    name: 'Basic',
    component: () => import(/* webpackChunkName: "basic" */ '../views/moves/Basic.vue'),
  },
  {
    path: '/special',
    name: 'Special',
    component: () => import(/* webpackChunkName: "special" */ '../views/moves/Special.vue'),
  },
  {
    path: '/helphinder',
    name: 'HelpHinder',
    component: () => import(/* webpackChunkName: "helphinder" */ '../views/moves/HelpHinder.vue'),
  },
  {
    path: '/charactercreation',
    name: 'CharacterCreation',
    component: () => import(/* webpackChunkName: "charactercreation" */ '../views/origins/CharacterCreation.vue'),
  },
  {
    path: '/artiste',
    name: 'Artiste',
    component: () => import(/* webpackChunkName: "artiste" */ '../views/origins/Artiste.vue'),
  },
  {
    path: '/butcher',
    name: 'Butcher',
    component: () => import(/* webpackChunkName: "butcher" */ '../views/origins/Butcher.vue'),
  },
  {
    path: '/constable',
    name: 'Constable',
    component: () => import(/* webpackChunkName: "constable" */ '../views/origins/Constable.vue'),
  },
  {
    path: '/grifter',
    name: 'Grifter',
    component: () => import(/* webpackChunkName: "grifter" */ '../views/origins/Grifter.vue'),
  },
  {
    path: '/hunter',
    name: 'Hunter',
    component: () => import(/* webpackChunkName: "hunter" */ '../views/origins/Hunter.vue'),
  },
  {
    path: '/minister',
    name: 'Minister',
    component: () => import(/* webpackChunkName: "minister" */ '../views/origins/Minister.vue'),
  },
  {
    path: '/resurrectionist',
    name: 'Resurrectionist',
    component: () => import(/* webpackChunkName: "resurrectionist" */ '../views/origins/Resurrectionist.vue'),
  },
  {
    path: '/scholar',
    name: 'Scholar',
    component: () => import(/* webpackChunkName: "scholar" */ '../views/origins/Scholar.vue'),
  },
  {
    path: '/smith',
    name: 'Smith',
    component: () => import(/* webpackChunkName: "smith" */ '../views/origins/Smith.vue'),
  },
  {
    path: '/soldier',
    name: 'Soldier',
    component: () => import(/* webpackChunkName: "soldier" */ '../views/origins/Soldier.vue'),
  },
  {
    path: '/tinker',
    name: 'Tinker',
    component: () => import(/* webpackChunkName: "tinker" */ '../views/origins/Tinker.vue'),
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
