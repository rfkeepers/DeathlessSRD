<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Respect My Authority';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>put on the airs of a figure of authority</b>, there to enforce law and order, <Roll resolve/>.  No matter the result, everyone around you who is up to no good will have a tell that gives away their intentions.
        <SHPM use="hs" :options="[
            'If confronted directly, they will act compliant, evasive, or aggressive toward you.',
            'Take +1 Resilience the first time you confront one of them.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        "swagger" the move, I guess.  Open question: is it reasonable to avoid a move name <i>because</i> it has a south park reference?
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