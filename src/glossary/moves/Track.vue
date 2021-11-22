<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'Track';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="track" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>follow the tracks</b> of beasts or people, <Roll insight/>.  <em>S:</em> Ask 2 questions from the list.  <em>P:</em> Ask 1.
        <Options bullet="⇀" :options="[
            'What creatures/people are there, and how many are in their group?',
            'How long ago were they here?',
            'What unusual information can be learned from their tracks?',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        Every time I read this move I find it to be, well, utilitarian would be the word, I think.  It does a functional thing.  Not an impressive thing.  Or a surprising thing.  Or an exhilirating thing.  Just a functional thing.  And perhaps that can be okay.  Perhaps not every move needs to be epic.  But I sometimes wonder if players read utilitarian moves and think to themselves, "yeah, I guess I'll use it, just cause it's there, but whatever."
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