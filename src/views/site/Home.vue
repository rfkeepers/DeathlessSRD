<!-- ============================== Script ============================== -->
<script setup>
import Options from '@/components/Options.vue';
</script>

<!-- ============================== Template ============================== -->
<template>
<h1 class="title">
    What Is Deathless?
</h1>
<div class="quote">
    "Much like most video games, you don't have to be convinced to kill in Deathloop", Jacob Geller begins in his video essay <a href="https://youtu.be/dZrEayPIrVE">Time Loop Nihilism</a>.  "It introduces you to huge spectrum of ways you <i>could</i> murder, but it doesn't really need to convince you that you <i>should</i>."
</div>
<br>
Deathless is a Powered by the Apocalypse game about flawed characters who never stay dead.  Characters who are compelled, and rewarded, for bending to their faults and vices.  Who become the stains and viciousness of their own anguish.
<br><br>
Deathless was conceived as a reflection on the thrills of modern gaming.  The vocabulary of impulses triggered by red names and skill cooldowns.  The ux-sanctioned proof of good citizenship through item drops, critical hits, and victory fanfare.  All absent here.
<br><br>
It leaves you, the players and the MC, alone with the remainder: the brutality of what you are required to do to succeed, to pass beyond each obstacle.  Not to prove that you can.  Rather, as games often require, because in order to proceed, you must.

<h2>
    What Does It Want?
</h2>
Deathless is a game where:
<div class="spaceAbove">
    <Options bullet="⇀" asHtml :options="[
        '<em>Drama is more important than mechanics.</em>  Character interaction always takes the spotlight.',
        '<em>To do it, you do it.</em>  The rules bring context to the fiction, not abstract away the details.',
        '<em>We stare ugliness in the eyes.</em>  Terrible truth gets confronted in the spotlight.',
        '<em>The players and MC share ownership.</em>  We all play to find out what happens.',
    ]" />
</div>
<br>
It's not about heroics, power fantasy, or redemption.  The story thrives in a setting where:
<div class="spaceAbove">
    <Options bullet="⇀" asHtml :options="[
        'The world is <em>dangerous and cruel</em>.',
        '<em>Horrible people</em> are in control.',
        'Characters are <em>complicated</em>, real, and surprising.',
        'The players <em>lack</em> extraordinary power.',
        'The unnatural is a <em>reflection of humanity</em>.',
    ]" />
</div>

<h2>
    How Does It Play?
</h2>
Most of the structure follows standard PBTA tropes: playbooks and moves, with fiction and conversation at the forefront of play.  The differences are all within:
<div class="spaceAbove">
    <Options bullet="⇀" :options="[
        'Non-traditional playbooks.  Your starting moves come from terse Backgrounds.  In play, characters adopt Personas- transient personalities designed as tightly focused compendiums.',
        'Entanglements to bind the characters to their relationships.',
        'Compelling and Resistance mechanics that drive characters towads peril.',
        'No abstractions to handle combat.  Harm is a fluid expression for all violence, both physical and emotional.',
        'Player-vs-Player handling built into the system.',
    ]" />
</div>

<h2>
    Is It Finished?
</h2>
No, not at all.  The game is very much a work in progress.  Some of the things I want to add or refine are:
<Options bullet="⇀" :options="[
    'The core game is complete and playable, but many mechanics need refinement.',
    'The rolling changes (dice pool instead of 2d6) isn\'t quite there yet.  It has a decent base, but could use another layer.  And perhaps shifting stat values.',
    'Entanglements have a lot of refinement to go through before they find the right niche.',
    'Needs rules for tracking relationship states with npcs and between pcs.',
    'Rules are altogether absent for secondary systems like: currency, travel, downtime, and designing npcs and threats.',
]" />
<br><br>

<div>
    Todo:<br>
    1. rolling (partially done)<br>
    3. manifesto (partially done)<br>
    4. the abyss (in stats, reworking)<br>
    5. stats (basically done)<br>
    10. death<br>
    15. Basic and secondary moves<br>
    a. Redo the conversation to talk about how it flows: mc says, player says, etc<br>
    b. Scenes in the conversation.<br>
    c. A note about how, despite oppression, what "everyone knows" (as root puts it) is that your characters will move the world.<br>
    d. mc advice: scenes, spotlights<br>
    e. creating npcs<br>
    8. personas<br>
    16. rework backgrounds<br>
    17. backgrounds<br>
    18. rework something else<br>
    16. character generation<br>
    9. quickstarts: hunting bait, advisors, and hounds of the baron<br>

    <br><br>
    ideas and experiements:<br>
    1. how do I stop "you're a shitty person" from equating to "and a powerful one"?<br>
    2. It's not the Abyss, it's 'WOES' (or anguish, or something similar).  And you do take it when you kill (and die?).  But you also take it "whenever you perform or are complicit in an act which crosses the line of a personal ethos" (like black bile).  Woes can be burned to enact terrible, powerful behavior.  At some point, instead of losing yourself, you have to contend with your woes.  How and when?  Well, that depends on the mechanic.  Maybe just when the bar tops off?  Maybe when you roll under?<br>
    3. After introducing woes, I need to refactor how engaging with personas works.<br>
    4. When you die, you don't lose your memories.  You have to face your woes/agony.  In facing them, you learn what persona you unlock/embody.<br>
    5. Unlocking personas: When you die, you unlock the persona.  but you have to have a minimum of the abyss. every 2, stepping up.  So the first unlock requires at least two, the second 4, the third 6, etc.  (or, 0, 2, 4, 6, etc).<br>
    6. the illusionists condition removal should be gaslighting, and their initial move should be that only one character sees the illusion, or the illusion is weak?  Is that too powerful for "I just save it for one person"?<br>
    7. turn safety into its own page.<br>
    8. Okay, so, the Abyss is not a thing, or a place.  It's a <i>state</i>.  It's the suspension of nonliving.  This allows it to exist as it is, and also account for revision of woes.  You're not "going to a place" like the abyss.  We can still describe it as the sea underneath.  What's important is that while in the abyss, all you have is the reflection of your woes.  You have yourself and your feelings to contend with, in isolation.  Make the abyss a thing.  Make it a purgatory.  But make that purgatory about focusing on the character, not on some absurd fantastical sea.<br>

</div>

</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
.fancy {
    padding-bottom: 16px;

    &::first-letter {
        color: $color-text-sunk;
        font-weight: 500;
        font-size: 2em;
        line-height: 0.6em;
        padding-right: 1px;
        float: left;
    }
}
</style>
