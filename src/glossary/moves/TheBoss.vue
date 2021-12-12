<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'The Boss';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="the_boss" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Embodied )</template>
    <template v-slot:body>
        You can be compelled to <b>make an example of someone who resists you</b>.
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        Ah, the nasty side of power fantasies.
        <h3 class="lineTo indent">In Play</h3>
        <div class="playExample miniBorder">
        <p>Skipping play examples for now.</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>