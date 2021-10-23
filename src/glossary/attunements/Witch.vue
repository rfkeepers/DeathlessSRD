<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import Hex from '@/glossary/moves/Hex.vue';
    import Effigy from '@/glossary/moves/Effigy.vue';
    import Retribution from '@/glossary/moves/Retribution.vue';
    import StraddleTheBorder from '@/glossary/moves/StraddleTheBorder.vue';
    import BadKarma from '@/glossary/moves/BadKarma.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Witch</h1>
    <div>blurb</div>
    <br>
    The first two moves are available to any character with an <em>ABYSS</em> of 3 or more, so long as they are willing to pay the lefthand cost.  When attuned to this persona, pay the righthand cost instead.
    <br><br>
    <Hex ruled shaded :leftLined="false"/>
    <br><br>
    <Effigy ruled shaded :leftLined="false"/>
    <br><br>
    To access the remaining moves, the character must be attuned to this persona.
    <br><br>
    <StraddleTheBorder ruled shaded :leftLined="false"/>
    <br><br>
    <Retribution ruled shaded :leftLined="false"/>
    <br><br>
    <BadKarma ruled shaded :leftLined="false"/>
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>