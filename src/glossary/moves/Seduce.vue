<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'Seduce';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="seduce" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>entice someone</b> to turn their attention away from all else and come find you, <Roll glamour/>.  <em>S:</em> They'll come to you, on your terms (where, when, with whom).  <em>P:</em> They'll meet with you, but you only control one:
        <Options bullet="⇀" :options="[
            'The time and place.',
            'They come alone, with others, or send people on their behalf.',
            'They let you bring people with you.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        The background for this move concerns me more than the move itself.  <i>Fatale</i> is a pretty loaded concept thanks to his noir history.  Its context could color the players choice to use the background more-so than the move itself, thanks to things like gender norms and cultural precursors.  That said, I haven't found a playbook for this particular move (and I think the move works well enough to keep) besides that.  So here it stands.
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