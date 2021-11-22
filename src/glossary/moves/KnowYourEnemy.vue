<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'Know Your Enemy';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="know_your_enemy" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>scrutinize someone's behavior</b> during combat or conversation, ask one question from the list below and <Roll insight/>.  <em>S:</em> Ask a second question from the list, or a question that follows on the first answer.  <em>P:</em>  You may ask a second question from the list, but your opponent will realize you're onto them and begin to correct their approach accordingly.
        <Options bullet="⇀" :options="[
            'What is going to be their next move; when and where will it take place?',
            'What points of weakness have they overlooked?',
            'Where do their strengths truly lie?',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        Another Understand Someone variation.  Do I have too many of these?  I think I've lost count.  I'm certainly not writing as many Overwhelm variants.  I wrote the Tactician quite early on, and the Gambler much later.  In review, I think I might have wrote the same concept twice with differing themes.  Or, at least, this move certainly overlaps with the "read their tell" move.  Maybe a little overlap is okay?
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