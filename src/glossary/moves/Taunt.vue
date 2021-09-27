<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Taunt';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>issue a challenge</b> against someone's honor, capabilities, or emotional state, <Roll force/>. Your target does one of the following:
        <Options bullet="⇀" :options="[
            'Focus all of their attention on you.',
            'Push their current behavior to even further extremes.',
            'Avoid you at all costs.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Sometimes I worry the Wrestler background feels too obviously like a pro wrestler.  Sometimes I also worry that I too thinly veil my idea theft, like how this is just I Am The Law in dungeon world.
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