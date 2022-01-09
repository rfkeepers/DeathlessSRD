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
        When you <b>die</b>, you awaken deep within the Abyss.  Always:
        <Options bullet="⇀" :options="[
            'Gaze into the Abyss. (todo, maybe change to something investigating your woes.',
            'Heal your Wounds.  Ask the MC which ones become Scars.',
            'Erase all of your Pains.',
            'Set your Resilience to 1.',
            'Add one mark towards drowning in The Abyss (todo, what to call this?).',
            'Tell the table about a small memory of your past, now lost forever (todo, loop back in to woes?).',
        ]" />
        <br>
        And if you destroyed your old body, also:
        <Options bullet="⇀" :options="[
            'Heal all your Wounds, Scars, and Conditions.',
            'Clear your character sheet of all inventory and equipment that you had in your possession (unless the MC says otherwise).',
            'If you have aged, revert to your age at the time of your first death.',
            'Add two more marks towards drowning in The Abyss (again todo).',
        ]" />
        <br>
        Finally, when you regain consciousness in your body, ask the MC:
        <Options bullet="⇀" :options="[
            'Where you are.',
            'How long you were out.',
            'If you still have everything in your possession.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        There's a lot that goes into dieing.  As, I suppose, there should be.  I don't feel there's much to say about this move.  It's more a thing to help recordkeeping stay straight than anything else.
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