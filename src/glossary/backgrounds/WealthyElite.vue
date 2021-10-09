<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import Estate from '@/glossary/moves/Estate.vue';
    import Hobnob from '@/glossary/moves/Hobnob.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Wealthy Elite</h1>
    <div>blurb</div>
    <br>
    <Estate ruled shaded :leftLined="false"/>
    <br><br>
    <Hobnob ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        '_____________ worked on your estate for some time.  Ask them what slander the staff spread about you.',
        'Both you and _____________ sought to inherit the estate from your former master.  Obviously, you came out on top.  Ask them why they didn\'t get it.',
        'With _____________\'s help you throw ostentatious and reowned parties.  Ask them what scandals about your name they inspired.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'your ruthless cousin.',
        'someone who frequently invited themselves to stay at your estate.',
        'the lover who you knew was using you.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>