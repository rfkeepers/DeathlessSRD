<!-- ============================== Script ============================== -->
<script setup>
import { ref } from 'vue';
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Template';
const stat = 'STAT';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>do the move</b> and need to learn the consequences, <Roll>{{stat}}</Roll>.
        <SHPM :options="[
            's move option.',
            'p move option.',
        ]">
            <template v-slot:subslot-1>
                <Options bullet="⇀" :options="[
                    'partial success option 1.',
                    'partial success option 2.',
                ]" />
            </template>
        </SHPM>
        <br>
        When you do it to another PC, <Roll>{{stat}}</Roll>.  
        <SHPM use="spm" :options="[
            's pvp option.',
            'p pvp option.',
            'm pvp option.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Outcomes</h3>
        <div class="quote"><i>s move option.</i></div>
        Describe s opt
        <div class="quote"><i>p move option.</i></div>
        Describe p opt
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