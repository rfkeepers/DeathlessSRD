import { tags, types } from '@/glossary/consts.js';

import AllArePrey from '@/glossary/moves/AllArePrey.vue';
import AndForMyNextTrick from '@/glossary/moves/AndForMyNextTrick.vue';
import CaseAJoint from '@/glossary/moves/CaseAJoint.vue';
import Command from '@/glossary/moves/Command.vue';
import Compel from '@/glossary/moves/Compel.vue';
import Confession from '@/glossary/moves/Confession.vue';
import Cook from '@/glossary/moves/Cook.vue';
import CovertDemolitionist from '@/glossary/moves/CovertDemolitionist.vue';
import DayJob from '@/glossary/moves/DayJob.vue';
import Dismantle from '@/glossary/moves/Dismantle.vue';
import DrownInTheAbyss from '@/glossary/moves/DrownInTheAbyss.vue';
import FindAnOpening from '@/glossary/moves/FindAnOpening.vue';
import FindRespite from '@/glossary/moves/FindRespite.vue';
import GazeIntoTheAbyss from '@/glossary/moves/GazeIntoTheAbyss.vue';
import HeartsAndMinds from '@/glossary/moves/HeartsAndMinds.vue';
import HelpAndHindrance from '@/glossary/moves/HelpAndHindrance.vue';
import Intervene from '@/glossary/moves/Intervene.vue';
import JuryRig from '@/glossary/moves/JuryRig.vue';
import LongCon from '@/glossary/moves/LongCon.vue';
import Overwhelm from '@/glossary/moves/Overwhelm.vue';
import Persuade from '@/glossary/moves/Persuade.vue';
import RabbitInTheHat from '@/glossary/moves/RabbitInTheHat.vue';
import Rally from '@/glossary/moves/Rally.vue';
import ReadTheirTell from '@/glossary/moves/ReadTheirTell.vue';
import RespectMyAuthority from '@/glossary/moves/RespectMyAuthority.vue';
import ReturnToLife from '@/glossary/moves/ReturnToLife.vue';
import SacrificesMustBeMade from '@/glossary/moves/SacrificesMustBeMade.vue';
import Seduce from '@/glossary/moves/Seduce.vue';
import SeekingSolace from '@/glossary/moves/SeekingSolace.vue';
import ShieldCharge from '@/glossary/moves/ShieldCharge.vue';
import ShowEm from '@/glossary/moves/ShowEm.vue';
import Snipe from '@/glossary/moves/Snipe.vue';
import SomethingWrongOfficer from '@/glossary/moves/SomethingWrongOfficer.vue';
import Synthesis from '@/glossary/moves/Synthesis.vue';
import Template from '@/glossary/moves/Template.vue';
import Tendons from '@/glossary/moves/Tendons.vue';
import Testudo from '@/glossary/moves/Testudo.vue';
import Track from '@/glossary/moves/Track.vue';
import UnderstandSomeone from '@/glossary/moves/UnderstandSomeone.vue';
import Yarn from '@/glossary/moves/Yarn.vue';

