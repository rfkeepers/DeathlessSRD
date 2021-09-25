<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";

const name = 'Case A Joint';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>take time to study a room or space</b>, ask a question from the list below.  After that you may continue to ask more questions from the list, but the MC gets to make a move for each one.
        <Options bullet="⇀" :options="[
            'What important detail is going unnoticed or getting ignored?',
            'What should I be on the lookout for, now or later?',
            'What here is out of place, or shouldn\'t be here?',
            'What would be the easiest way to break in again later?',
            'What here would be worth stealing?',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        For nearly the entirety of the games lifespan I didn't have a basic move for reading a situation (in terms of the place you're in).  I decided to keep that sort of knowledge here relegated to the grifter.  I'm still happy with that choice, and I think in the end helped me find the space for the current basic move, which I like more.
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