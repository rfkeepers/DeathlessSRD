import { tags, types } from '@/glossary/consts.js';

import Compel from '@/glossary/moves/Compel.vue';
import DrownInTheAbyss from '@/glossary/moves/DrownInTheAbyss.vue';
import FindAnOpening from '@/glossary/moves/FindAnOpening.vue';
import FindRespite from '@/glossary/moves/FindRespite.vue';
import GazeIntoTheAbyss from '@/glossary/moves/GazeIntoTheAbyss.vue';
import HelpAndHindrance from '@/glossary/moves/HelpAndHindrance.vue';
import Intervene from '@/glossary/moves/Intervene.vue';
import Overwhelm from '@/glossary/moves/Overwhelm.vue';
import Persuade from '@/glossary/moves/Persuade.vue';
import ReturnToLife from '@/glossary/moves/ReturnToLife.vue';
import SacrificesMustBeMade from '@/glossary/moves/SacrificesMustBeMade.vue';
import Seduce from '@/glossary/moves/Seduce.vue';
import Snipe from '@/glossary/moves/Snipe.vue';
import Template from '@/glossary/moves/Template.vue';
import UnderstandSomeone from '@/glossary/moves/UnderstandSomeone.vue';

const moves = [
   {
      name: 'Compel',
      type: types.move,
      tags: [tags.secondaryMove],
      routeContent: 'A secondary move for when players compel each other.',
      component: Compel,
   },
   {
      name: 'Drown In The Abyss',
      type: types.move,
      tags: [tags.secondaryMove],
      routeContent: 'A secondary move for when players fill out their Abyss track.',
      component: DrownInTheAbyss,
   },
   {
      name: 'Find An Opening',
      type: types.move,
      tags: [tags.basicMove, tags.insight],
      routeContent: 'A basic move using the Insight stat.',
      component: FindAnOpening,
   },
   {
      name: 'Find Respite',
      type: types.move,
      tags: [tags.basicMove],
      routeContent: 'The basic move for sharing a moment with someone.',
      component: FindRespite
   },
   {
      name: 'Gaze Into The Abyss',
      type: types.move,
      tags: [tags.basicMove, tags.abyss],
      routeContent: 'The basic move using the Abyss stat.',
      component: GazeIntoTheAbyss,
   },
   {
      name: 'Help and Hindrance',
      type: types.move,
      tags: [tags.secondaryMove],
      routeContent: 'The move rules for handling when players want to help or hinder each other.',
      component: HelpAndHindrance,
   },
   {
      name: 'Intervene',
      type: types.move,
      tags: [tags.basicMove, tags.resolve],
      routeContent: 'The basic move using the Resolve stat.',
      component: Intervene,
   },
   {
      name: 'Overwhelm',
      type: types.move,
      tags: [tags.basicMove, tags.force],
      routeContent: 'The basic move using the Force stat.',
      component: Overwhelm,
   },
   {
      name: 'Persuade',
      type: types.move,
      tags: [tags.basicMove, tags.glamour],
      routeContent: 'The basic move using the Glamour stat.',
      component: Persuade,
   },
   {
      name: 'Return To Life',
      type: types.move,
      tags: [tags.secondaryMove],
      routeContent: 'The secondary move for handling returning your character to life after death.',
      component: ReturnToLife,
   },
   {
      name: 'Sacrifices Must Be Made',
      type: types.move,
      tags: [tags.basicMove],
      routeContent: 'The basic move for reducing Harm taken.',
      component: SacrificesMustBeMade,
   },
   {
      name: 'Seduce',
      type: types.move,
      tags: ['Fatale'],
      routeContent: 'A move granted by the Fatale Background.',
      component: Seduce,
   },
   {
      name: 'Snipe',
      type: types.move,
      tags: [tags.basicMove, tags.skill],
      routeContent: 'The basic move using the Skill stat.',
      component: Snipe,
   },
   {
      name: 'Template',
      type: types.move,
      tags: [],
      routeContent: 'a template example of a move',
      component: Template,
   },
   {
      name: 'Understand Someone',
      type: types.move,
      tags: [tags.basicMove, tags.insight],
      routeContent: 'A basic move using the Insight stat.',
      component: UnderstandSomeone,
   },
];

// construct the paths for each move.
const formatPathVal = (pv) => pv.toLowerCase().replaceAll(' ', '_');
const makePath = ({ type, name }) => `/${formatPathVal(type)}/${formatPathVal(name)}`;
const makeMeta = ({ name, routeContent, type }) => ({
    title: `${name} - ${type}`,
    tags: [{
        name: 'description',
        content: routeContent, 
    }],
});
moves.forEach(m => {
    m.path = makePath(m);
    m.meta = makeMeta(m);
});

const moveConsts = moves.map(m => ({
    name: m.name,
    path: m.path,
    type: m.type,
    tags: m.tags,
}));

export { moves, moveConsts };
