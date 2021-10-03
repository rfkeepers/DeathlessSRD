<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Contest of Strength';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="contest_of_strength" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>enter into competition with someone</b> in a way that pits your physical strength against theirs, either directly or indirectly, name your goal (such as: make them look bad, prevent them from moving, get them away from you, Harm them, etc) and <Roll force/>.
        <SHPM use="spm" :options="[
            'You gain a position of leverage against your opponent and your goal is achieved.',
            'It takes everything you have to not give them control.  Your goal is achieved, but the MC will introduce a complication.',
            'They gain the upper hand and turn your goal back against you, the MC will say how.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Another move that walks the line between resolving a quick action and reducing a scene to a move.  In theory, I think it's okay.  But it might be trying to do too much for the narrative all at once.
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