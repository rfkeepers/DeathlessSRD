<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import ReadTheirTell from '@/glossary/moves/ReadTheirTell.vue';
    import ShowEm from '@/glossary/moves/ShowEm.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Gambler</h1>
    <div>blurb</div>
    <br>
    <ReadTheirTell ruled shaded :leftLined="false"/>
    <br><br>
    <ShowEm ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        'You and _____________ once fought over something of great importance.  Ask them what it was, then tell if you still resent the outcome.',
        'You and _____________ are related by blood, though perhaps distantly.  Ask them if the family is ashamed of you.',
        'You watched _____________ live an enviable life from afar.  Tell them what they had that you envied.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'todo',
        'todo',
        'todo',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>