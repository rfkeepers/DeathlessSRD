<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import ForgeSlag from '@/glossary/moves/ForgeSlag.vue';
    import StrikingTheAnvil from '@/glossary/moves/StrikingTheAnvil.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Smithy</h1>
    <div>blurb</div>
    <br>
    <ForgeSlag ruled shaded :leftLined="false"/>
    <br><br>
    <StrikingTheAnvil ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        'You forged a unique and valuable item for _____________.  Ask them if they ordered the item from you or if they inspired yout to make it for them as a gift, then tell them what made its creation so special.',
        '_____________ was an apprentice of yours until you booted them from your forge.  Ask them why you tossed them out, then tell them if you have a lingering temper about it.',
        'For years the town spread a scandalous rumor about you and _____________.  Ask them what the rumor was, then say if there was any truth to it.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'your rival across town.',
        'someone who still owes you money.',
        'the tavern drunkard who always wanted a fight.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>