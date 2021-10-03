<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Knowledge Is Power';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="knowledge_is_power" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Occupied )</template>
    <template v-slot:body>
        When you <b>reveal crucially hidden information</b> to a character that shouldn't hear it, clear a Condition or gain 2 Resilience.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Is this the exact same move as the Empath's Open Channel?  Maybe.  I just realized that.  Hmm.  Maybe.
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