<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import SacredRites from '@/glossary/moves/SacredRites.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Rituralist</h1>
    <div>blurb</div>
    <br>
    <SacredRites ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        'You had a business relationship with _____________.  Ask them if you were the only person willing to do the job, or if they sought you out from other competition.',
        '_____________ used to frequent you to hear their fortunes.  Then one day they stopped coming.  Ask them what you said or did to make them avoid you.',
        'You lived outside the lives of the regular community.  Ask _____________ and _____________ what rumors those people whispered about you.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'someone who shouldn\'t have fucked with you.',
        'your loving parents.',
        'the wealthy noble who frequented your business.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>