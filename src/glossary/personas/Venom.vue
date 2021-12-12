<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import Substances from '@/glossary/moves/Substances.vue';
    import Imbibe from '@/glossary/moves/Imbibe.vue';
    // import ??? from '@/glossary/moves/???.vue';
    import Temptations from '@/glossary/moves/Temptations.vue';
    // import Intoxication from '@/glossary/moves/Intoxication.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Venom</h1>
    <div>blurb</div>
    <br>
    The first two moves are available to any character with an <em>ABYSS</em> of 3 or more, so long as they are willing to pay the lefthand cost.  When embodying this persona, pay the righthand cost instead.
    <br><br>
    <Substances ruled shaded :leftLined="false"/>
    <br><br>
    <Imbibe ruled shaded :leftLined="false"/>
    <br><br>
    To access the remaining moves, the character must embody this persona.
    <br><br>
    WIP skill.
    <!-- <??? ruled shaded :leftLined="false"/> -->
    <br><br>
    <Temptations ruled shaded :leftLined="false"/>
    <br><br>
    WIP skill.
    <!-- <Intoxication ruled shaded :leftLined="false"/> -->
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>