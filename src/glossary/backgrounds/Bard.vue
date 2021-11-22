<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import Yarn from '@/glossary/moves/Yarn.vue';
    import HeartsAndMinds from '@/glossary/moves/HeartsAndMinds.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Bard</h1>
    <div>blurb</div>
    <br>
    <Yarn ruled shaded :leftLined="false"/>
    <br><br>
    <HeartsAndMinds ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options indent bullet="❍" :options="[
        '_____________ was one of your Patrons.  Ask them about the terms of their patronage.',
        'In a previous love triangle, you were rivals with _____________.  Whose affection were you two trying to win, and which of you (if either) earned their hand?',
        '_____________ is an on-and-off traveling companion.  Ask them which of you gets into the most trouble.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options indent bullet="❍" :options="[
        'a dear friend.',
        'one of your patrons.',
        'your go-to source for finding gigs.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>