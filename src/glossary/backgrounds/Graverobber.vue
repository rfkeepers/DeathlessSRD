<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import CovertDemolitionist from '@/glossary/moves/CovertDemolitionist.vue';
    import SomethingWrongOfficer from '@/glossary/moves/SomethingWrongOfficer.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Graverobber</h1>
    <div>blurb</div>
    <br>
    <CovertDemolitionist ruled shaded :leftLined="false"/>
    <br><br>
    <SomethingWrongOfficer ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        'You worked your illegal trade together with _____________.  Ask them which of you backstabbed the other first, then tell them whether the other one took revenge.',
        '_____________ was a customer or fence for your ill-gotten goods.  Ask them if they ever protected your identity from the law, or if they gave you in.',
        '_____________ thinks you were involved in the death of someone close to them.  Ask them who had died, then tell them if you took part in it.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'your spouse.',
        'the person for whom you wanted to buy a new life.',
        'someone who once caught you in the act.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>