<!-- ============================== Script ============================== -->
<script setup>
import Options from '@/components/Options.vue';
</script>

<!-- ============================== Template ============================== -->
<template>
<h1 class="title">
    What Is Deathless?
</h1>
Deathless is a work-in-progress pbta about flawed characters who never stay dead.  It explores compulsions towards bad behavior, relationships that tether, and the inevitable entropy of unconstrained behavior.
<br><br>
The players endure the loop between their Entanglements and the Abyss.  The Abyss marks the drift towards madness, the inescapable loss of self in the transition between life and death and life again.  In response, Entanglements reel them back from the brink, into the bindings of joys and pains which only the living may suffer.
<br><br>
Through it all the characters will get compelled, and rewarded, for bending to their faults and vices.  Slipping deeper into the Abyss offers power, but power reveals foibles and viciousness.  The only way to succeed, to stay human, is to rise above your failings.

<h2 class="title">
    What Here Is Useful or Interesting?
</h2>
Deathless is designed to encourage a specifc kind of play, driven by the following principles:
<div class="spaceAbove">
    <Options bullet="⇀" indent asHtml :options="[
        '<em>Drama is more important than verisimilitude.</em>  Character interaction always takes the spotlight.',
        '<em>To do it, you do it.</em>  The rules bring context to the fiction, not abstract away the details.',
        '<em>We stare ugliness in the eyes.</em>  What is terrible should be confronted, not hidden.',
        '<em>The players and MC share ownership.</em>  We all play to find out what happens.',
    ]" />
</div>
<br>
Likewise, the game does not try to accomodate every story.  Deathless thrives in a setting where:
<div class="spaceAbove">
    <Options bullet="⇀" indent asHtml :options="[
        'The world is <em>dangerous and cruel</em>.',
        '<em>Horrible people</em> are in control.',
        'Characters are <em>complicated</em>, real, and surprising.',
        'The players\' characters <em>lack</em> extraordinary power.',
        'The unnatural is a <em>reflection of humanity</em>.',
    ]" />
</div>

<h2 class="title">
    What Here Is Unexpected?
</h2>
Much of the game is a normal PBTA: moves, mc principles, conditions, an rolling with your stats with fiction and conversation at the forefront of play.  The rest varies in small or great ways.
<div class="spaceAbove">
    <Options bullet="⇀" indent :options="[
        'Non-traditional playbooks.  Your starting moves come from terse Backgrounds.  In play, characters adopt Personas- transient personalities designed as tightly focused compendiums of moves.',
        'Entanglements to bind the characters to their relationships.',
        'Compelling and Resistance mechanics that drive characters towads peril.',
        'No abstractions to handle combat.  Harm is a fluid expression for all violence, both physical and emotional.',
        'Player-vs-Player handling built into the system.',
    ]" />
</div>

<h2 class="title">
    What Here Is Unfinished?
</h2>
<Options bullet="⇀" indent :options="[
    'The core game is complete and playable, but many mechanics need refinement.',
    'The rolling changes (dice pool instead of 2d6) isn\'t quite there yet.  It has a decent base, but could use another layer.  And perhaps shifting values.',
    'Entanglements have a lot of refinement to go through before they find the right niche.',
    'Needs rules for tracking relationship states with npcs.',
    'Rules are altogether absent for secondary systems like: currency, travel, downtime, and designing npcs and threats.',
    'No setting details are present.  Deathless isn\'t intended to require a setting, but having a foundation that adds context for its tone and behavior can help readers grok the intended game.  Too much abstraction hooks nobody.',
    'Oh, and it lacks playtesting. Like, at all.',
]" />
<br><br>

<div>
    Todo:<br>
    1. rolling (partially done)<br>
    3. manifesto (partially done)<br>
    4. the abyss (in stats, reworking)<br>
    5. stats (basically done)<br>
    10. death (basically done)<br>
    11. game overview (basically done)<br>
    12. MC<br>
    13. Safety<br>
    14. Harm, injury, conditions<br>
    15. Basic and secondary moves<br>
    8. personas<br>
    16. rework backgrounds<br>
    17. backgrounds<br>
    18. rework something else<br>
    16. character generation<br>
    9. quickstarts: hunting bait, advisors, and something else<br>

    <br><br>
    ideas and experiements:<br>
    1. how do I stop "you're a shitty person" from equating to "and a powerful one"?<br>
    2. It's not the Abyss, it's 'WOES' (or anguish, or something similar).  And you do take it when you kill (and die?).  But you also take it "whenever you perform or are complicit in an act which crosses the line of a personal ethos" (like black bile).  Woes can be burned to enact terrible, powerful behavior.  At some point, instead of losing yourself, you have to contend with your woes.  How and when?  Well, that depends on the mechanic.  Maybe just when the bar tops off?  Maybe when you roll under?<br>
    3. After introducing woes, I need to refactor how engaging with personas works.<br>
    4. When you die, you don't lose your memories.  You have to face your woes/agony.  In facing them, you learn what persona you unlock/embody.
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
