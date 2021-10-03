<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'Synthesis';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="synthesis" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you combine rare ingredients to <b>concoct a potent something or other</b>, describe the effects of its consumption, then <Roll skill/>?  Or maybe just ask the MC what the deal is, Ritual style?  Roll but also accept a condition imposed by the MC, in addition to the outcome?
        <Options bullet="⇀" :options="[
            'it has a drawback/withdrawl',
            'the immediate effects, or lasting effects, differ from the primary effect.',
            'the sight/smell/taste is obvious',
            'you barely have enough',
            'the effect is short lived',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Still workshopping this one.  The general vector is there, but the theme doesn't entirely match that of the game, nor of the background.  "Rare ingredients" do make sense in a setting with contraband or black markets.  Both of which fit well enough.  But neither one, to me, shouts, "of course a chef does this".  It feels more like an alchemy thing.  And I'm okay with that overlap in the Chef background, but the wording needs to be correct.
        <br><br>
        Aside from that, I'm not yet sure how I want to handle the constraints of the move.  "Roll for complications" works fine.  So does, "the MC will tell you the complications."  But I worry sometimes that to counterbalance a property as open as "just say what it does" I'd need more weight on the other end.  On one hand, constraints about what it can or cannot do helps provide space for the player to build ideas around.  But ultimately I don't think I want those restraints in place.  Rather, I think I want something more quid pro quo like, "the player says it does a thing, then the mc says it does a thing, so now it does both of those things".  That's potentially really fun, so long as the player and MC aren't directly trying to cancel each other out.
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