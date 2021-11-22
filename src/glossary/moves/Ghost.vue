<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Ghost';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="ghost" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Attuned )</template>
    <template v-slot:body>
        Treat your <b>Skill</b> as 1 higher while acting as Shadewalker
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        More simple stat boosts.
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