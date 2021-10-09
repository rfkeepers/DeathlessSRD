<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import Seduce from '@/glossary/moves/Seduce.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Fatale</h1>
    <div>blurb</div>
    <br>
    <Seduce ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        '_____________ (or someone close to them) once fell for your charms.  Ask them what they were looking for on that night, then tell them what you gave them and what you took from them.',
        'Despite your standareds, you fell for _____________ (or someone close to them).  Tell them what about them made you weak.  Then ask them whether you disappeared first or if they did.',
        'You\'ve relied on _____________ many times in the past, and trust them completely.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'a companion you could trust in any con.',
        'someone who was off limits.',
        'your favorite sibling.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>