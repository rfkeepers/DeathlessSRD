<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import Combobulate from '@/glossary/moves/Combobulate.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Scholar</h1>
    <div>blurb</div>
    <br>
    <Combobulate ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        'You lived as a neighbor to _____________ for many years.  Ask if you used to tutor them or anyone close to them.  If you did, who was it?  If you didn\'t, why not?',
        '_____________ once came to you seeking information involving your research.  Ask them why they needed that information, then tell them if your answers produced the results they wanted.',
        '_____________ used to supply you with materials or information relevant to your research.  Ask them if this supply was obtained with legitimate or illegitimate means.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'someone that once paid you to apply your knowledge for their profit.',
        'the pupil who could never pass your courses.',
        'your academic cohort from when you were students.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>