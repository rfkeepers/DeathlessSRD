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
    move: 'move',
    background: 'background',
};

const entries = [
    // --------- moves
    {
       name: 'whelm',
       type: types.move,
       tags: [tags.basicMove, tags.force],
    },
    {
       name: 'snipe',
       type: types.move,
       tags: [tags.basicMove, tags.skill],
    },
    {
       name: 'understand someone',
       type: types.move,
       tags: [tags.basicMove, tags.insight],
    },
    {
       name: 'find an opportunity',
       type: types.move,
       tags: [tags.basicMove, tags.insight],
    },
    {
       name: 'stare into the abyss',
       type: types.move,
       tags: [tags.basicMove, tags.abyss],
    },
    {
       name: 'persuade',
       type: types.move,
       tags: [tags.basicMove, tags.glamour],
    },
    {
       name: 'intervene',
       type: types.move,
       tags: [tags.basicMove, tags.resolve],
    },
    {
       name: 'have a moment',
       type: types.move,
       tags: [tags.basicMove],
    },
    {
        name: 'seduce',
        type: types.move,
        tags: ['fatale'],
    },
    // --------- backgrounds
    {
        name: 'fatale',
        type: types.background,
        tags: [],
    },
    {
        name: 'something I once did so very long ago',
        type: types.background,
        tags: [],
    },
];

export { entries, tags, types };