<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Rally';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="rally" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>organize allies</b> during a tense or chaotic situation, <Roll force/>.
        <SHPM use="hsp" :options="[
            'They follow your orders.',
            'Name one of the characters and, if remotely possible, no Harm will befall them.',
            'Name one of the characters, that person is guaranteed to encounter danger or Harm.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        The move is fine, but I'm not sure it belongs to the correct background.  It's more of a Tactician feel than a Marshal.  I might shift that around, later.
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