import { types } from '@/glossary/consts.js';

import Bard from '@/glossary/backgrounds/Bard.vue';
import Butcher from '@/glossary/backgrounds/Butcher.vue';
import Chef from '@/glossary/backgrounds/Chef.vue';
import Constable from '@/glossary/backgrounds/Constable.vue';
import Fatale from '@/glossary/backgrounds/Fatale.vue';
import Gambler from '@/glossary/backgrounds/Gambler.vue';
import Graverobber from '@/glossary/backgrounds/Graverobber.vue';
import Grifter from '@/glossary/backgrounds/Grifter.vue';
import Hunter from '@/glossary/backgrounds/Hunter.vue';
import Knight from '@/glossary/backgrounds/Knight.vue';
import Machinist from '@/glossary/backgrounds/Machinist.vue';
import Magician from '@/glossary/backgrounds/Magician.vue';
import Minister from '@/glossary/backgrounds/Minister.vue';
import Ritualist from '@/glossary/backgrounds/Ritualist.vue';
import Scholar from '@/glossary/backgrounds/Scholar.vue';
import Smithy from '@/glossary/backgrounds/Smithy.vue';
import Smuggler from '@/glossary/backgrounds/Smuggler.vue';
import Tactician from '@/glossary/backgrounds/Tactician.vue';
import Thief from '@/glossary/backgrounds/Thief.vue';
import Trapper from '@/glossary/backgrounds/Trapper.vue';
import WealthyElite from '@/glossary/backgrounds/WealthyElite.vue';
import Wrestler from '@/glossary/backgrounds/Wrestler.vue';

const backgrounds = [
    {
        name: 'Bard',
        type: types.background,
        tags: [],
        routeContent: 'The Bard background.',
        component: Bard,
    },
    {
        name: 'Butcher',
        type: types.background,
        tags: [],
        routeContent: 'The Butcher background.',
        component: Butcher,
    },
    {
        name: 'Chef',
        type: types.background,
        tags: [],
        routeContent: 'The Chef background.',
        component: Chef,
    },
    {
        name: 'Constable',
        type: types.background,
        tags: [],
        routeContent: 'The Constable background.',
        component: Constable,
    },
    {
        name: 'Fatale',
        type: types.background,
        tags: [],
        routeContent: 'A life having used your charms to get what you want.',
        component: Fatale,
    },
    {
        name: 'Gambler',
        type: types.background,
        tags: [],
        routeContent: 'The Gambler background.',
        component: Gambler,
    },
    {
        name: 'Graverobber',
        type: types.background,
        tags: [],
        routeContent: 'The Graverobber background.',
        component: Graverobber,
    },
    {
        name: 'Grifter',
        type: types.background,
        tags: [],
        routeContent: 'The Grifter background.',
        component: Grifter,
    },
    {
        name: 'Hunter',
        type: types.background,
        tags: [],
        routeContent: 'The Hunter background.',
        component: Hunter,
    },
    {
        name: 'Knight',
        type: types.background,
        tags: [],
        routeContent: 'The Knight background.',
        component: Knight,
    },
    {
        name: 'Machinist',
        type: types.background,
        tags: [],
        routeContent: 'The Machinist background.',
        component: Machinist,
    },
    {
        name: 'Magician',
        type: types.background,
        tags: [],
        routeContent: 'The Magician background.',
        component: Magician,
    },
    {
        name: 'Minister',
        type: types.background,
        tags: [],
        routeContent: 'The Minister background.',
        component: Minister,
    },
    {
        name: 'Ritualist',
        type: types.background,
        tags: [],
        routeContent: 'The Ritualist background.',
        component: Ritualist,
    },
    {
        name: 'Scholar',
        type: types.background,
        tags: [],
        routeContent: 'The Scholar background.',
        component: Scholar,
    },
    {
        name: 'Smithy',
        type: types.background,
        tags: [],
        routeContent: 'The Smithy background.',
        component: Smithy,
    },
    {
        name: 'Smuggler',
        type: types.background,
        tags: [],
        routeContent: 'The Smuggler background.',
        component: Smuggler,
    },
    {
        name: 'Tactician',
        type: types.background,
        tags: [],
        routeContent: 'The Tactician background.',
        component: Tactician,
    },
    {
        name: 'Thief',
        type: types.background,
        tags: [],
        routeContent: 'The Thief background.',
        component: Thief,
    },
    {
        name: 'Trapper',
        type: types.background,
        tags: [],
        routeContent: 'The Trapper background.',
        component: Trapper,
    },
    {
        name: 'Wealthy Elite',
        type: types.background,
        tags: [],
        routeContent: 'The Wealthy Elite background.',
        component: WealthyElite,
    },
    {
        name: 'Wrestler',
        type: types.background,
        tags: [],
        routeContent: 'The Wrestler background.',
        component: Wrestler,
    },
];
 
// construct the paths for each entry.
const formatPathVal = (pv) => pv.toLowerCase().replaceAll(' ', '_');
const makePath = ({ type, name }) => `/${formatPathVal(type)}/${formatPathVal(name)}`;
const makeMeta = ({ name, routeContent, type }) => ({
    title: `${name} - ${type}`,
    tags: [{
        name: 'description',
        content: routeContent, 
    }],
});
backgrounds.forEach(b => {
    b.path = makePath(b);
    b.meta = makeMeta(b);
});

const backgroundConsts = backgrounds.map(b => ({
    name: b.name,
    path: b.path,
    type: b.type,
    tags: b.tags,
}));

export { backgrounds, backgroundConsts };