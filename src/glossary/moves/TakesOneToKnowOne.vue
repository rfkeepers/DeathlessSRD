<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Takes One To Know One';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="takes_one_to_know_one" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        Anytime you ask a question from <b>Understand Someone</b>, you may also ask, "what illegal activities are you involved in?".
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        This makes it into the Smuggler playbook to make it the only one that gets three moves.  There's no real reason for it, outside of that I like this addition.
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