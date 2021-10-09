<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Bad Karma';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="bad_karma" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Attuned )</template>
    <template v-slot:body>
        When you <b>Harm someone without provocation</b>, who has never harmed you before, erase one Condition or take 2 resilience.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        As with most of the Witch attunement's smaller moves, naming them is the most difficult part.  I sincerely don't like the name of this move.  But still haven't thought of a better one.
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