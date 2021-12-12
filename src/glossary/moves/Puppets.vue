<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Puppets';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="puppets" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Embodied )</template>
    <template v-slot:body>
        When you get someone to <b>demean themselves for your enjoyment</b>, clear a Condition or gain 2 Resilience.
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        As a writer I read a lot about authors talk about the process of writing their villains and the horrible things they do.  In summary the advice was: the character is doing those things, not you.  The separation is necessary.  You are not your characters.  You are simply a translator, a medium who records their terrible nature.  Sometimes when writing moves like this I have to remind myself of that premise, because the conditions here don't always sit easily with me.  But, then again, that's the point of going to this space, isn't it?  To explore nastiness, you need to have nastiness.
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