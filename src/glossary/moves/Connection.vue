<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Connection';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 1 Abyss / 1 Resilience</template>
    <template v-slot:body>
        When you <b>touch a character, skin to skin,</b> you can use Understand Someone as if you had spent uninterrupted time studying them.  When you Understand Someone in this manner you may also ask the question, "what emotions are you experiencing right now?"
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        A part of me really wants to give this to the Empath as an occupation move, and not have it as one of the moves available to characters via abyss.  Mostly because it's not a move I envision players wanting to spend abyss on, but it feels like the sort of move that really explains what the Empath is <i>about</i>.  On the other hand, I know that as soon as I do that, I'll want to give every awakening a move of exactly the same stature.  It's only fair, isn't it?  Maybe something I'll do when I get back to figuring out this game.
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