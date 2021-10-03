<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";

const name = 'Return To Life';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="return_to_life" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>die</b>, awaken deep within the Abyss, then surge back to your body, you always:
        <Options bullet="⇀" :options="[
            'Gaze into the Abyss.',
            'Clear your injury.',
            'Set your Resilience to 1.',
            'Erase all Pain tags from your character sheet.',
            'Add one mark towards drowning in The Abyss.',
            'Tell the table about a small memory of your past, now lost forever.',
            'Ask the MC how long you were out.',
            'Ask the MC if you still have everything in your possession.',
        ]" />
        <br>
        And if you get an entirely new body, also:
        <Options bullet="⇀" :options="[
            'Clear your character sheet of all Wound, Scar, and Condition tags.',
            'Clear your character sheet of all inventory and equipment that you had in your possession (unless the MC says otherwise).',
            'If you have aged, revert to your age at the time of your first death.',
            'Add two more marks towards drowning in The Abyss.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        There's a lot that goes into dieing.  As, I suppose, there should be.  I don't feel there's much to say about this move.  It's more a thing to help recordkeeping stay straight than anything else.
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