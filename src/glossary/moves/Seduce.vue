<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import S from "@/components/S.vue";

const moveOpts = [
    'The time and place.',
    'They come alone, with others, or send people on their behalf.',
    'You can bring people with you.',
];
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template">
    <template v-slot:name>Seduce</template>
    <template v-slot:body>
        When you <b>entice someone</b> to turn their attention away from all else and come find you, roll <S>GLAMOUR</S>.  S: They'll come to you on your terms (where, when, with whom).  P: They'll meet with you, but you only control one:
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