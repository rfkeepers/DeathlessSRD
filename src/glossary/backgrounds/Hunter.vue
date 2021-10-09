<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import AllArePrey from '@/glossary/moves/AllArePrey.vue';
    import Track from '@/glossary/moves/Track.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Hunter</h1>
    <div>blurb</div>
    <br>
    <AllArePrey ruled shaded :leftLined="false"/>
    <br><br>
    <Track ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        'You used to hunt alongside _____________.  Tell them how they brought out your best qualities.  Ask them how they brought out your worst.',
        '_____________ spread rumors about your abilities throughout your hometown.  Ask them what the rumors were.',
        'You and _____________ are siblings.  Ask them if you were rivals or best friends while growing up.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'your lover, whom you nearly wed.',
        'a liege on whose land you hunted.',
        'someone that you owed a debt.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>