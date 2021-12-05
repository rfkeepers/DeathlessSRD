<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Roll from "@/components/Roll.vue";
import RollPlusD8Rules from "@/components/RollPlusD8Rules.vue";

const name = 'Desperate Acts';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="desperate_acts" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you need any possible advantage you can get, you can turn a regular move (before or after rolling) into an act of desperation.  Describe what extreme behavior your desperation requires in this moment, then <Roll plusD8 />.
        <br><br>
        <RollPlusD8Rules />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        
        <h3 class="lineTo indent">In Play</h3>
        <div class="playExample miniBorder">
        <p>todo</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>