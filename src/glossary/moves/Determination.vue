<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Determination';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="determination" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 3 Abyss / 3 Resilience</template>
    <template v-slot:body>
        When you <b>numb yourself to pain and exertion</b> you become nearly unstoppable for a short while.  During this time you cannot be compelled by any pain, wounds, or scars.  You can continue to receive Harm, but you ignore its effects until after the numbness subsides.  Death, too, must wait until this is over; a killing blow will not fell you until the end.
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        For a long time this move was simply, "when you take a wound that kills you, you get to do one more action".  Which is, well, it's fine.  Good for heroic last stands.  But in a game where the players are expected to die, and repeatedly at that, the last stands become a bit less heroic.  This variation sits better with me both as a means to decouple the trigger from death, and also to give the player a better guarantee of value on its use.  The tone resonates better with the Glutton theme as well.
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