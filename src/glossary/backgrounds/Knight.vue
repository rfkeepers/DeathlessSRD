<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import ShieldCharge from '@/glossary/moves/ShieldCharge.vue';
    import Testudo from '@/glossary/moves/Testudo.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Knight</h1>
    <div>blurb</div>
    <br>
    <ShieldCharge ruled shaded :leftLined="false"/>
    <br><br>
    <Testudo ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        'In the last war, you stood side by side with _____________.  Ask them if they once saved your life, or if you once saved theirs.',
        'You served the same liege as _____________, at least for a while.  Ask them how they served that person, and decide together what secret about them you both preserved.',
        'Earlier in life you were a rival of _____________\'s.  Ask them what you contested over, then tell them whether it was a friendly or fierce relationship.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'the servant you befriended, whom also lived in service to your liege. ',
        'your secret lover.',
        'someone who never let you down.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>