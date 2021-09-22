<!-- ============================== Script ============================== -->
<script setup>
import { ref } from 'vue';
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'Sedudce';
const stat = 'GLAMOUR';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>entice someone</b> to turn their attention away from all else and come find you, <Roll>{{stat}}</Roll>.  S: They'll come to you on your terms (where, when, with whom).  P: They'll meet with you, but you only control one:
        <Options bullet="⇀" :options="[
            'The time and place.',
            'They come alone, with others, or send people on their behalf.',
            'You can bring people with you.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        <h3 class="lineTo">In Play</h3>
        <div class="playExample miniBorder">
        <p>someone says something.</p>
        <p>someone rolls <b>the move</b>.</p>
        <p>the rules play out.</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>