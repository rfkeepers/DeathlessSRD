<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Striking the Anvil';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="striking_the_anvil" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>spend some time with access to tools and a workspace</b>, you can physically modify an object in your possession by adding, removing, or exchanging one of its tags.  The MC will give you one of the following requirement to complete your work:
        <Options bullet="⇀" :options="[
            'It takes longer than you expected.',
            'You’ll need a helping hand.',
            'It needs a special something to have the desired outcome.',
        ]" />
        <br>
        If you choose not to alter any of your equipment then the act of working can be its own reward.  Instead of affecting any tags, select an option from Find Respite.
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        While I think this move works in general, what bothers me is that I don't actually have anything in the rules now about equipment tags.  Back at the beginning of things I had a whole library of them written up.  Now, later in development, I stopped bothering to integrate them with anything, because having specific tags on a weapon wouldn't really mean anything to the system.  As a result, this move stands out awkwardly against the rest of the system.  I think the concept of, "work on an item to alter it" still holds, and I've tried numerous times to write a tag-less version of that which I like, but none of them are ever both as simple and as effective as talking about the tags an item has.
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