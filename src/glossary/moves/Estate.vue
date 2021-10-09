<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";

const name = 'Estate';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="estate" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        Before your death, you were established and well known in the upper eschelons of society; a landowner with one, perhaps even several, estates.  One of these estates could be repossessed, if you're willing to do the work to win it back.  Tell the table about the details- its location, design, and qualities- and then from the options below select the current status of the land.
        <Options bullet="❍" :options="[
            'Abandoned: Without you around there was no reason for any caretakers or visitors to stay behind.  The wilds reclaimed both the land and the buildings, all of it succumbing to disrepair.  It\'s yours for the taking, what little of it is left standing.',
            'Seized: The land was taken, perhaps violently, by something fearsome: a troop of deserters, a gang of outlaws, beasts and monsters, or something worse.  No one else dares enter the premise.  Good luck.',
            'Peacefully Inhabited: A benign, possibly even friendly, owner or owners now squat on the land.  Maybe it\'s the one caretaker who decided to stick around, or an itinerant and weary traveller who wanted to settle down.  They could be willing to share the space with you.',
            'Remotely Owned: Some other bourgeoisie purchased the title.  They don\'t live there right now, but they keep employed a couple groundskeepers to maintain the land for when they decide to come and visit.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        As a character-building question, I really like this move.  As part of a background, I'm hoping that it has an appeal to the particular type of player who likes to provide space or place to the group more than they like to provide specific abilities.
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