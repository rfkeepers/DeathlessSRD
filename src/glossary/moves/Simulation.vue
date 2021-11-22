<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'Simulation';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="simulation" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 3 Abyss / 3 Resilience</template>
    <template v-slot:body>
        When you completely <b>fabricate the reality of a small room or space</b>, <Roll glamour/>.  <em>S:</em> Pick one.  <em>P:</em> Pick two.
        <Options bullet="⇀" :options="[
            'When studied closely, some effect gives the illusion away.',
            'It only persists while you’re inside the space as well.',
            'The things inside the illusion are static and cannot be touched or moved.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        The trigger here is difficult to pin.  Or at least, difficult to consolidate into a concise trigger.  The goal is to reduce 1: the (physical) limits of space which the illusion can encompass, and 2: explain that the player has near complete control of every aspect of that illusion.  
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