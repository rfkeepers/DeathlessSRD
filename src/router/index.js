import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/site/Home.vue'
import About from '@/views/site/About.vue'
import Feedback from '@/views/site/Feedback.vue'
import Concepts from '@/views/concepts/Concepts.vue'
import Abyss from '@/views/concepts/Abyss.vue'
import Death from '@/views/concepts/Death.vue'
import Entanglements from '@/views/concepts/Entanglements.vue'
import Harm from '@/views/concepts/Harm.vue'
import Stats from '@/views/concepts/Stats.vue'
import Game from '@/views/game/Game.vue'
import Agendas from '@/views/game/Agendas.vue'
import Characters from '@/views/game/Characters.vue'
import Conversation from '@/views/game/Conversation.vue'
import Hardware from '@/views/game/Hardware.vue'
import Introduction from '@/views/game/Introduction.vue'
import Safety from '@/views/game/Safety.vue'
import Scenes from '@/views/game/Scenes.vue'
import Moves from '@/views/moves/Moves.vue'
import Basic from '@/views/moves/Basic.vue'
import Special from '@/views/moves/Special.vue'
import HelpHinder from '@/views/moves/HelpHinder.vue'
import Origins from '@/views/origins/Origins.vue'
import Creation from '@/views/origins/Creation.vue'
import Artiste from '@/views/origins/Artiste.vue'
import Butcher from '@/views/origins/Butcher.vue'
import Constable from '@/views/origins/Constable.vue'
import Grifter from '@/views/origins/Grifter.vue'
import Hunter from '@/views/origins/Hunter.vue'
import Minister from '@/views/origins/Minister.vue'
import Resurrectionist from '@/views/origins/Resurrectionist.vue'
import Scholar from '@/views/origins/Scholar.vue'
import Smith from '@/views/origins/Smith.vue'
import Soldier from '@/views/origins/Soldier.vue'
import Tinker from '@/views/origins/Tinker.vue'

const routes = [
  {
    path: '/deathless/', name: 'Home', component: Home },
  { path: '/deathless/about', name: 'About', component: About },
  { path: '/deathless/feedback', name: 'Feedback', component: Feedback },
  { path: '/deathless/concepts', name: 'Concepts', component: Concepts },
  { path: '/deathless/concepts/abyss', name: 'Abyss', component: Abyss },
  { path: '/deathless/concepts/death', name: 'Death', component: Death},
  { path: '/deathless/concepts/entanglements', name: 'Entanglements', component: Entanglements },
  { path: '/deathless/concepts/harm', name: 'Harm', component: Harm },
  { path: '/deathless/concepts/stats', name: 'Stats', Stats },
  { path: '/deathless/game', name: 'Game', component: Game},
  { path: '/deathless/game/agendas', name: 'Agendas', component: Agendas},
  { path: '/deathless/game/characters', name: 'Characters', component: Characters },
  { path: '/deathless/game/conversation', name: 'Conversation', component: Conversation },
  { path: '/deathless/game/hardware', name: 'Hardware', component: Hardware },
  { path: '/deathless/game/intro', name: 'Introduction', component: Introduction },
  { path: '/deathless/game/safety', name: 'Safety', component: Safety},
  { path: '/deathless/game/scenes', name: 'Scenes', component: Scenes},
  { path: '/deathless/moves', name: 'Moves', component: Moves },
  { path: '/deathless/moves/basic', name: 'Basic', component: Basic },
  { path: '/deathless/moves/special', name: 'Special', component: Special },
  { path: '/deathless/moves/helphinder', name: 'HelpHinder', component: HelpHinder },
  { path: '/deathless/origins', name: 'Origins', component: Origins },
  { path: '/deathless/origins/creation', name: 'Creation', component: Creation },
  { path: '/deathless/origins/artiste', name: 'Artiste', component: Artiste },
  { path: '/deathless/origins/butcher', name: 'Butcher', component: Butcher },
  { path: '/deathless/origins/constable', name: 'Constable', component: Constable },
  { path: '/deathless/origins/grifter', name: 'Grifter', component: Grifter },
  { path: '/deathless/origins/hunter', name: 'Hunter', component: Hunter },
  { path: '/deathless/origins/minister', name: 'Minister', component: Minister },
  { path: '/deathless/origins/resurrectionist', name: 'Resurrectionist', component: Resurrectionist },
  { path: '/deathless/origins/scholar', name: 'Scholar', component: Scholar },
  { path: '/deathless/origins/smith', name: 'Smith', component: Smith },
  { path: '/deathless/origins/soldier', name: 'Soldier', component: Soldier },
  { path: '/deathless/origins/tinker', name: 'Tinker', component: Tinker },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
