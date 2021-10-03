<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'Jury-Rig';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="jury_rig" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>fix up a damaged or broken thing</b>, <Roll skill/>.  <em>S:</em> choose one. <em>P:</em> choose two.
        <Options bullet="⇀" :options="[
            'It can’t be trusted to keep working much longer.',
            'Fixing it costs you some resources.',
            'The result looks ugly or disfigured.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Early on I figured a fix-it move would be easy to plug in.  How hard could it be to write?  "When you fix something, roll FIX.  On success, it's fixed!"  Easy.  Then I started going down the rabbit hole on the partial success.  Can't just say, "you didn't fix it".  That'd be a bad move.  So I started thinking about how to partially fix it.  And working out how to partially fix something involves figuring out how to partially break something.  There's no end to tje ways to partially break a thing.  And very few of them work well for move outcomes.  In the end, I like what I came out with.
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