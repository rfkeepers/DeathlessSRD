<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Criminal Connections';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>slip a request for secrets, favors, or goods</b> to someone connected with the underworld, <Roll glamour/>.
        <SHPM :options="[
            'They\'ll set you up to meet with someone who is willing to trade or help you out.',
            'Before they are willing to meet, they need proof that you\'re reliable.  The MC will tell you what they require.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Honestly, I don't have many thoughts on this one.
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