<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Roll from "@/components/Roll.vue";
import Options from "@/components/Options.vue";

const name = 'Playing With Fire';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="playing_with_fire" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 1 Abyss / 1 Resilience</template>
    <template v-slot:body>
        When you <b>concentrate your emotions into a spark</b>, unleash that spark onto something and it will burst into flame.  Fire is unpredictable, you (or something on your person) combusts as well: tell the MC what part of you is affected and <Roll force/>.  The two fires are proportional in size and intensity, and one cannot ignite without the other.  <em>S:</em> Pick 1.  <em>P:</em> Pick 2. 
        <Options bullet="⇀" :options="[
            'The fires quickly spread out of control.',
            'Everything caught in the fires\' heat burns horribly.',
            'The fires resist being doused, smothered, or otherwise put out.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        I worry often that this shares too much space with Fireball: that one is the same as the other, really, just to greater or lesser intensity.  The overlap is most important in that it limits the space where I'm exploring the foibles behind fantasy concepts to the same space across two moves.  The Personas are supposed to be focused, but not necessarily so specifically pointed.  And in this case I've doubled down on "harm self to make fire".  Mechanical differences exist, but the theme is identical.  In that vein, I'll probably remake this move to something else later.
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