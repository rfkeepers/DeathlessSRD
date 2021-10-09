<!-- ============================== Script ============================== -->
<script setup>
    import Options from "@/components/Options.vue";
    import Cook from '@/glossary/moves/Cook.vue';
    import Synthesis from '@/glossary/moves/Synthesis.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
    <h1>The Chef</h1>
    <div>blurb</div>
    <br>
    <Cook ruled shaded :leftLined="false"/>
    <br><br>
    <Synthesis ruled shaded :leftLined="false"/>
    <br><br>
    <hr>
    <br>
    <h4>Relationships with fellow players (pick one):</h4>
    <Options bullet="❍" :options="[
        'Your business as a Chef was a facade for your real work.  Together with _____________ you secretly or covertly ran another operation.  Decide the details together.',
        '_____________ supplied you with your most important (and likely rare or illegal) ingredients.  Ask them where they got their supply, and tell them what you gave in exchange.',
        'You never crossed paths with _____________, but you knew enough about them by word of mouth.  Tell them a rumor you often heard about them, and ask them if there\'s any truth to it.',
    ]" />
    <br>
    <h4>Relationships with NPCs (pick one and name them):</h4>
    <Options bullet="❍" :options="[
        'the sous chef.',
        'someone with whom you shared your secrets.',
        'an invalid you nurtured.',
    ]" />
    <br><br>
    &nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>