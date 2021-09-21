import Components from '@/glossary/components.js';
import { entries, types } from '@/glossary/consts.js';

const metaMaker = e => ({
    title: `${e.name} - ${e.type}`,
    tags: [
        {
            name: 'description',
            content: e.routeContent,
        },
    ],
});

const componentFinder = e => {
    let type = {};
    switch (e.type) {
    case types.move:
        type = Components.Moves;
        break;
    case types.background:
        type = Components.Backgrounds;
        break;
    };
    const k = Object.keys(type).find(k => k === e.name.replaceAll(' ', ''));
    return type[k];
};

const entryRoutes = entries.map(e => ({
    name: e.name,
    path: e.path.substring(1),
    meta: metaMaker(e),
    component: componentFinder(e),
}));

const routes = [
    {
        path: 'move/template',
        name: 'move template',
        component: Components.Moves.Template,
    },
    {
        path: 'background/template',
        name: 'background template',
        component: Components.Backgrounds.Template,
    },
    ...entryRoutes,
];

export default routes;