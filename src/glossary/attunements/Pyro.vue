<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import PlayingWithFire from '@/glossary/moves/PlayingWithFire.vue';
    import Fireball from '@/glossary/moves/Fireball.vue';
    import Immolate from '@/glossary/moves/Immolate.vue';
    import FanTheFlames from '@/glossary/moves/FanTheFlames.vue';
    import TwistedFirestarter from '@/glossary/moves/TwistedFirestarter.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Pyro</h1>
    <div>blurb</div>
    <br>
    The first two moves are available to any character with an <em>ABYSS</em> of 3 or more, so long as they are willing to pay the lefthand cost.  When attuned to this persona, pay the righthand cost instead.
    <br><br>
    <PlayingWithFire ruled shaded :leftLined="false"/>
    <br><br>
    <Fireball ruled shaded :leftLined="false"/>
    <br><br>
    To access the remaining moves, the character must be attuned to this persona.
    <br><br>
    <Immolate ruled shaded :leftLined="false"/>
    <br><br>
    <FanTheFlames ruled shaded :leftLined="false"/>
    <br><br>
    <TwistedFirestarter ruled shaded :leftLined="false"/>
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>