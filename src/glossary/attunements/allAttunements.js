import { types } from '@/glossary/consts.js';
import * as help from '@/glossary/helpers.js';

import Chameleon from '@/glossary/attunements/Chameleon.vue';
import Dominion from '@/glossary/attunements/Dominion.vue';
import Empath from '@/glossary/attunements/Empath.vue';
import Glutton from '@/glossary/attunements/Glutton.vue';
import Illusionist from '@/glossary/attunements/Illusionist.vue';
import Martyr from '@/glossary/attunements/Martyr.vue';
import Pyro from '@/glossary/attunements/Pyro.vue';
import Shadewalker from '@/glossary/attunements/Shadewalker.vue';
import Sightseer from '@/glossary/attunements/Sightseer.vue';
import Template from '@/glossary/attunements/Template.vue';
import Venom from '@/glossary/attunements/Venom.vue';
import Witch from '@/glossary/attunements/Witch.vue';

const attunements = [
    {
        name: 'Chameleon',
        type: types.attunement,
        tags: [],
        routeContent: 'The Chameleon attunement.',
        component: Chameleon,
    },
    {
        name: 'Dominion',
        type: types.attunement,
        tags: [],
        routeContent: 'The Dominion attunement.',
        component: Dominion,
    },
    {
        name: 'Empath',
        type: types.attunement,
        tags: [],
        routeContent: 'The Empath attunement.',
        component: Empath,
    },
    {
        name: 'Glutton',
        type: types.attunement,
        tags: [],
        routeContent: 'The Glutton attunement.',
        component: Glutton,
    },
    {
        name: 'Illusionist',
        type: types.attunement,
        tags: [],
        routeContent: 'The Illusionist attunement.',
        component: Illusionist,
    },
    {
        name: 'Martyr',
        type: types.attunement,
        tags: [],
        routeContent: 'The Martyr attunement.',
        component: Martyr,
    },
    {
        name: 'Pyro',
        type: types.attunement,
        tags: [],
        routeContent: 'The Pyro attunement.',
        component: Pyro,
    },
    {
        name: 'Shadewalker',
        type: types.attunement,
        tags: [],
        routeContent: 'The Shadewalker attunement.',
        component: Shadewalker,
    },
    {
        name: 'Sightseer',
        type: types.attunement,
        tags: [],
        routeContent: 'The Sightseer attunement.',
        component: Sightseer,
    },
    {
        name: 'Template',
        type: types.attunement,
        tags: [],
        routeContent: 'The Template attunement.',
        component: Template,
    },
    {
        name: 'Venom',
        type: types.attunement,
        tags: [],
        routeContent: 'The Venom attunement.',
        component: Venom,
    },
    {
        name: 'Witch',
        type: types.attunement,
        tags: [],
        routeContent: 'The Witch attunement.',
        component: Witch,
    },
];

help.addRouting(attunements);
const attunementConsts = help.reduceToConsts(attunements);
export { attunements, attunementConsts };