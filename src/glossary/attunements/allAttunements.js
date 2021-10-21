import { types } from '@/glossary/consts.js';
import * as help from '@/glossary/helpers.js';

// import Bard from '@/glossary/attunements/Bard.vue';

const attunements = [
    // {
    //     name: 'Bard',
    //     type: types.attunement,
    //     tags: [],
    //     routeContent: 'The Bard background.',
    //     component: Bard,
    // },
];

help.addRouting(attunements);
const attunementConsts = help.reduceToConsts(attunements);
export { attunements, attunementConsts };