<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Putty';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="putty" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 1 Abyss / 2 Resilience</template>
    <template v-slot:body>
        You may <b>push and pull at your body as if it were soft clay</b>, molding the flesh into some other shape.  When finished, your changes remain in that shape until the skin peels off like a rubber mask, revealing your original features underneath.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        As a fan of exploring physicality, I really enjoy body mutation concepts.  I think this particular move shoulders up a little with body horror, and ultimately I'm okay with that.  But it's not specifically what I"m going for here.
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