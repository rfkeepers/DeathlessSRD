<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import Backtrack from '@/glossary/moves/Backtrack.vue';
    import AllAsFated from '@/glossary/moves/AllAsFated.vue';
    import Omniscience from '@/glossary/moves/Omniscience.vue';
    import Curiosity from '@/glossary/moves/Curiosity.vue';
    import Pragmatic from '@/glossary/moves/Pragmatic.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Sightseer</h1>
    <div>blurb</div>
    <br>
    The first two moves are available to any character with an <em>ABYSS</em> of 3 or more, so long as they are willing to pay the lefthand cost.  When attuned to this persona, pay the righthand cost instead.
    <br><br>
    <Backtrack ruled shaded :leftLined="false"/>
    <br><br>
    <AllAsFated ruled shaded :leftLined="false"/>
    <br><br>
    To access the remaining moves, the character must be attuned to this persona.
    <br><br>
    <Omniscience ruled shaded :leftLined="false"/>
    <br><br>
    <Curiosity ruled shaded :leftLined="false"/>
    <br><br>
    <Pragmatic ruled shaded :leftLined="false"/>
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>