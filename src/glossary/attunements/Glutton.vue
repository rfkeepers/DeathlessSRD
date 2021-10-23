<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import WordsAndStonesCanBothBreakBones from '@/glossary/moves/WordsAndStonesCanBothBreakBones.vue';
    import Determination from '@/glossary/moves/Determination.vue';
    import LifeIsPain from '@/glossary/moves/LifeIsPain.vue';
    // import ??? from '@/glossary/moves/???.vue';
    import More from '@/glossary/moves/More.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Glutton</h1>
    <div>blurb</div>
    <br>
    The first two moves are available to any character with an <em>ABYSS</em> of 3 or more, so long as they are willing to pay the lefthand cost.  When attuned to this persona, pay the righthand cost instead.
    <br><br>
    <WordsAndStonesCanBothBreakBones ruled shaded :leftLined="false"/>
    <br><br>
    <Determination ruled shaded :leftLined="false"/>
    <br><br>
    To access the remaining moves, the character must be attuned to this persona.
    <br><br>
    <LifeIsPain ruled shaded :leftLined="false"/>
    <br><br>
    WIP move.
    <!-- <??? ruled shaded :leftLined="false"/> -->
    <br><br>
    <More ruled shaded :leftLined="false"/>
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>