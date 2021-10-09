<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import Rally from '@/glossary/moves/Rally.vue';
    import RespectMyAuthority from '@/glossary/moves/RespectMyAuthority.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Constable</h1>
    <div>blurb</div>
    <br>
    <Rally ruled shaded :leftLined="false"/>
    <br><br>
    <RespectMyAuthority ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        'You forgave _____________ of a crime they committed.  Tell them why you let them go, then ask them if they remember that you did.',
        'You survived a hellish experience alongside _____________ and have been close ever since.  Decide together what ordeal it was you lived through.',
        'While out running the beat you met _____________ so many times that they eventually became a part of your routine.  Ask them if the routine was friendly or combative.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'your partner out on the beat.',
        'a corrupt official of greater rank.',
        'someone you caught and let go.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>