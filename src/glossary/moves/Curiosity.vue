<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Curiosity';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="curiosity" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Attuned )</template>
    <template v-slot:body>
        You can be compelled to <b>investigate something unknown</b>.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        This one is a bit chancy of a compel.  There isn't anything necessarily dangrous or deviant about investigating the unknown.  So long as the table is happy to press towards that state, I think there's plenty of space here for great situations.  But that depends on the table, and isn't built into the move itself.
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