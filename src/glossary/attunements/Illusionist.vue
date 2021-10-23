<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import Simulacra from '@/glossary/moves/Simulacra.vue';
    import Simulation from '@/glossary/moves/Simulation.vue';
    import Dreamlike from '@/glossary/moves/Dreamlike.vue';
    import BadFaith from '@/glossary/moves/BadFaith.vue';
    import SilverTongued from '@/glossary/moves/SilverTongued.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Illusionist</h1>
    <div>blurb</div>
    <br>
    The first two moves are available to any character with an <em>ABYSS</em> of 3 or more, so long as they are willing to pay the lefthand cost.  When attuned to this persona, pay the righthand cost instead.
    <br><br>
    <Simulacra ruled shaded :leftLined="false"/>
    <br><br>
    <Simulation ruled shaded :leftLined="false"/>
    <br><br>
    To access the remaining moves, the character must be attuned to this persona.
    <br><br>
    <Dreamlike ruled shaded :leftLined="false"/>
    <br><br>
    <BadFaith ruled shaded :leftLined="false"/>
    <br><br>
    <SilverTongued ruled shaded :leftLined="false"/>
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>