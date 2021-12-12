<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Life Is Pain';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="life_is_pain" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Embodied )</template>
    <template v-slot:body>
        When acting as Glutton, you may spend 1 Resilience during any move to <b>ignore the effects of a Condition</b>.
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        A more targeted way of doing "spend one resilience to add 1 die to your roll".
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