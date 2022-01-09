<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Compel';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="compel" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>indulge one of your Compulsions</b>.  If you create new danger, cost, or Harm for yourself or another character in the process, take one Resilience.  You may only gain one Resilience per scene this way.
        <br><br>
        When you <b>invoke another PC's Compulsions</b>,  that character has a choice: play out their compulsion, and if they create new danger, cost, or Harm to themselves or another character, you both gain 1 Resilience (once per scene); or they can resist.  If resisting they can pay 1 Resilience to ignore you, or ask you to <Roll n=3 dice/>.
        <SHPM use="spm" :options="[
            'They are unable to resist their Compulsions.',
            'You are both compelled.',
            'You are driven to that Compulsion instead of them.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        Compelling is one of the mechanics I like about the game as a whole.  This Compel move, I'm not fully decided on how I feel about it.  I know I'm keeping the "if the other player agrees, you both gain 1 Resilience".  Whether or not there's a condition where players roll, I'm not as certain.
        <h3 class="lineTo indent">In Play</h3>
        <div class="playExample miniBorder">
        <p>skipping play examples for secondary moves.</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>