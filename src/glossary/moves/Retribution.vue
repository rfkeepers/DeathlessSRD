<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Retribution';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="retribution" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>( Embodied )</template>
    <template v-slot:body>
        You can be compelled to <b>lash out at someone who mistreats another person</b>.
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        Still refining the trigger on this one: 'lash out in defense of someone being mistreated'. 'lash out at someone who has harmed other people', etc.  On one hand, the tone of the world in the game is expected to be such that <i>people mistreat others</i>.  It shouldn't be strange for characters to see mistreatment occur.  For the theme of the persona I think it makes sense for the compelled character to be propelled to do something about it.  But mediating the two states could use more finesse than, 'a standard, but unfortunate thing happens'.
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