<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Trap';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>set a trap</b> for someone or something, <Roll insight/>.
        <SHPM :options="[
            'Whatever you catch in the trap is unable to break free, cannot put up a fight when you get close, and does or does not receive an Injury (your choice).',
            'Pick one.  Whatever you caught...',
        ]">
            <template v-slot:subslot-1>
                <Options bullet="⇀" :options="[
                    'is unable to break free of the trap.',
                    'cannot put up a fight when you get close.',
                    'did not get Harmed.',
                ]" />
            </template>
        </SHPM>
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Similar to Expert Guide's question about what, exactly, can qualify as a trap for one to walk into, this move also has some wiggle room about what constitutes a trap that can be laid.  I imagine that most players will view it like I had when writing the move: a physical trap with physical containment.  But I suppose I wouldn't be bothered if a table managed to use it in a less specific format.
        <h3 class="lineTo">In Play</h3>
        <div class="playExample miniBorder">
        <p>Skipping play examples for now.</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>