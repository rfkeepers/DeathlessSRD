<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Anything You Want Me To Be';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="anything_you_want_me_to_be" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Attuned )</template>
    <template v-slot:body>
        When you <b>Understand Someone</b> while acting as Chameleon, roll GLAMOUR instead of INSIGHT.
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        I like this twist because it produces a flavor change without a power shift.  Not that I don't like power shifts, more that I like how this co-exists in that space.
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