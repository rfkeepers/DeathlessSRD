<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Command';
const stat = 'FORCE';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you have the upper hand on a foe and you <b>demand that they turn themselves in</b> or hand over what they have, <Roll>{{stat}}</Roll>.
        <SHPM :options="[
            'They do it, though they may ask for evidence that you\'ll guarantee their safety before they do.',
            'They make a counter-offer: you give them what they want, and they’ll give you what you want.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        A spin on the persuade move, for players who like to do the lawful thing.  I tend to prefer specific lenses on a basic move like these over the broader, stat-swapping versions like, "when you Persuade a character by citing the law, roll FORCE instead of GLAMOUR".  The worry is that I end up with an overly restrictive slice, and so it never really sees the light of day, where the more generic stat swap would have gotten both more traction and more appreciation.
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