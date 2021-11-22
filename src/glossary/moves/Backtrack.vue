<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Backtrack';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="backtrack" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 1 Abyss / 2 Resilience; ( Interruptable )</template>
    <template v-slot:body>
        When you have time to <b>intimately study someone or something</b>, you can experience a past event as it was experienced by your study.  Ask the MC about something it experienced and <Roll insight/>.
        <SHPM use="spm" :options="[
            'You experience that event with clarity and awareness.',
            'The details are indistinct and difficult to follow.',
            'Parts of the memory are missing, indecipherable, or incorrect.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>

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