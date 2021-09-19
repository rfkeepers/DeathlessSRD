<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import S from "@/components/S.vue";
import Options from "@/components/Options.vue";

const moveOpts = [
    'Neither of you succeed: whatever you sought is still there and neither of you have it.',
    'You take it from them, but they take something from you as well.',
];
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template">
    <template v-slot:name>Seduce</template>
    <template v-slot:body>
        When you <b>seize or break</b> something which a character won’t give to you willingly (an item, a belief, their position, their authority, etc), roll <S>FORCE</S>.  S: You take it from them or destroy it entirely.  P: You or the MC choose one.
        <Options :options="moveOpts"/>
        <br>
        When you Overwhelm another PC, roll <S>FORCE</S>.  S: They must spend 1 Resilience or let you get what you wanted. P: They choose one of the options. M: They keep a firm hold of it, and take something from you as well.
    </template>
    <template v-slot:example>
        
        <h3 class="lineTo">Outcomes</h3>
        <div class="quote"><i>{{moveOpts[0]}}</i></div>
        Describe opt 1
        <div class="quote"><i>{{moveOpts[1]}}</i></div>
        Describe opt 2
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