const moves = [
   {
      name: 'All Are Prey',
      type: types.move,
      tags: [],
      routeContent: 'One of the Hunter background moves.',
      component: AllArePrey,
   },
   {
      name: 'And For My Next Trick',
      type: types.move,
      tags: [],
      routeContent: 'One of the Magician background moves.',
      component: AndForMyNextTrick,
   },
   {
      name: 'Case A Joint',
      type: types.move,
      tags: [],
      routeContent: 'One of the Grifter background moves.',
      component: CaseAJoint,
   },
   {
      name: 'Command',
      type: types.move,
      tags: [],
      routeContent: 'One of the Constable background moves.',
      component: Command,
   },
   {
      name: 'Compel',
      type: types.move,
      tags: [tags.secondaryMove],
      routeContent: 'A secondary move for when players compel each other.',
      component: Compel,
   },
   {
      name: 'Confession',
      type: types.move,
      tags: [],
      routeContent: 'One of the Minister background moves.',
      component: Confession,
   },
   {
      name: 'Cook',
      type: types.move,
      tags: [],
      routeContent: 'One of the Chef background moves.',
      component: Cook,
   },
   {
      name: 'Covert Demolitionist',
      type: types.move,
      tags: [],
      routeContent: 'One of the Graverobber background moves.',
      component: CovertDemolitionist,
   },
   {
      name: 'Day Job',
      type: types.move,
      tags: [],
      routeContent: 'One of the Butcher background moves.',
      component: DayJob,
   },
   {
      name: 'Dismantle',
      type: types.move,
      tags: [],
      routeContent: 'One of the Machinist background moves.',
      component: Dismantle,
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
      name: 'Hearts and Minds',
      type: types.move,
      tags: [],
      routeContent: 'One of the moves in the Bard background.',
      component: HeartsAndMinds,
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
      name: 'Jury-Rig',
      type: types.move,
      tags: [],
      routeContent: 'One of the Machinist background moves.',
      component: JuryRig,
   },
   {
      name: 'Long Con',
      type: types.move,
      tags: [],
      routeContent: 'One of the Grifter background moves.',
      component: LongCon,
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
      name: 'Rabbit In The Hat',
      type: types.move,
      tags: [],
      routeContent: 'One of the Magician background moves.',
      component: RabbitInTheHat,
   },
   {
      name: 'Rally',
      type: types.move,
      tags: [],
      routeContent: 'One of the Marshal background moves.',
      component: Rally,
   },
   {
      name: 'Read Their Tell',
      type: types.move,
      tags: [],
      routeContent: 'One of the Gambler background moves.',
      component: ReadTheirTell,
   },
   {
      name: 'Respect My Authority',
      type: types.move,
      tags: [],
      routeContent: 'One of the Marshal background moves.',
      component: RespectMyAuthority,
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
      routeContent: 'One of the Fatale background moves.',
      component: Seduce,
   },
   {
      name: 'Seeking Solace',
      type: types.move,
      tags: [],
      routeContent: 'One of the Minister background moves.',
      component: SeekingSolace,
   },
   {
      name: 'Shield Charge',
      type: types.move,
      tags: [],
      routeContent: 'One of the Knight background moves.',
      component: ShieldCharge,
   },
   {
      name: 'Show \'em',
      type: types.move,
      tags: [],
      routeContent: 'One of the Gambler background moves.',
      component: ShowEm,
   },
   {
      name: 'Snipe',
      type: types.move,
      tags: [tags.basicMove, tags.skill],
      routeContent: 'The basic move using the Skill stat.',
      component: Snipe,
   },
   {
      name: 'Something Wrong Officer?',
      type: types.move,
      tags: [],
      routeContent: 'One of the Graverobber background moves.',
      component: SomethingWrongOfficer,
   },
   {
      name: 'Synthesis',
      type: types.move,
      tags: [],
      routeContent: 'One of the Chef background moves.',
      component: Synthesis,
   },
   {
      name: 'Template',
      type: types.move,
      tags: [],
      routeContent: 'a template example of a move',
      component: Template,
   },
   {
      name: 'Tendons',
      type: types.move,
      tags: [],
      routeContent: 'One of the Butcher background moves.',
      component: Tendons,
   },
   {
      name: 'Testudo',
      type: types.move,
      tags: [],
      routeContent: 'One of the Knight background moves.',
      component: Testudo,
   },
   {
      name: 'Track',
      type: types.move,
      tags: [],
      routeContent: 'One of the Hunter background moves.',
      component: Track,
   },
   {
      name: 'Understand Someone',
      type: types.move,
      tags: [tags.basicMove, tags.insight],
      routeContent: 'A basic move using the Insight stat.',
      component: UnderstandSomeone,
   },
   {
      name: 'Yarn',
      type: types.move,
      tags: [],
      routeContent: 'One of the Bard basic moves.',
      component: Yarn,
   },
];

// construct the paths for each move.
const formatPathVal = (pv) => pv.toLowerCase().replaceAll(' ', '_').replace(/[^a-zA-Z_]/g, '');;
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
