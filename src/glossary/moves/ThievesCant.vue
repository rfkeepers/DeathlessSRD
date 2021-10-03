<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Thieves Cant';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="thieves_cant" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        You understand the coded language of hobos, thieves, vagabonds, and the underworld.  Additionally, when you ask the MC if someone is associated with the underworld, they must answer truthfully, though they do not need to provide much detail.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Another lucky background to get three moves, because I like the little slice this adds.  That said, this one might end up on the chopping block, as it's kinda stealing thunder from Takes One To Know One, and I like that one better.
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