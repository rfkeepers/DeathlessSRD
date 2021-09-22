import { tags, types } from '@/glossary/consts.js';

import Template from '@/glossary/backgrounds/Template.vue';
import Fatale from '@/glossary/backgrounds/Fatale.vue';

const backgrounds = [
    {
        name: 'Fatale',
        type: types.background,
        tags: [],
        routeContent: 'A life having used your charms to get what you want.',
        component: Fatale,
    },
    {
        name: 'Template',
        type: types.background,
        tags: [],
        routeContent: 'The template component for a background',
        component: Template,
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