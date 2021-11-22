<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Long Con';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="long_con" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you put on a costume and <b>bluff your way through</b> a role or position, <Roll insight/>.
        <SHPM :options="[
            'You do it, and everyone believes you\'re authentic.',
            'You get in, but pick one:',
        ]">
            <template v-slot:subslot-1>
                <Options bullet="⇀" :options="[
                    'Something will give you away later.',
                    'You forgot to bring something important.',
                    'The MC gets to raise the stakes.',
                ]" />
            </template>
        </SHPM>
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        I have trouble writing moves whose effects stretch out across longer periods of time.  Or perhaps that's an inherently difficult format for pbta moves.  Whatever the case, while I like this move in general, I'm not 100% certain it's working exactly the way I want to.  Or, alternatively, that I want it to be a long-form move at all.  Fun to write, but perhaps not as fun to play out. 
        <h3 class="lineTo indent">In Play</h3>
        <div class="playExample miniBorder">
        <p>Skipping play examples for now.</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>