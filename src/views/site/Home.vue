<!-- ============================== Script ============================== -->
<script setup>
import Options from '@/components/Options.vue';
</script>

<!-- ============================== Template ============================== -->
<template>
<h1 class="title">
    <b>What Is Deathless?</b>
</h1>
Deathless is a work-in-progress pbta about flawed characters who never stay dead.  It explores compulsions towards bad behavior, relationships that tether, and the inevitable entropy of the dieing mind.
<br><br>
The players endure the loop between their Entanglements and the Abyss.  The Abyss marks the drift towards madness, the inescapable loss of self in the transition between life and death and life again.  In response, Entanglements reel them back from the brink, into the bindings of joys and pains which only the living may suffer.
<br><br>
Through it all the characters will get compelled, and rewarded, for bending to their faults and vices.  Slipping deeper into the Abyss offers power, but power reveals foibles and viciousness.  The only way to succeed, to stay human, is to rise above your failings.

<h2 class="title">
    <b>What Here Is Useful or Interesting?</b>
</h2>
Deathless is designed to encourage a specifc kind of play, driven by the following principles:
<div class="blurb spaceAbove">
    <Options bullet="⇀" asHtml :options="[
        '<em>Drama is more important than verisimilitude.</em>  Character interaction always takes the spotlight.',
        '<em>Relationships precede combat mechanics.</em>  Words and knives both cut deep.',
        '<em>The players and MC share ownership.</em>  We all play to find out what happens.',
        '<em>Stare ugliness in the eyes.</em>  What is terrible should be confronted, not hidden.',
    ]" />
</div>
<br>
Likewise, the game does not try to accomodate every story.  Deathless thrives in a setting where:
<div class="blurb spaceAbove">
    <Options bullet="⇀" asHtml :options="[
        'The world is <em>dangerous and cruel</em>.',
        '<em>Horrible people</em> are in control.',
        'Characters are <em>complicated</em>, real, and surprising.',
        'The players\' characters <em>lack</em> extraordinary power.',
        'The unnatural is a <em>reflection of humanity</em>.',
    ]" />
</div>

<h2 class="title">
    <b>What Here Is Unexpected?</b>
</h2>
Much of the game is a normal PBTA: moves, mc principles, conditions, an rolling with your stats with fiction and conversation at the forefront of play.  The rest varies in small or great ways.
<div class="blurb spaceAbove">
    <Options bullet="⇀" :options="[
        'Non-traditional playbooks.  Your starting moves come from terse Backgrounds.  In play, characters adopt Attunements- transient personas designed as tightly focused compendiums of moves.',
        'Entanglements to bind the characters to their relationships.',
        'Compelling and Resistance mechanics that drive characters towads peril.',
        'No abstractions to handle combat.  Harm is a fluid expression for all violence, both physical and emotional.',
        'Player-vs-Player handling built into the system.',
    ]" />
</div>

<h2 class="title">
    <b>What Here Is Unfinished?</b>
</h2>
<div class="blurb">
    <Options bullet="⇀" :options="[
        'The core game is complete and playable, but many mechanics need refinement.',
        'The rolling changes (dice pool instead of 2d6) isn\'t quite there yet.  It has a decent base, but could use another layer.  And perhaps shifting values.',
        'Entanglements have a lot of refinement to go through before they find the right niche.',
        'Rules are altogether absent for secondary systems like: currency, travel, downtime, and designing npcs and threats.',
        'Attunement personas need to be renamed abyss personas, and stratified into early and later tiers (high cost and benefit in the higher tier).',
        'No setting details are present.  Deathless isn\'t intended to require a setting, but having a foundation that adds context for its tone and behavior can help readers grok the intended game.  Too much abstraction hooks nobody.',
        'Oh, and it lacks playtesting. Like, at all.',
    ]" />
</div>
<br><br>

<div>
    Todo:<br>
    1. rolling (partially done)<br>
    3. manifesto<br>
    4. the abyss<br>
    5. stats<br>
    6. character generation<br>
    7. backgrounds<br>
    8. personas<br>
    9. quickstarts: bait, advisors, something else<br>
    10. death<br>
    11. game overview<br>
    12. MC<br>
    13. Safety<br>
    14. Harm, injury, conditions<br>
    15. Basic and secondary moves<br>
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
