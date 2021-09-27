<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Hobnob';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        No one can hide a party from you.  When you <b>suspect there's a gathering happening</b> that you weren't invited to, ask the MC about it.  They must tell you honestly if you're missing out or not, but they don't have to tell you what you're missing out on.  When you <b>let yourself in</b> to an event, <Roll force/>.
        <SHPM :options="[
            'You get in with some minor persuasion.',
            'Getting in requires something costly, imposes serious constraints, or means having some strings attached to you.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        This move, among all the moves I've written, I have very little quality barometer for: whether it's good, terrible, has a good underpinning and bad execution versus the opposite.  Something about its value eludes me, and I'm always bothered that I don't know why.
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