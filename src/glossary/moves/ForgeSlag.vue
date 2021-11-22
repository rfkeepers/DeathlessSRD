<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Forge Slag';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="forge_slag" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        Your time working around furnaces and molten metals acclimated you to physical pain.  When you would <b>take a Pain tag</b>, you may spend a Resilience to ignore it instead.
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        Not much going on here.  Every now and then I find it easier to assert the background theme by asserting "this is what you are", rather than "this is what you can do".  Of course, in a normal PBTA, that would be both common and expected of a playbook.  But backgrounds, being such small slices of playbooks, have far less room to play in that space.  At one point I had a "what you are" move attached onto every background.  Honestly, I just couldn't come up with a good one for every background.  This is one of the few moves that survived the purge.  
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