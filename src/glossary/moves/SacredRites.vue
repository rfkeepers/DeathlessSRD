<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import RollAbyssRules from "@/components/RollAbyssRules.vue";

const name = 'Sacred Rites';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>perform a ritual or offering</b> in according to your own doctrine or someone else's, <Roll abyss/>.  <em>S:</em> Pick two.  <em>P:</em> pick one.
        <Options bullet="⇀" :options="[
            'Ask the MC about something.  They will describe a disjointed, dreamlike vision regarding that thing.',
            'Tell the MC about something.  If possible, they will shift the world towards making your statement a reality, though the change may not be obvious or welcome.',
            'Gain +1 Resilience',
        ]" />
        <br>
        <RollAbyssRules />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        The outcomes on this move are a little wonky.  The first option is basically a rehash of `gaze into the abyss`.  I really like the second option, and maybe the best way forward is to rewrite the move around that entirely.  "when you ritural to shape the world... h: if possible, s: maybe not obvious, p: maybe not welcome".  I think I like that better.
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