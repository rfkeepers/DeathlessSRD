<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import Putty from '@/glossary/moves/Putty.vue';
    import SkinWalker from '@/glossary/moves/SkinWalker.vue';
    import AnythingYouWantMeToBe from '@/glossary/moves/AnythingYouWantMeToBe.vue';
    import UncannyResemblence from '@/glossary/moves/UncannyResemblence.vue';
    import Doppelganger from '@/glossary/moves/Doppelganger.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Chameleon</h1>
    <div>blurb</div>
    <br>
    The first two moves are available to any character with an <em>ABYSS</em> of 3 or more, so long as they are willing to pay the lefthand cost.  When embodying this persona, pay the righthand cost instead.
    <br><br>
    <Putty ruled shaded :leftLined="false"/>
    <br><br>
    <SkinWalker ruled shaded :leftLined="false"/>
    <br><br>
    To access the remaining moves, the character must embody this persona.  
    <br><br>
    <AnythingYouWantMeToBe ruled shaded :leftLined="false"/>
    <br><br>
    <UncannyResemblence ruled shaded :leftLined="false"/>
    <br><br>
    <Doppelganger ruled shaded :leftLined="false"/>
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>