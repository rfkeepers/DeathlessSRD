<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Roll from "@/components/Roll.vue";
import RollPlusD8Rules from "@/components/RollPlusD8Rules.vue";

const name = 'Help Out';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="help_out" leftLined >
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When someone makes a move, you can lend a hand to improve their chance of success (before or after the move is rolled).  Helping Out is a risk, any moves the MC makes in response can affect you, too.  Describe how your character provides assitance, then <Roll plusD8 />.
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