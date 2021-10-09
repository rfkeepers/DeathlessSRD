<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import Caches from '@/glossary/moves/Caches.vue';
    import ExpertGuide from '@/glossary/moves/ExpertGuide.vue';
    import Trap from '@/glossary/moves/Trap.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Trapper</h1>
    <div>blurb</div>
    <br>
    <Caches ruled shaded :leftLined="false"/>
    <br><br>
    <ExpertGuide ruled shaded :leftLined="false"/>
    <br><br>
    <Trap ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        '_____________ hired you to catch a most unusual game.  Ask them what it was that you trapped, and whether or not the two of you had to be secretive about the work.',
        'You were close friends with _____________ long ago, but something pushed you apart.  Ask them what it was.',
        'todo',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'a rival trapper whom you suspected had tried to steal from your caches.',
        'your first employer.',
        'someone you owe a debt to.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>