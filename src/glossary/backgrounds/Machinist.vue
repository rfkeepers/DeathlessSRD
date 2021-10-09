<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import Dismantle from '@/glossary/moves/Dismantle.vue';
    import JuryRig from '@/glossary/moves/JuryRig.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Machinist</h1>
    <div>blurb</div>
    <br>
    <Dismantle ruled shaded :leftLined="false"/>
    <br><br>
    <JuryRig ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        'You once fixed something of _____________\'s that was precious and broken.  Ask them what it was and whether you made the repair freely out of kindness, or if you charged them severely.',
        'When you first arrived in town, weary and friendless, it was _____________ who helped you start your life anew.',
        'You were lovers, for a time, with _____________ (or someone close to them).  Decide together how long your relationship lasted and what problem, in the end, you couldn\'t fix.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'someone who you could never stop thinking about.',
        'your business partner.',
        'a child whom you caught trying to steal.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>