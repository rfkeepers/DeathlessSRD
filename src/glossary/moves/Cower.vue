<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Cower';
</script>
<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 2 Abyss / 2 Resilience</template>
    <template v-slot:body>
        When you reach out to another character's mind and <b>twist their perception of you</b> in this moment, <Roll force/>.
        <SHPM use="hp" :options="[
            'Pick one:',
            'The MC picks one:',
        ]">
            <template v-slot:subslot-0>
                <Options bullet="⇀" :options="[
                    'They feel weak and insignificant in your presence.',
                    'You seem to tower over them, great and terrible.',
                ]" />
            </template>
            <template v-slot:subslot-1>
                <Options bullet="⇀" :options="[
                    'This perception will not persist for long.',
                    'They resent you for this, and will actively work to seek revenge.',
                ]" />
            </template>
        </SHPM>
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        I like this move so far, but the Hit options need to change.  Right now they're inverses of each other (when you are great, they are small), so picking one is effectively the same as picking the other.  They need some narrative distance to crystalize good scenery around them.
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