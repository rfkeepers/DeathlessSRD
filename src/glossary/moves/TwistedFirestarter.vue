<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Twisted Firestarter';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Occupied )</template>
    <template v-slot:body>
        When you <b>cause uninvited Harm or destruction</b>, erase a Condition or gain 2 Resilience.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Not much to say about this one.  It's small and sufficient.
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