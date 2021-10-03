<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Keep Them From Harm';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="keep_them_from_harm" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Occupied )</template>
    <template v-slot:body>
        When you <b>save someone's life</b> despite having good reason to let them die, clear a Condition or gain 2 Resilience.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        What's fun here, to me, is how the move gets at the damaging of side of doing good.  Objectively, saving someone is an act of goodness.  A topic fantasy games tend to avoid investigating is who is worth saving.  In the black and white reductivity of good an evil, if the player can kill someone, they really probably deserved it, and no mind should be taken to whether or not that's correct.  Admittedly, this move doesn't add any layers therein.  But it can push the table to consider what they have to gain by letting a character die or not, when preexisting context suggests they have none.  
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