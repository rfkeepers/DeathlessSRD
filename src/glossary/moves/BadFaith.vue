<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Bad Faith';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="bad_faith" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Attuned )</template>
    <template v-slot:body>
        When negotiating, you can be compelled to <b>offer a thing you do not have, or make a promise cannot easily commit to</b>.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Illusionist was one of the more difficult attunements for which to design proper misbehavior moves.  I like the idea of being imagined as a liar or charlatan, but it's difficult to get a player to act in that way, and it isn't fun to just say, "the npc's decide youre a charlatan, just because."
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