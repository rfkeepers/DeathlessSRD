<!-- ============================== Script ============================== -->
<script setup>
import Options from '@/components/Options.vue';
const props = defineProps({
    foo: {
        type: Boolean,
        description: "foo prop."
    }
});
</script>

<!-- ============================== Template ============================== -->
<template>
<h1 class="title">Manifesto</h1>
You see, the game has an agenda, and to get the most out of it, you need to play it that way.

<h2>Player Agendas</h2>
<blurb>
    <Options bullet="⇀" :options="[
        'Play a real person: flawed, engaged, and aware.',
        'Instigate the change you want in the world.',
        'Get tangled up in everyone\'s business.',
    ]" />
</blurb>
<br>
As a player, you want to sync up with the themes and expectations of the game, or else you'll end up fighting with it.
<br>

<h4>Play a real person: flawed, engaged, and aware.</h4>
<div class="leftLined">
    That means not being a cartoon murderhobo.
</div>

<h4>Instigate the change you want in the world.</h4>
<div class="leftLined">
    Because unless you do the things you want to do, nothing happens.  This is a really weak agenda.  What am I actually asking here?  The change you want?  This implies two things: first, that the world is in need of change, and second that you need the change as well.  But that presupposes lots of properties about things.  Hmmm.
</div>

<h4>Get tangled up in everyone's business.</h4>
<div class="leftLined">
    Fuck'n, just, like, get in there, bitches.
</div>
<br>

<h2>Player Principles</h2>
<blurb>
    <Options bullet="⇀" :options="[
        'Save yourself by saving others.',
        'Appreciate the fragility of good connections.',
        'Don\'t be afraid to make different commitments than your fellow players.',
        'Embrace all consequences.',
    ]" />
</blurb>
<br>

<hr>
<br>

<h2>MC Principles in PBTA</h2>
<blurb>
    <Options bullet="⇀" :options="[
        'Begin with the fiction.',
        'Address the characters before the players.',
        'Ask questions and wield the answers.',
        'Give every character a name, need, and drives.',
        'Tell players the requirements or consequences, then ask, \'what do you do?\'.',
        'End with the fiction.',
    ]" />
</blurb>
<br>

<h2>MC Principles in Deathless</h2>
<blurb>
    <Options bullet="⇀" :options="[
        'Fill the story with frequent strife and rare relief.',
        'Make the people in the world real, complicated, and worth meeting.',
        'Deal in costly decisions, misfortune, and trouble that always comes looking.',
        'Give nothing away freely.',
        'Make fraught situations deadly.',
        'Entangle the PCs in relationships that leave barbed hooks in their hearts.',
        'Use the unnatural to talk about the human.',
        'Pursue accountability for the actions commmitted.',
        'Use the characters\' failures as leverage to change the world.',
    ]" />
</blurb>
<br>

<hr>
<br>

<h2>The Master of Ceremony's Agenda</h2>
<blurb>
    <Options bullet="⇀" :options="[
        'Portray the world as an oppressive machine with dissenting cogs.',
        'Fill the PCs lives with dramatic motivation.',
        'Play to find out what happens.',
    ]" />
</blurb>
<br>

<h2>The MC's Moves</h2>
<blurb>
    <Options bullet="⇀" :options="[
        'Reveal an unwelcome truth',
        'Turn safety to danger',
        'Make their move cause more trouble than it solves',
        'Harm them with pain, insult, or injury',
        'Kill someone',
        'Remind them of their place in the world',
        'Compel them to complicate the situation',
        'Manipulate loyalties',
        'Destroy resources',
        'Tug at the strings of Entanglements',
        'Turn them against each other',
        'Advance an antagonist\'s agenda, on or offscreen',
        'Offer a painful opportunity',
    ]" />
</blurb>
<br><br>

<!-- <h2>Player Agendas:</h2>
<Options bullet="⇀" :options="[
    'Play a real person: flawed, engaged, and aspiring.',
    'Instigate the change you want in the world.',
    'Get tangled up in everyone\'s business.',
]" />
<br>
<h3 class="lineTo indent">Play a real person: flawed, engaged, and aspiring.</h3>
<blurb>
    yea do it
</blurb>
<br>
<h2>Player Principles:</h2>
<Options bullet="⇀" :options="[
    'Embrace the drama.',
    'Save your character by saving others.',
    'Appreciate the fragility of good connections.',
    'Don\'t be afraid to make different commitments than your fellow players.',
    'Fear no risks, embrace all consequences.',
]" />
<br>
<blurb>

</blurb>
<hr>
<br>
<h2>MC Principles in PBTA:</h2>
<Options bullet="⇀" :options="[
    'Begin with the fiction.',
    'Address the characters before the players.',
    'Ask questions and wield the answers.',
    'Give every character a name, need, and drives.',
    'Tell players the requirements or consequences, then ask, \'what do you do?\'.',
    'End with the fiction.',
]" />
<br>
<h2>MC Principles in Deathless:</h2>
<Options bullet="⇀" :options="[
    'Fill the story with frequent strife and rare relief.',
    'Make the people in the world real, complicated, and worth meeting.',
    'Deal in costly decisions, misfortune, and trouble that always comes looking.',
    'Give nothing away freely.',
    'Make fraught situations deadly.',
    'Entangle the PCs in relationships that leave barbed hooks in their hearts.',
    'Use the unnatural to talk about the human.',
    'Pursue accountability for the actions commmitted.',
    'Use the characters\' failures as leverage to change the world.',
]" />
<br>
<hr>
<br>
<h2>MC Agenda:</h2>
<Options bullet="⇀" :options="[
    'Portray the world as an oppressive machine with dissenting cogs.',
    'Fill the PCs lives with dramatic motivation.',
    'Play to find out what happens.',
]" />
<br>
<h2>MC Moves:</h2>
<Options bullet="⇀" :options="[
    'Reveal an unwelcome truth',
    'Turn safety to danger',
    'Make their move cause more trouble than it solves',
    'Harm them with pain, insult, or injury',
    'Kill someone',
    'Remind them of their place in the world',
    'Compel them to complicate the situation',
    'Manipulate loyalties',
    'Destroy resources',
    'Tug at the strings of Entanglements',
    'Turn them against each other',
    'Advance an antagonist\'s agenda, on or offscreen',
    'Offer a painful opportunity',
]" />
</div> -->
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>