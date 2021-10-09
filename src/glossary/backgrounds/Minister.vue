<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import Confession from '@/glossary/moves/Confession.vue';
    import SeekingSolace from '@/glossary/moves/SeekingSolace.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Minister</h1>
    <div>blurb</div>
    <br>
    <Confession ruled shaded :leftLined="false"/>
    <br><br>
    <SeekingSolace ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        '_____________ came to you seeking absolution for an act they had committed.  Together decide what it was they did, and what advice you gave them in response.  Then tell them if you ever revealed their confession to another person.',
        'You provided shelter to _____________ in a time of desperate need.  Ask them what troubles they were experiencing, then tell them if you ever saw them again afterward.',
        '_____________ has strong opinions about the tenants of your faith.  Ask them if they strongly agree or disagree.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'a dissenter who sought to soil your name, or the name of your faith.',
        'someone who confessed guiltily to you.',
        'your only living sibling.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>