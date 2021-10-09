<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import CaseAJoint from '@/glossary/moves/CaseAJoint.vue';
    import LongCon from '@/glossary/moves/LongCon.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Grifter</h1>
    <div>blurb</div>
    <br>
    <CaseAJoint ruled shaded :leftLined="false"/>
    <br><br>
    <LongCon ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        'You used to run a con with _____________.  Ask them about the details, then tell them why you no longer work together.',
        'You came into knowledge of a scandalous secret involving _____________.  Ask them what the scandal was about, then say whether you kept the secret or sold it.',
        'You once targeted _____________ as a mark, but didn\'t follow through even though you could have.  Tell them why you didn\'t do it.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'someone you paid to look the other way.',
        'a friendly face.',
        'your old boss, who taught you the ropes.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>