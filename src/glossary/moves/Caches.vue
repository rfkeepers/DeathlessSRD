<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Caches';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="caches" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        Caches: <b>〚&nbsp;〛:〚&nbsp;〛:〚&nbsp;〛:〚&nbsp;〛</b> You have four caches hidden throughout the wilds.  When you unearth one of your caches, check off one box and tell the MC what you had hidden inside.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        I'm both excited and cautious about moves like this.  They can offer the player a very interesting niche compared to standard moves, and that's fun.  But I also feel like I only get a small amount handful to use in the game, so when I do add it in, it better be a pretty damn solid move.  Not yet sure whether this one is good enough to merit the spot, or not.
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