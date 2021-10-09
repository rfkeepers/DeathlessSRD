<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Unified Consciousness';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="unified_consciousness" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Attuned )</template>
    <template v-slot:body>
        When you <b>Persuade or Understand Someone</b>, you may spend 1 Resilience to turn a <em>M</em>iss into a <em>P</em>artial Success.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        The resilience cost here might be severe, especially considering the moves at hand.  But then again, getting out of a Miss is always a potent thing.
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