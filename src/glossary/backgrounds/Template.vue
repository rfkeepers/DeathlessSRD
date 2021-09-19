<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";

const moveOpts = [
    'opt 1',
    'opt 2',
    'opt 3',
];
</script>

<!-- ============================== Template ============================== -->
<template>
<div>I am the background template.  Below I will describe the template moves.</div>
<Move id="template" ruled>
    <template v-slot:name>Template</template>
    <template v-slot:body>
        I will state the move here
        <Options :options="moveOpts"/>
    </template>
    <template v-slot:example>
        
        <h3 class="lineTo">Outcomes</h3>
        <div class="quote"><i>{{moveOpts[0]}}</i></div>
        Describe opt 1
        <div class="quote"><i>{{moveOpts[1]}}</i></div>
        Describe opt 2
        <div class="quote"><i>{{moveOpts[2]}}</i></div>
        Describe opt 3
        <h3 class="lineTo">In Play</h3>
        <div class="playExample miniBorder">
        <p>someone says something.</p>
        <p>someone rolls <b>the move</b>.</p>
        <p>the rules play out.</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>