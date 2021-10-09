<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Uncanny Resemblence';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="uncanny_resemblence" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Attuned )</template>
    <template v-slot:body>
        You can be compelled to have an NPC <b>identify you or mistake you for someone else</b>.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        One of the few compel moves that directs itself inward from the world to the character, instead of exposing a character's bad behavior.  My hope is that this plays to identity anxieties.  In my experience, so much identity anxiety is bound up in how the world sees you as much as (or more so) than what you present to the world.  And in that way it feels fitting that the identity focused attunement has a move where the danger is the way in which the world identifies that character.
        <h3 class="lineTo">In Play</h3>
        <div class="playExample miniBorder">
        <p>Skipping play examples for now.</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>