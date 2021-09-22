<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Compel';
const stat = '3 DICE';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        Once per scene you may <b>compel another PC into action</b> by invoking one of their tags, moves, entanglements, or flags.  If that player agrees to your proposal, and the MC approves the result, you both gain 1 Resilience.  If they wish to resist, they can either pay 1 Resilience to ignore you, or make you roll for it.  If you roll, then <Roll>{{stat}}</Roll>.
        <SHPM use="spm" :options="[
            'They are compelled to the behavior.',
            'You are both compelled to bad behavior.  The MC will tell you your compulsion.',
            'Your character is compelled to your proposal (or something similar) instead.  You may not resist this compulsion.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Compelling is one of the mechanics I like about the game as a whole.  This Compel move, I'm not fully decided on how I feel about it.  I know I'm keeping the "if the other player agrees, you both gain 1 Resilience".  Whether or not there's a condition where players roll, I'm not as certain.
        <h3 class="lineTo">In Play</h3>
        <div class="playExample miniBorder">
        <p>skipping play examples for secondary moves.</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>