<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Silver Tongued';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="silver_tongued" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Attuned )</template>
    <template v-slot:body>
        When you <b>tell a lie to your detriment</b>, and the character you lied to acts in belief of the lie, clear a Condition or gain 2 Resilience.
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        This one took me a while to figure out.  I really wanted to have a move based on telling lies, but it's so, so easy to just spit out lies left and right.  Getting a hook in place where the lie has both ramifications, and those ramifications can't be twisted to aid the player (ex: "I tell the police a lie that my nemesis likes to hunt poor people in the forest.").  So in the end we have this.  And I'm not sure how easily "a lie to your detriment" will be to come up with.  I'm also concerned that it's just too contrived to be taken seriously.  But so far it's the most effective iteration on telling a lie to cure a condition I have found.
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