<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Template';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: Abyss / Resilience</template>
    <template v-slot:body>
        When you <b>do the move</b> and need to learn the consequences, <Roll dice/>.
        <SHPM :options="[
            's move option.',
            'p move option.',
        ]" />
        <Options bullet="⇀" :options="[
            'Option 1.',
            'Option 2.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>

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