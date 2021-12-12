<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import Connection from '@/glossary/moves/Connection.vue';
    import Spike from '@/glossary/moves/Spike.vue';
    import UnifiedConsciousness from '@/glossary/moves/UnifiedConsciousness.vue';
    import Resonance from '@/glossary/moves/Resonance.vue';
    import OpenChannel from '@/glossary/moves/OpenChannel.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Empath</h1>
    <div>blurb</div>
    <br>
    The first two moves are available to any character with an <em>ABYSS</em> of 3 or more, so long as they are willing to pay the lefthand cost.  When embodying this persona, pay the righthand cost instead.
    <br><br>
    <Connection ruled shaded :leftLined="false"/>
    <br><br>
    <Spike ruled shaded :leftLined="false"/>
    <br><br>
    To access the remaining moves, the character must embody this persona.
    <br><br>
    <UnifiedConsciousness ruled shaded :leftLined="false"/>
    <br><br>
    <Resonance ruled shaded :leftLined="false"/>
    <br><br>
    <OpenChannel ruled shaded :leftLined="false"/>
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>