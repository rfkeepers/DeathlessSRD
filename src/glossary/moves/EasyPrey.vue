<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Easy Prey';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="easy_prey" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>eye someone down</b> in hopes of quick and ill-gotten gain, <Roll skill/> then tell the MC what you're after (info, coin, an item, etc).  The MC will tell you what they have, and…
        <SHPM :options="[
            '...how you could get it.',
            '...why it will be difficult to get.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        Pickpocketing, as an isolated move, is another action that I like to leave off the table.  It's not that I dislike the moves, or that I don't think they work out.  More like, in a fickle-artist manner I always think I can do better by making some variant of it (like this).  It probably isn't better, but still I like it.  In this particular case I tried to trade off the narration of, "whatever it is, it's stolen now" with, "whatever it is, here's how you can steal it".  And I think that's an okay tradeoff, so long as players aren't upset about making (in all likelihood) two rolls to get the thing instead of one.
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