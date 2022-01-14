<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'Drown In The Abyss';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="drown_in_the_abyss" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When the Abyss reaches out to consume you, tell the MC the last thing you've done or seen that haunts you, then <Roll abyss />.  If you roll below, choose one of the following:
        <Options bullet="⇀" :options="[
            'Something in the Abyss coalesces and is birthed to the world.  The MC will reveal what it is, now or later.  Reduce the Abyss by one.',
            'Feed a part of yourself to the enless sea.  Ask or tell the MC what cherished knowledge you have forever lost.  Erase three marks of the Abyss.',
            '',
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