<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import CloakOfShadows from '@/glossary/moves/CloakOfShadows.vue';
    import BodyDouble from '@/glossary/moves/BodyDouble.vue';
    import Ghost from '@/glossary/moves/Ghost.vue';
    import SneakThief from '@/glossary/moves/SneakThief.vue';
    import SelfPreservation from '@/glossary/moves/SelfPreservation.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Shadewalker</h1>
    <div>blurb</div>
    <br>
    The first two moves are available to any character with an <em>ABYSS</em> of 3 or more, so long as they are willing to pay the lefthand cost.  When attuned to this persona, pay the righthand cost instead.
    <br><br>
    <CloakOfShadows ruled shaded :leftLined="false"/>
    <br><br>
    <BodyDouble ruled shaded :leftLined="false"/>
    <br><br>
    To access the remaining moves, the character must be attuned to this persona.
    <br><br>
    <Ghost ruled shaded :leftLined="false"/>
    <br><br>
    <SneakThief ruled shaded :leftLined="false"/>
    <br><br>
    <SelfPreservation ruled shaded :leftLined="false"/>
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>