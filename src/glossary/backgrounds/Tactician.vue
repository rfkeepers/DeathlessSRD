<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import KnowYourEnemy from '@/glossary/moves/KnowYourEnemy.vue';
    import ThePlan from '@/glossary/moves/ThePlan.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Tactician</h1>
    <div>blurb</div>
    <br>
    <KnowYourEnemy ruled shaded :leftLined="false"/>
    <br><br>
    <ThePlan ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        'In the last war, you led _____________ and other soldiers into battle.  Ask them what the troops thought of you, and whether or not they hid that opinion from you.',
        'todo',
        'todo',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'someone with dirt on you.',
        'the sparring partner you almost killed.',
        'your spouse and advisor.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>