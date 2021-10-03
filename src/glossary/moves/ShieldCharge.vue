<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'Shield Charge';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="shield_charge" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you raise your shield and <b>charge through obstacles</b> in your way, <Roll force/>.  <em>S:</em> Whatever is in your way gets knocked back, knocked over, or busted to pieces and takes Harm as established.  <em>P:</em> You break through, but it’s messy.  Pick one:
        <Options bullet="⇀" :options="[
            'You get Harmed in the process.',
            'You end up in a bad position.',
            'Something of yours gets broken or damaged in the process.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Does anything scream 'brutishness' like the classic fantasy shield charge?
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