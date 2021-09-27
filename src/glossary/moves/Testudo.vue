<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Testudo';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you stand beside someone and <b>protect them from danger</b>, <Roll resolve/>.  So long as you both maintain position, whenever something attempts to Harm your ward you can intervene and take the Harm in their place.
        <SHPM use="sm" :options="[
            'Together you stand strong, the next incoming Harm is ignored.',
            'You fumble your defense.  When you break position, any foe capable of dealing Harm immediately does so.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        More than anything else, pbta naturally bridge the narrative and mechanical gap of a moment of movement.  Moment and Movement are both key.  The longer the span of time being handled, the less capable the move resolves it (and in this case, abstracting a long span of time into a single snapshot is the same thing as handling a Moment).  Movement goes similarly, with a little more wiggle room.  It's a matter of perspective whether you think "learning something" is a kind of movement or not, but in general, learning or remembering can be summed up as having "done a thing", in the same way movement can.  Alternatively, it's more difficult to get moves to express qualities of taking a position, or keeping a status.  Neither of those concepts are momentary, nor do they involve a single movement.
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