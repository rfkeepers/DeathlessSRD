<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import AndForMyNextTrick from '@/glossary/moves/AndForMyNextTrick.vue';
    import RabbitInTheHat from '@/glossary/moves/RabbitInTheHat.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Magician</h1>
    <div>blurb</div>
    <br>
    <AndForMyNextTrick ruled shaded :leftLined="false"/>
    <br><br>
    <RabbitInTheHat ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        'While passing through town, _____________ watched you perform.  Ask them if they were dazzled or unimpressed by the show.',
        'For a long time, _____________ helped you run your show.  Ask them if they ever divulged your secrets to someone else.  Whether they did or not, tell them if you believed they did.',
        'You used to be an employee of _____________.  Ask them if they indulged your penchant for showing off.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'the stooge that you planted in the the audience.',
        'your personal servant.',
        'someone who sought to chase you out of town.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>