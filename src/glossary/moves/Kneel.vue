<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";

const name = 'Kneel';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="kneel" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 3 Abyss / 3 Resilience</template>
    <template v-slot:body>
        When you <b>issue a clear and simple command</b> that cannot be ignored, the character you ordered must do one of the following:
        <Options bullet="⇀" :options="[
            'Give in and do as you said.',
            'Retaliate violently.',
            'Inflict self-Harm to resist.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        It's not just "I am the Law" again.  I promise.  I'm not just rewriting all of Dungeon World's moves.  Please believe me.
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