<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import BreathOfLife from '@/glossary/moves/BreathOfLife.vue';
    import LayOnHands from '@/glossary/moves/LayOnHands.vue';
    import NobleCalling from '@/glossary/moves/NobleCalling.vue';
    import Philanthropist from '@/glossary/moves/Philanthropist.vue';
    import KeepThemFromHarm from '@/glossary/moves/KeepThemFromHarm.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Martyr</h1>
    <div>blurb</div>
    <br>
    The first two moves are available to any character with an <em>ABYSS</em> of 3 or more, so long as they are willing to pay the lefthand cost.  When attuned to this persona, pay the righthand cost instead.
    <br><br>
    <BreathOfLife ruled shaded :leftLined="false"/>
    <br><br>
    <LayOnHands ruled shaded :leftLined="false"/>
    <br><br>
    To access the remaining moves, the character must be attuned to this persona.
    <br><br>
    <NobleCalling ruled shaded :leftLined="false"/>
    <br><br>
    <Philanthropist ruled shaded :leftLined="false"/>
    <br><br>
    <KeepThemFromHarm ruled shaded :leftLined="false"/>
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>