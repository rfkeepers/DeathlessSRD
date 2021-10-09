<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import Bail from '@/glossary/moves/Bail.vue';
    import BlackMarket from '@/glossary/moves/BlackMarket.vue';
    import TakesOneToKnowOne from '@/glossary/moves/TakesOneToKnowOne.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Smuggler</h1>
    <div>blurb</div>
    <br>
    <Bail ruled shaded :leftLined="false"/>
    <br><br>
    <BlackMarket ruled shaded :leftLined="false"/>
    <br><br>
    <TakesOneToKnowOne ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        '_____________ used to purchase your wares.  Ask them what you were selling, describe what horrible things you had to do to procure it, and then ask if they were aware of the real cost or whether they preferred to be blissfully ignorant.',
        'You used _____________\'s business as a front for your work.  Decide together whether you did this under their nose or with their help.',
        'For a while, you shared a close relationship with _____________.  Ask them how much they knew about your business, then tell them if you separated on good terms.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'your childhood friend.',
        'a contact to the underworld.',
        'someone that protected your identity after they were caught.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>