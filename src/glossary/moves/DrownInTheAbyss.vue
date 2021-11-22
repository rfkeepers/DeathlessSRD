<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";

const name = 'Drown In The Abyss';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="drown_in_the_abyss" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>add the final mark of Abyss</b> on your character sheet, the nothing beneath all things reaches out to consume you, choose one:
        <Options bullet="⇀" :options="[
            'Feed a part of yourself to the enless sea.  Ask or tell the MC what cherished knowledge you have forever lost.  Erase three marks of the Abyss.',
            'Go on a mad, mindless rampage:  Ask or tell the MC about the aftermath.  Erase four marks of the Abyss.',
            'Become your own worst enemy:  The MC picks up to two of your Entanglements and their intents are inverted.  You are compelled to sabotage Promises, aid Grudges, and backstab Loyalties.  Erase five marks of the Abyss.',
            'You are swallowed by the bottomless sea:  Your body exists, somewhere in the world, but whatever inhabits it is no longer you.  You are lost and gone forever.  Discard your character sheet and begin another.',
            'Something else... (MC\'s choice)',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        There's not much point in tracking the character's ever-increasing Abyss if we don't put some sort of punishment at the end of it.  I'm hoping to make this feel thematically distinct from things like Urban Shadows' Corruption track.  It's not supposed to be the point at which you give up your character (though the option is offered, as an out).  It's supposed to give the players something to fear, some kind of sword of damocles, even though death is off the table.  Plus it gives a reason to push back against the abyss and engage with the entanglements mechanic.
        <h3 class="lineTo indent">In Play</h3>
        <div class="playExample miniBorder">
        <p>Skipping play examples for now.</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>