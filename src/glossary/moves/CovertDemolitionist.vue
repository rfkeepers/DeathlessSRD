<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Covert Demolitionist';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>break and enter</b>, <Roll resolve/>. <em>S:</em> Pick two.  <em>P:</em> Pick one.
        <Options bullet="⇀" :options="[
            'It doesn\'t take long to do.',
            'You don\'t make much noise.',
            'The evidence you leave behind is not attention-getting or obvious.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Graverobbers were apparently very industrious in their capacity to get through any impediment, and in very short order at that.
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