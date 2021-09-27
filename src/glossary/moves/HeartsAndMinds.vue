<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Roll from "@/components/Roll.vue";

const name = 'Hearts and Minds';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>perform for an audience</b> with the intent to rouse or soothe, <Roll glamour/>.  <em>H:</em> Tell the MC how they react. <em>P:</em> The MC will tell you whether the effect is short-lived, goes too far, or gets an additional and unwanted result.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Not much to say about this.  It's a pretty standard performer-themed move.
        <h3 class="lineTo">In Play</h3>
        <div class="playExample miniBorder">
        <p>skipping play examples for now.</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>