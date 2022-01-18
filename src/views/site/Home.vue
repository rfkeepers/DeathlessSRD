<!-- ============================== Script ============================== -->
<script setup>
import Options from '@/components/Options.vue';
</script>

<!-- ============================== Template ============================== -->
<template>
<h1 class="title">
    What Is Deathless?
</h1>
<div class="alert">
    <div class="loud">!</div> Development is on hiatus.  The game is minimally playable, but currently an ashcan.
</div>

Deathless is an Apocalypse Engine game about characters who bend themselves to faults and vice.
<br><br>
Players are deathless, cursed, allowed to die but never allowed to remain dead.  In this immortality they are both fragile and unstoppable.  Human, limited, yet uncontained.  Able to achieve anything so long as they have the will to do what's necessary.  The will, or perhaps in their worst moments, the callousness.

<h2>
    In this game:
</h2>
<div class="spaceAbove">
    <Options bullet="⇀" asHtml :options="[
        'The unnatural is a <em>reflection of humanity</em>.',
        'To do it, <em>you do it.</em>  The fiction leads the rules.',
        'We <em>stare ugliness in the eyes</em>, and confront terrible acts in the spotlight.',
        'Everyone <em>shares ownership of the story.</em>  We all play to find out what happens.',
    ]" />
</div>

<h3>
    It's not about heroics, power fantasy, or redemption.
</h3>
<div class="spaceAbove">
    <Options bullet="⇀" asHtml :options="[
        'The world is <em>hungry and cruel</em>.',
        '<em>Horrible people</em> have the power.',
        'Characters are <em>complicated</em>, real, and surprising.',
        'The players <em>lack</em> extraordinary power.',
    ]" />
</div>

<h3>
    TODO:
</h3>
The game is still a work in progress.  Some of the things I want to add or refine are:
<Options bullet="⇀" :options="[
    'Shifting stats and backgrounds.',
    'Tracking relationship states with npcs and between pcs.',
    'Secondary systems like: currency, travel, downtime, and designing npcs and threats.',
]" />

<h3>
    Pages that need to be written:
</h3>
Not in any particular order.
<Options bullet="⇀" :options="[
    'The abyss (remove)',
    'Safety (redo)',
    'Basic and secondary moves',
    'Scenes/spotlights in the conversation, maybe in the MC guide?',
    'NPC creation gude',
    'Personas',
    'Backgrounds',
    'Character generation guide',
    'Character sheet',
    'Quickstarts: hunting bait, duplicitous stewards of the meeting lords, and hounds of the baron',
]" />

<div style="display: none">
    Random notes to myself.

    How do I stop "you're a shitty person" from equating to "and a powerful one"?

    It's not the Abyss, it's 'WOES' (or anguish, or something similar).  And you do take it when you kill (and die?).  But you also take it "whenever you perform or are complicit in an act which crosses the line of a personal ethos" (like black bile).  Woes can be burned to enact terrible, powerful behavior.  At some point, instead of losing yourself, you have to contend with your woes.  How and when?  Well, that depends on the mechanic.  Maybe just when the bar tops off?  Maybe when you roll under?

    After introducing woes, I need to refactor how engaging with personas works.

    When you die, you don't lose your memories.  You have to face your woes/agony.  In facing them, you learn what persona you unlock/embody.

    Unlocking personas: When you die, you unlock the persona.  but you have to have a minimum of the abyss. every 2, stepping up.  So the first unlock requires at least two, the second 4, the third 6, etc.  (or, 0, 2, 4, 6, etc).

    the illusionists condition removal should be gaslighting, and their initial move should be that only one character sees the illusion, or the illusion is weak?  Is that too powerful for "I just save it for one person"?

    Okay, so, the Abyss is not a thing, or a place.  It's a <i>state</i>.  It's the suspension of nonliving.  This allows it to exist as it is, and also account for revision of woes.  You're not "going to a place" like the abyss.  We can still describe it as the sea underneath.  What's important is that while in the abyss, all you have is the reflection of your woes.  You have yourself and your feelings to contend with, in isolation.  Make the abyss a thing.  Make it a purgatory.  But make that purgatory about focusing on the character, not on some absurd fantastical sea.

    This is a webpage, right?  How about when you level up you need the page for "ask yourself a question".  And the answer is your playbook.  Ex. "level 1: If people in the world could truly see you, what would they see?" Then, "Someone in control, able to lead." > Dominion.  "Someone at the whim of the world, receptive to its state." > empath.  And that's how the choice goes.  At any time you may expend the experience to level up and choose a different answer.
</div>

</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
.alert {
    padding: 16px;
    margin-bottom: 32px;
    border: 1px solid $color-highlight;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $color-emphasis;
}
.loud  {
    color: $color-highlight-pop;
    font-weight: 500;
    font-size: 3em;
    line-height: 0.6em;
    padding-right: 4px;
    float: left;
}
</style>
