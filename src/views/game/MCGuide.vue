<!-- ============================== Script ============================== -->
<script setup>
import Options from '@/components/Options.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
<div class="core">

    <h1 class="title">
        MC Guide
    </h1>

    <div class="spaceAbove">
        <h2 id="pbta_principles">PBTA Principles</h2>
        <div class="blurb">
            <Options bullet="⇀" :options="[
                'Begin with the fiction.',
                'Address the characters before the players.',
                'Ask questions and wield the answers.',
                'Give every character a name, need, and drives.',
                'Tell players the requirements or consequences, then ask, \'what do you do?\'.',
                'End with the fiction.',
            ]" />
        </div>
    </div>

    <div class="spaceAbove">
        <h2 id="mc_principles">MC Principles</h2>
        <div class="blurb">
            <Options bullet="⇀" :options="[
                'Fill the story with frequent strife and transient relief.',
                'Deal in costly decisions, misfortune, and trouble that always comes looking.',
                'Give nothing away freely.',
                'Make fraught situations deadly.',
                'Use the unnatural to talk about the human.',
                'Pursue accountability for the actions commmitted.',
                'something about being human and helpful.',
            ]" />
        </div>
    </div>

</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
$varname: 1;
.core {
    padding-bottom: 24px;
}
</style>