<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import CriminalConnections from '@/glossary/moves/CriminalConnections.vue';
    import EasyPrey from '@/glossary/moves/EasyPrey.vue';
    import ThievesCant from '@/glossary/moves/ThievesCant.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Thief</h1>
    <div>blurb</div>
    <br>
    <CriminalConnections ruled shaded :leftLined="false"/>
    <br><br>
    <EasyPrey ruled shaded :leftLined="false"/>
    <br><br>
    <ThievesCant ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        'You\'re aware of the connections _____________ has to underworld organizations.  Ask them to describe one of these connections, and then tell them if you ever handled their business personally.',
        'You and _____________ are acquainted, though you don\'t know if they are aware of your profession.  Ask them if they\'re aware that you\'re part of the underworld, then tell them if you ever secretly stole from them.',
        '_____________ and you were childhood friends for many years, until something pulled you apart.  Ask or tell them what it was.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'someone you chat with most mornings at a cafe.',
        'your only child to have survived.',
        'the home owner whose room you rented.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>