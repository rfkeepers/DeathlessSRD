<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Straddle The Border';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="straddle_the_border" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Attuned )</template>
    <template v-slot:body>
        When you <b>Roll against your Abyss</b> while acting as the Witch, treat your Abyss as two higher than it actually is (maximum of 11).
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        As far as the Abyss is concerned, this is basically the same as a +2 on the roll.  Given that a low Abyss score (9 or less) is still pretty easy to roll over, I think that works fine.  It means characters with this attunement get the greatest protection at higher scores, which lets them stay in that interesting zone for longer.
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