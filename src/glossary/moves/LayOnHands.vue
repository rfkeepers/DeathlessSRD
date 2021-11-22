<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Lay On Hands';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="lay_on_hands" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 2 Abyss / 3 Resilience; ( Interruptable )</template>
    <template v-slot:body>
        When you <b>touch a character, skin to skin</b>, you may draw out their pain and wounds in exchange for your own healthiness.  Anything taken from them is inflicted upon you in turn.  If they were sick, now you are sick.  If they had lost a limb, now you've lost a limb.  Etc.
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        Much like the Pyro moves, I worry that this explores too similar of a space as Breath Of Life.  Not only are they similar mechanically, they're almost identical conceptually.  It needs some distance.
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