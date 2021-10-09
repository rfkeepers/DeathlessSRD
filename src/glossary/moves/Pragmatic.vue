<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Pragmatic';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="pragmatic" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Occupied )</template>
    <template v-slot:body>
        When someone comes to you for advice or insight and you put aside any feelings you have for them to <b>give brutal, honest truth about themeselves or their situation</b>, clear a Condition or gain 2 Resilience.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        This move toes the line between what I want it to do (damage relationships with honesty and reality), and what it could be softened to do (give someone hard advice) in a way that might infringe upon its goals as a condition removal.  For now that's a possibility I'm willing to stomach.  I don't think the move at its core is the problem.  Most likely it needs better wording to avoid that result.
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