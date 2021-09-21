const tags = {
    basicMove: 'basic_move',
    force: 'force',
    skill: 'skill',
    glamour: 'glamour',
    resolve: 'resolve',
    insight: 'insight',
    abyss: 'abyss',
};

const types = {
    move: 'Move',
    background: 'Background',
};

const entries = [
   // --------- moves
   {
      name: 'Find An Opening',
      type: types.move,
      tags: [tags.basicMove, tags.insight],
      routeContent: 'A basic move using the Insight stat.',
   },
   {
      name: 'Find Respite',
      type: types.move,
      tags: [tags.basicMove],
      routeContent: 'The basic move for sharing a moment with someone.',
   },
   {
      name: 'Gaze Into The Abyss',
      type: types.move,
      tags: [tags.basicMove, tags.abyss],
      routeContent: 'The basic move using the Abyss stat.',
   },
   {
      name: 'Intervene',
      type: types.move,
      tags: [tags.basicMove, tags.resolve],
      routeContent: 'The basic move using the Resolve stat.',
   },
   {
      name: 'template',
      type: types.move,
      tags: [],
      routeContent: 'a template example of a move',
   },
   {
      name: 'Overwhelm',
      type: types.move,
      tags: [tags.basicMove, tags.force],
      routeContent: 'The basic move using the Force stat.',
   },
   {
      name: 'Persuade',
      type: types.move,
      tags: [tags.basicMove, tags.glamour],
      routeContent: 'The basic move using the Glamour stat.',
   },
   {
      name: 'Seduce',
      type: types.move,
      tags: ['Fatale'],
      routeContent: 'A move granted by the Fatale Background.',
   },
   {
      name: 'Snipe',
      type: types.move,
      tags: [tags.basicMove, tags.skill],
      routeContent: 'The basic move using the Skill stat.',
   },
   {
      name: 'Understand Someone',
      type: types.move,
      tags: [tags.basicMove, tags.insight],
      routeContent: 'A basic move using the Insight stat.',
   },
   // --------- backgrounds
   {
      name: 'Fatale',
      type: types.background,
      tags: [],
      routeContent: 'A live having used your charms to get what you want.',
   },
];

// construct the paths for each entry.
const formatPathVal = (pv) => pv.toLowerCase().replaceAll(' ', '_');
const makePath = (type, name) => `/${formatPathVal(type)}/${formatPathVal(name)}`;
entries.forEach(e => e.path = makePath(e.type, e.name));

export { entries, tags, types };