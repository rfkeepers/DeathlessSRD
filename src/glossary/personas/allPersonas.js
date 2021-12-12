import { types } from '@/glossary/consts.js';
import * as help from '@/glossary/helpers.js';

import Chameleon from '@/glossary/personas/Chameleon.vue';
import Dominion from '@/glossary/personas/Dominion.vue';
import Empath from '@/glossary/personas/Empath.vue';
import Glutton from '@/glossary/personas/Glutton.vue';
import Illusionist from '@/glossary/personas/Illusionist.vue';
import Martyr from '@/glossary/personas/Martyr.vue';
import Pyro from '@/glossary/personas/Pyro.vue';
import Shadewalker from '@/glossary/personas/Shadewalker.vue';
import Sightseer from '@/glossary/personas/Sightseer.vue';
import Venom from '@/glossary/personas/Venom.vue';
import Witch from '@/glossary/personas/Witch.vue';

const personas = [
    {
        name: 'Chameleon',
        type: types.persona,
        tags: [],
        routeContent: 'The Chameleon persona.',
        component: Chameleon,
    },
    {
        name: 'Dominion',
        type: types.persona,
        tags: [],
        routeContent: 'The Dominion persona.',
        component: Dominion,
    },
    {
        name: 'Empath',
        type: types.persona,
        tags: [],
        routeContent: 'The Empath persona.',
        component: Empath,
    },
    {
        name: 'Glutton',
        type: types.persona,
        tags: [],
        routeContent: 'The Glutton persona.',
        component: Glutton,
    },
    {
        name: 'Illusionist',
        type: types.persona,
        tags: [],
        routeContent: 'The Illusionist persona.',
        component: Illusionist,
    },
    {
        name: 'Martyr',
        type: types.persona,
        tags: [],
        routeContent: 'The Martyr persona.',
        component: Martyr,
    },
    {
        name: 'Pyro',
        type: types.persona,
        tags: [],
        routeContent: 'The Pyro persona.',
        component: Pyro,
    },
    {
        name: 'Shadewalker',
        type: types.persona,
        tags: [],
        routeContent: 'The Shadewalker persona.',
        component: Shadewalker,
    },
    {
        name: 'Sightseer',
        type: types.persona,
        tags: [],
        routeContent: 'The Sightseer persona.',
        component: Sightseer,
    },
    {
        name: 'Venom',
        type: types.persona,
        tags: [],
        routeContent: 'The Venom persona.',
        component: Venom,
    },
    {
        name: 'Witch',
        type: types.persona,
        tags: [],
        routeContent: 'The Witch persona.',
        component: Witch,
    },
];

help.addRouting(personas);
const personaConsts = help.reduceToConsts(personas);
export { personas, personaConsts };