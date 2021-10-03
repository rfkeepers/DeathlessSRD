<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Cloak of Shadows';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="cloak_of_shadows" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 1 Abyss / 2 Resilience</template>
    <template v-slot:body>
        When you <b>wrap darkness around yourself</b>, you gain a cloak made of shadows.  As long as you wear this cloak you are <em>Enshaden</em>.  When you hide in a dark place while Enshaden you are effectively invisible, unless you do something to give yourself away.  When you take your cloak off it falls to the floor and disappears, thin as the light.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        One of a handful of moves I stole from prior work for Dungeon World.  It's more straightforward magical fun, without immediate relationship to social behavior or misbehavior.  I'd like to inject some of the latter, but I like the move, and it isn't always easy to find the deviation in the action.  Perhaps it'll come to me later.
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