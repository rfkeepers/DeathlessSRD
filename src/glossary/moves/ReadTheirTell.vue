<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'Read Their Tell';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="read_their_tell" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>try to figure someone out</b> during a moment of intimacy or instensity, <Roll skill/>.  <em>S:</em> Pick two.  <em>P:</em> Pick one.
        <Options bullet="⇀" :options="[
            'The MC will tell you some useful detail they\'re keeping secret.',
            'Ask the MC a question about that character\'s situation or plans, and they\'ll answer honestly.',
            'You don\'t accidentally give them any information they can use.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        The trigger here doesn't sit right with me.  "figure someone out" is basically "understand someone" in a nutshell.  "during a moment of intimacy or intensity" either severely restricts when you can use the move (unnecessarily, really), or doesn't restrict it at all, depending on how strict the table wants to be.  Neither context really hits on the feel of studying someone until you recognize how they're betraying their own secrets.
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