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
        Once per scene, when you would <b>burn a mark of the Abyss</b>, you instead sacrifice your own body or mind and take an Injury or a Condition.
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        May need to change, purely on the basis that marking the Abyss outside of death rarely happens, mechanically.
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