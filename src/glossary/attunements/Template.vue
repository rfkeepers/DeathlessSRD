<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import Cook from '@/glossary/moves/Cook.vue';
    import Imbibe from '@/glossary/moves/Imbibe.vue';
    import Immolate from '@/glossary/moves/Immolate.vue';
    import Cower from '@/glossary/moves/Cower.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The aldkfj</h1>
    <div>blurb</div>
    <br>
    These moves are available to any character with an <em>ABYSS</em> of 3 or more, so long as they are willing to pay the lefthand cost.  When attuned to this persona, pay the righthand cost instead.
    <br><br>
    <Cook ruled shaded :leftLined="false"/>
    <br><br>
    <Imbibe ruled shaded :leftLined="false"/>
    <br><br>
    The remaining moves require the character to be attuned to this persona.  
    <br><br>
    <Immolate ruled shaded :leftLined="false"/>
    <br><br>
    <Cower ruled shaded :leftLined="false"/>
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>