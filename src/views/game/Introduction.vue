<template>
    <div id="introduction" class="introduction">
        <h1>Introduction</h1>
        <paragraph
            content="This situation you’re in, it’s all because you died.  Everyone dies, you suppose, but not everyone comes back afterward.  You did.  And you can’t help but wonder if that particular death was the cause.  The where and how of it didn’t seem so special.  About as ordinary as death goes, just a little earlier in life than you expected.  So was it something else: something you ate, or a sickness, a curse, a miracle?"
        ></paragraph>
        <paragraph
            content="A plague on it.  Doesn’t matter much now that you’re back.  Back and shunned by all.  Hauled out of your own home by your friends and neighbors, with not even the decency to turn your child’s face away as they dragged your heels down the street, threw you from town and told you to never return.  You knew it would go that way.  As a child you listened to stories about the deathless, how they sneak into town at night to sup on blood and infect the good of a town, how people must defend themselves when someone crawls back out of a grave.  You could’ve just stayed away."
        ></paragraph>
        <paragraph
            content="But could you have stayed away, really?  You’re no monster, no horror.  It’s just you.  Tired without sleep, hungry without food, bleeding when cut, joyous and relieved to open the door and see your hearth and home… every bit like it used to be.  Why shouldn’t you get to come home again and embrace your child and sup with your family and sleep in your bed?  Stories be damned, they should have welcomed you back with joy!  Not dead after all, right as can be, aren’t we all lucky!?  They could have given you a chance."
        ></paragraph>
        <h1>What is Deathless about?</h1>
        <paragraph
            content="At the core of this game is a simple principle: the players’ characters cannot die.  Or, at least, they cannot die permanently.  Like any normal person, they experience all the pain and horror and helplessness of death.  Then they spring back to life again to carry on where they left off.  It is not superhuman qualities of strength or ability which set them apart from other characters in this game, just that pernicious quality of living through everything, no matter how terrible."
        ></paragraph>
        <h1>Why make a game without death?</h1>
        <paragraph
            content="Because video games have normalized death for us.  In most cases without realizing it.  Try, die, try again, die again, but die better.  Over and over.  That loop may be iconic of series like Dark Souls, but the design has been standard since the arcades of the 80’s.  You might not think of Galaga or Mario or Counter:Strike as death treadmills, but that’s what they are.  The pattern isn’t simply normal, it’s an expectation, a dependency."
        ></paragraph>
        <paragraph
            content="Tabletop games, when they’re not trying to imitate rogue-likes, tend to avoid death at all costs.  Not without reason: death doesn’t kill a character, it kills stories.  It reaps aspirations and goals and relationships. Players come to the table for months, discovering their own character and relationships little by little, and the punishment for that effort is to have it all burned on a bad roll.  Worse yet, while we always hope for the death of a character to be glorious, most often it’s just anticlimactic."
        ></paragraph>
        <paragraph
            content="I wanted Deathless to find the middle ground.  Die, but keep your character sheet.  Kill the party, but continue pushing their story.  Throw yourself at difficulty, and when you fail, try again.  A character that cannot die is an unstoppable force.  So long as they preserve the will to carry on.  Like Dark Souls, it’s not death you should fear, it’s hollowing; that final pain of effort where you can’t take it any longer, and you put it away."
        ></paragraph>
        <paragraph
            content="I also want Deathless to be more than just pbta without death.  There are plenty of games, video games notwithstanding, which already handle the “now try again” treadmill beautifully.  Ultimately the game isn’t about the absence of death, despite its conceit.  It’s about what it means to live around that absence.  How storytelling changes when the players and MC shift their focus away from, 'can we risk it?', towards, 'what happens when we do it?'  Or, just as interestingly, 'what happens when we fail to do it?'"
        ></paragraph>
    </div>
</template>

<script>
import header from '@/components/Header.vue'
import paragraph from '@/components/Paragraph.vue'

const introduction = {
    name: 'introduction',
    props: {},
    data() { return {
    }; },
    created() {},
    methods: {},
    computed: {},
    watch: {},
    components: {
        header,
        paragraph,
    },
};

export default introduction;
</script>

<style scoped lang="scss">
.introduction {
}
</style>