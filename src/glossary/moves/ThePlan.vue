<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'The Plan';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined shaded>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you take time with others to <b>prepare and strategize</b>, <Roll insight/>.  <em>S:</em> Hold 3.  <em>P:</em> Hold 2.  <em>M:</em> Hold 1, but when you spend that hold the MC gets to cause some additional disaster.  While your preparations are still relevant you may spend your hold, 1:1 to:
        <Options bullet="⇀" :options="[
            'Give to another player to (immediately) spend in place of Resilience.',
            'less mechanic more fiction: get someone out of a spot?',
            'give someone crucial information/equipment?',
            'ask the gm for crucial information?',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        This move is still a work in progress.  Good ideas for options haven't been entirely forthcoming for my brain.
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