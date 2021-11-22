<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Confession';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="confession" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When someone <b>confesses their sins to you</b>, ask two questions from the list... 
        <Options bullet="⇀" :options="[
            'Who is it that you hurt, and why?',
            'Were there others involved?',
            'Where are you staying at this time?',
            'Is someone else about to be hurt, someone who can be saved?',
        ]" />
        <br>
        ...then <Roll resolve/>.  Based on their answers it is your choice to chastise or absolve them for their behavior.  Finally you must suggest an act of redemption.
        <SHPM use="spm" :options="[
            'Your words ring clear and true and they follow your advice.',
            'They leave feeling unfulfilled, and will only make a misunderstood attempt to follow your suggestion.',
            'They disagree with your advice, and choose to antagonize the thought, or go down a differnt path entirely.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        One of the more complicated moves in the game.  However, I think it fills a space that, although niche, has a good way of building itself around the theme of the concept.  That said, this could be one of those situations where I'm trying to take a real scene and reduce it into a move.  eg: it's too complicated for regular use, but too reductive to use within a scene and still get to have the scene play out organically.
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