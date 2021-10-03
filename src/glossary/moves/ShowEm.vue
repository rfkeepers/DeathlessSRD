<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Show \'em';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="show_em" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you reveal the full extent of your situation to someone, strengths and weaknesses and all, they reveal theirs to you in turn.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        I like the theme of having two players show each other all the details about their position that they've kept hidden up to this point.  To have them reveal what they have or haven't bluffed.  I'm not sure that this move is doing it any real justice.  But if nothing else it's a placeholder that I can improve upon.
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