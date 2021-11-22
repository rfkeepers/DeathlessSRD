<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import RollAbyssRules from "@/components/RollAbyssRules.vue";

const name = 'Imbibe';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="imbibe" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 2 Abyss / 3 Resilience</template>
    <template v-slot:body>
        When you <b>ingest a potent drug or chemical</b> to commune with the Abyss, choose one from below.  For the duration of the effect, you:
        <Options bullet="⇀" :options="[
            'Expand consciousness into prescient awareness.',
            'Dilate the senses to incorporate all experience.',
            'Numb interference to isolate clarity.',
            'Loose the shackles that contain the body.',
        ]" />
        <br>
        Communion with the Abyss has its consequences.  Ask or tell the MC which of the following also affects you:
        <Options bullet="⇀" :options="[
            'Sudden, unshakable trances.',
            'Volatile sensory experiences.',
            'Imagination indistinguishable from reality.',
        ]" />
        <br>
        Finally, <Roll abyss/>.  Not sure I like this.  How do I do the same thing to commune with the Abyss?
        <br><br>
        <RollAbyssRules />

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