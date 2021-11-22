<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'All Are Prey';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="all_are_prey" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>stalk a character</b> through known or unknown territory, <Roll insight/>.  <em>S:</em> Hold 3.  <em>P:</em> Hold 2.  If you are in well-known territory, add +1 Hold, even on a <em>Miss</em>.  If you confront your prey, or if they confront you, lose all remaining Hold.
        <Options bullet="⇀" :options="[
            'Deal Harm.',
            'Direct them toward a certain path.',
            'Separate them from their allies.',
            'Slow or halt their movement.',
            'Damage their items or resources.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        One of the few moves I'm genuinely happy with, as I feel I got the tone and behavior just right.
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