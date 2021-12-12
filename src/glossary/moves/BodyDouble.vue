<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Body Double';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="body_double" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 3 Abyss / 3 Resilience</template>
    <template v-slot:body>
        When you <b>make your shadow rise up and take your form</b>, it lifts from the ground as a featureless body-double.  Your shadow can move and act independently from you, but for all other considerations you are one and the same, controlled singularly by your mind.  All things experienced by one body are experienced by the other.  What it hears, you hear.  What you see, it sees.  When your shadow takes Harm, you take that same Harm.  Your shadow double persists until you dismiss it, or you die.
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        This would be one of my favorite moves, if I were designing for Dungeon World.  As it is, I'm not sure it evokes enough of the themes (foibles, in particular) in the Shadewalker persona.  Right now it leans a little too much towards, "Hey, now there's two of you, cool", and not enough towards, "You're happy to let someone else take the fall for you."
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