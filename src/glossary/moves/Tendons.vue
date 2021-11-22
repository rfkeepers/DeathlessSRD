<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'Tendons';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="tendons" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>cut at a muscle</b> or tendon: <Roll skill/>.  <em>S:</em> Pick two.  <em>P:</em> Pick one.
        <Options bullet="⇀" :options="[
            'Your target loses all use of that muscle or limb.',
            'You are not Harmed in the act.',
            'Your target is not harmed any more than necessary.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        This move originated back when the game had a fair bit of crunch around its combat.  The Butcher background as a whole, actually, was one of the first written to that design.  I feel like you can still feel the combat focus here, and I think that's okay; it's not like players aren't allowed to invest into that.  At the same time, I sometimes feel weird re-reading the move, because I think so much about its combat history, and that makes it feel distinct from the other backgrounds.
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