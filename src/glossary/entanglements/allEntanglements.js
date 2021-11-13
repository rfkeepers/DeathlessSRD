import { types } from '@/glossary/consts.js';
import * as help from '@/glossary/helpers.js';

import Devotion from '@/glossary/entanglements/Devotion.vue';
import Grudge from '@/glossary/entanglements/Grudge.vue';
import Loyalty from '@/glossary/entanglements/Loyalty.vue';
import Obsession from '@/glossary/entanglements/Obsession.vue';

const entanglements = [
    {
        name: 'Devotion',
        type: types.entanglement,
        tags: [],
        routeContent: 'The Devotion entanglement.',
        component: Devotion,
    },
    {
        name: 'Grudge',
        type: types.entanglement,
        tags: [],
        routeContent: 'The Grudge entanglement.',
        component: Grudge,
    },
    {
        name: 'Loyalty',
        type: types.entanglement,
        tags: [],
        routeContent: 'The Loyalty entanglement.',
        component: Loyalty,
    },
    {
        name: 'Obsession',
        type: types.entanglement,
        tags: [],
        routeContent: 'The Obsession entanglement.',
        component: Obsession,
    },
];

help.addRouting(entanglements);
const entanglementConsts = help.reduceToConsts(entanglements);
export { entanglements, entanglementConsts };