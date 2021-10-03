<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";

const name = 'Day Job';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="day_job" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>cut into a corpse</b> to gain information or resources, pick two.
        <Options bullet="⇀" :options="[
            'It doesn\'t take much time.',
            'You get extra of what you were looking for.',
            'You do it with no risk of Harm or damage.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Honestly, I don't have much love for this move.  If I recall, it came from the space in design where I was still taking a hatchet to what the game was <i>about</i>, chunk by chunk whittling it down to where we are now.  And part of that process was trying on different hats, like, "what if there's some monster hunting" or dungeon delving, or some other thing where the players might want to derive valuables from their kills.  That... isn't really the game any longer.  So this move should probably be on the chopping block, too.
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