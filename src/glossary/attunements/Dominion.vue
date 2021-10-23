<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import Cower from '@/glossary/moves/Cower.vue';
    import Kneel from '@/glossary/moves/Kneel.vue';
    import Presence from '@/glossary/moves/Presence.vue';
    import TheBoss from '@/glossary/moves/TheBoss.vue';
    import Puppets from '@/glossary/moves/Puppets.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Dominion</h1>
    <div>blurb</div>
    <br>
    The first two moves are available to any character with an <em>ABYSS</em> of 3 or more, so long as they are willing to pay the lefthand cost.  When attuned to this persona, pay the righthand cost instead.
    <br><br>
    <Cower ruled shaded :leftLined="false"/>
    <br><br>
    <Kneel ruled shaded :leftLined="false"/>
    <br><br>
    To access the remaining moves, the character must be attuned to this persona.
    <br><br>
    <Presence ruled shaded :leftLined="false"/>
    <br><br>
    <TheBoss ruled shaded :leftLined="false"/>
    <br><br>
    <Puppets ruled shaded :leftLined="false"/>
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>