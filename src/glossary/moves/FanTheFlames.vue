<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Fan The Flames';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Occupied )</template>
    <template v-slot:body>
        You can be compelled to <b>take an action or situation much farther than you had intended</b>.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        The compel trigger here isn't as well written as I would hope.  It's meant to express the idea that fire which seems under control can ignite and rage out of control with something as simple as a sufficient breeze.  "take something farther" only partially gets at that thought.  That said, I don't want this move to be the exact same as Twisted Firestarter, but compelled.
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