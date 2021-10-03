<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Effigy';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="effigy" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 3 Abyss / 3 Resilience</template>
    <template v-slot:body>
        When you <b>bind a living creature's body or soul</b> to a small doll or other likeness, that creature and the effigy become permanently connected.  Anything you do to the effigy is felt, distantly, by the creature.  If you burn an Abyss, the next thing you do to the effigy also happens to the creature.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        The secondary trigger here, burning the abyss, is the part I'm not sure is working.  The table gets to decide for themselves how difficult (or not) it is to create an effigy in the first place.  After that the rules are pretty simple: you can do things without direct effect anytime you want.  And if you're willing to pay the steep cost, you can take any direct effect you want.  I think that works, and that this makes effigies a potentially persistent item in the world.  If anything, the question is whether burning an Abyss is enough precondition, or if there needs to be more ritual about it.
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