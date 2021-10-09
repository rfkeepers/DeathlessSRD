<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Immolate';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="immolate" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Attuned )</template>
    <template v-slot:body>
        When you would <b>mark the Abyss</b>, but haven't died, you may deal self-harm instead and give yourself an Injury or a Condition.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        May need to change, purely on the basis that marking the Abyss outside of death rarely happens, mechanically.
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