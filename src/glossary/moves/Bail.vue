<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Bail!';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>scurry out of a bad situation</b> to save your own ass, <Roll resolve/>.  <em>S:</em> If it makes sense in the fiction, you're gone.  <em>P:</em> You can go, but pick one from below.  Ask or tell the MC about the details.
        <Options bullet="⇀" :options="[
            'You have more of something now: Harm, people looking for you, or a price on your head.',
            'You have less of something now: resources, coin, a certain something, or dignity and respect.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Among pbta staples that I like, but have conflicted feelings about when it comes to widespread availability (ie: basic move status), is the 'escape a spot' move.  The tug-of-war is whether frequency of usage must drive availability.  Personally, as the writer of these things, they're tastier when I place them within a specific thematic flavor, than without.  But that also means that I've deprived the game of a useful tool that it might be worse off without.
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