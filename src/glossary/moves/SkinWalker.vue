<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Skin Walker';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="skin_walker" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 3 Abyss / 3 Resilience</template>
    <template v-slot:body>
        You <b>shed your current body and emerge anew from the husk</b>.  All Harm is sustained through the transformation, but every other aspect of your physique and appearance can be changed.  The next time you <em>Die</em>, choose whether the changes revert to your old body, or if you keep this new one permanently.  If you have Attuned this attunement through death, if you get a new body altogether you may use this move without paying the cost.
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        Being able to toss physical identity to the wind is something I like the idea of, but fear wil be difficult in play.  Mental pictures of the players takes a considerable amount of cognitive load.  Changing that up in a move could have adverse effects on that maintenance and consistency.  Or worse, it could turn the table apathetic, where they stop attempting to hold consistent mental pictures of their fellows altogether.  Is that reason to cull the move?  Absolutely not.  Just something I ponder about it.
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