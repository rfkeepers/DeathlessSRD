<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'And For My Next Trick';
const stat = 'GLAMOUR';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="and_for_my_next_trick" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>hide an object with a quick gesture or flair</b>, it disappears from your hand and is somewhere else on you or on another character within arms reach, say where and then <Roll glamour/>.
        <SHPM use="hsp" :options="[
            'The object is hidden and none are the wiser to where you put it.',
            'Those you hid it from think it’s somewhere that it isn’t, say where.',
            'It’s not well hidden.  A wrong move or close inspection could give the location away.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        This move was a bit of a goof-off creation.  A fun experiment in trying to turn a magic trick into a move.  It turned out to be a lot of fun to think through and tease out.  The initial variations fell flat, but where it eventually landed makes me happy.
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