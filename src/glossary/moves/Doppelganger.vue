<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Doppelganger';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="doppelganger" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Attuned )</template>
    <template v-slot:body>
        When you convince a character you're someone whom you aren't, then <b>dangerously overindulge in that recognition</b>, clear a Condition or gain 2 Resilience.
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        In many of these compel and condition removal moves I find I start working with a generic, almost weak seed, and then finding a way to impose a constraint that forces the behavior into certain badness or danger.  This is a great example of that.  Convincing a character you're someone who you aren't isn't all that difficult or meaningful, especially as a condition removal.  But overindulgence in that falsehood makes for much more interesting scenes.
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