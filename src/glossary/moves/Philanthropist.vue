<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Philanthropist';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="philanthropist" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Occupied )</template>
    <template v-slot:body>
        You can be compelled to <b>give something valuable to someone in need</b>.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        This isn't the best trigger.  Too generic to crystalize any clear imagery.  The hope here is that the <i>something</i> in question isn't just stuff, but perhaps also metaphysical or emotional qualities, or favors, or connections.  All of which pushes beyond the borders of the move as written, since it's mostly hoping the table finds that space themselves rather than the move offering it to them.
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