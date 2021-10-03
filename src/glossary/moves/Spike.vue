<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'Spike';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 2 Abyss / 2 Resilience</template>
    <template v-slot:body>
        When you <b>immerse a character with an emotion</b> until it becomes all they can focus on, <Roll insight/>.  <em>S:</em> Choose 2.  <em>P:</em> Choose 1.  You may burn an additional Abyss to take an additional choice.
        <Options bullet="⇀" :options="[
            'The character experiences the emotion clearly and for as long as you want them to.',
            'You deal them an Insult.',
            'You don’t draw attention to yourself.',
            'You are not overcome with the emotion as well.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        A miniature ode to The Veil.  One of those moves where I played with, "pick N, one of the choices is 'it doesn't fuck me over, too'." and I like how it turned out.  It isn't my favorite move by any means, but I think it works out here, and that makes me happy.
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