<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import ContestOfStrength from '@/glossary/moves/ContestOfStrength.vue';
    import Taunt from '@/glossary/moves/Taunt.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Wrestler</h1>
    <div>blurb</div>
    <br>
    <ContestOfStrength ruled shaded :leftLined="false"/>
    <br><br>
    <Taunt ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        'You once bested _____________ in a contest.  Ask them what the contest involved, then tell them if you ever gloated about the victory in front of them.',
        '_____________ knew you before you realized your full strength and potential.  You\'ve changed a lot since then.  Ask them to describe one part of your personality that\'s no longer there.',
        'You once used your strength to help out _____________ with a seemingly impossible task, and then you left.  Ask them if they remember you from that day.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'someone who helped you get a steady job.',
        'a drinking buddy that constantly got into fights.',
        'your agent.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>