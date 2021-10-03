<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Simulacra';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="simulacra" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 1 Abyss / 2 Resilience</template>
    <template v-slot:body>
        When you <b>conjure a small illusion</b>, describe the illusion and name two of the five senses.  Your illusion tricks all senses but those you named.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        The hinge to this move is whether the illusion should trick only two senses, or three of them.  I could always have the player roll for it.  But then again, rolling for "S: 3, P: 2" isn't all that interesting.  Both outcomes build towards a future MC move where "the npcs realize the illusion is false!".  I could just as easily say, "you conjusre a small illusion, the MC will describe an imperfection" and have the same results.  But I kinda enjoy the picture that sense-based imperfections can paint.
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