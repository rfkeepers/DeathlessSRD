<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Words And Stones Can Both Break Bones';
</script>
<!-- ============================== Template ============================== -->
<template>
<Move id="words_and_stones_an_both_break_bones" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 1 Abyss / 2 Resilience</template>
    <template v-slot:body>
        When you would <b>add a Condition</b>, add a <em>Wound</em> instead.  Tell the MC how this emotion manifests itself as physical harm.
        <br><br>
        When you would <b>add a Pain</b>, add a <em>Condition</em> instead.  Tell the MC what emotion the physical harm brings out of you.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Harm tradeoffs are difficult to balance without really rigorous playtesting.  Which, at this time, this move hasn't undergone.  What I mean when I say "balance" is, in this case, whether or not players would ever <i>want</i> to make that trade.  In talking with other game makers the frequent complaint is more often that the players never choose it, and only rarely that the players are able to abuse it.  Given the two options, I'd rather see players try to abuse the mechanic, because at least then they're engaging with it.  The other outcome suggests I failed to give them anything interesting at all.
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