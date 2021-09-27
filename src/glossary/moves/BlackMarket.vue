<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Black Market';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>drop a hint</b> about your ability to procure or deliver illicit goods or services, <Roll glamour/>.
        <SHPM use="hsp" :options="[
            'If the NPCs listening have any reason to be interested in your offer they will take you up on it, though perhaps not immediately.',
            'You get to choose if, and which, rumors spread connecting you to what you offered.',
            'Rumors about your connection to contraband will spread whether you want them to or not.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        One of my favorite things about this project, especially curating the backgrounds, is how much breadth of exploration I got to do with reducing a concept down to a move or two.  I won't say that I always hit the mark, but in terms of really exploring the possibilities of moves for the first time it was a great sandbox.  This is one of the moves that I look to fondly with that in mind.  It's also obscure, and places all of its outcomes on a fairly reductive view of the potential hazards of the character making that action, while also loading its primary goal into an almost-guaranteed state.  And for that it may ultimately not make a great move.  If that's how it ends up, that'll be okay.
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