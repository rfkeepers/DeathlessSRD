<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'All As Fated';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="all_as_fated" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 3 Abyss / 3 Resilience</template>
    <template v-slot:body>
        When you <b>exclaim that the events in motion are determined and inexorable</b>, name three events happening right now (they do not need to be near you), briefly describe the future conclusion of each, and <Roll insight/>.
        <SHPM use="hsp" :options="[
            'If at all possible, the outcomes will play out exactly as you described.  The GM will decide which of the three events are true, and which ones aren\'t, and does not need to reveal which is which.  Direct interference by another PC may still alter the course of things.',
            'The MC chooses two of the three.',
            'The MC chooses one of the three.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        The concept here is fun, but I really don't know that I've put it into a move in any way that does the thing justice.  That, and, it's asking a whole lot of the MC and players.  It adds cognitive load to their plate.  Tons of cognitive load.  And I've complained about cognitive load issues on other moves, so it feels a bit disingenuous to add so much of it here.
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