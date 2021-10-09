<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Resonance';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="resonance" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Attuned )</template>
    <template v-slot:body>
        You can be compelled to <b>let a character manipulate you</b>.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Another one of the inward-directed compels.  I'm not sure the conceptual foundation on this one works quite as well as the Chameleon's, but I think it's stable enough.
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