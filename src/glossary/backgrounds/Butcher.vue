<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import DayJob from '@/glossary/moves/DayJob.vue';
    import Tendons from '@/glossary/moves/Tendons.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Butcher</h1>
    <div>blurb</div>
    <br>
    <DayJob ruled shaded :leftLined="false"/>
    <br><br>
    <Tendons ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        'Customers came to you for rare (and sometimes illegal) meats, and you depended on _____________ for its supply.  Ask them if you still owe them any debts.',
        '_____________ has been on the receiving end of your bad behavior outside of work.  Ask them what you did to them, and tell them why they pissed you off.',
        '_____________ knew your reputation and was always keen to stay out of your way.  Ask them what they were afraid of.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'a nosy official.',
        'your only child. ',
        'someone who wronged you.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>