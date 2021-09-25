<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Seeking Solace';
const stat = 'GLAMOUR';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you meet another minister and <b>ask them for hospitality</b>, <Roll>{{stat}}</Roll>.  <em>S:</em> pick three.  <em>P:</em> pick two.
        <Options bullet="⇀" :options="[
            'They\'ll provide you shelter for a couple days.',
            'They\'ll supply you with resources.',
            'They extend the aid to the people you\'re traveling with as well.',
            'They won\'t tell anyone you\'re here.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        This was an experiment on trying out ways to let the player only pick part of what they want.  I've come to really appreciate the type of move that lets the player pick between options, but then makes one of the options the thing that doesn't fuck them over, the thing that gives them what they're after.  For example,  a combat move like: "S: 2, P: 1.  You stab them.  You disarm them.  They don't stab you.".   S is fun, because you presumably get to choose between disarming them and not getting stabbed.  P is harsh: what do you want more here, to stab them, or not get stabbed yourself?  This version is a bit more fuzzy than that example, and I have other moves with that simplicity.  But I wanted to test the boundaries a little to see if more complicated combinations are still fun to play with.
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