<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Presence';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="presence" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Attuned )</template>
    <template v-slot:body>
        Treat your <b>Force</b> as 1 greater while acting as Dominion.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        A straightforward bonus, not much to say about it.
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