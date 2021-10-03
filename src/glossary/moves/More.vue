<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'More';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="more" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Occupied )</template>
    <template v-slot:body>
        When you <b>drop your guard and let someone freely Harm you</b>, encouraging them to do it more, and worse this time, clear a Condition or gain 2 Resilience.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        This is actually kind of a classic character moment.  I'm sure there's a tvTrope for it (though I'm terrible with tvTropes, and am not about to go down that rabbit hole just to find the relationship).  "The protagonist is having a bad day and they could totally beat this mook, but they <i>want</i> to get punched around a bit, because of the bad mood and all".
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