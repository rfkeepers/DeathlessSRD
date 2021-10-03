<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";

const name = 'Substances';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="substances" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 1 Abyss / 2 Resilience</template>
    <template v-slot:body>
        When you <b>add your blood to food and drink</b> it turns poisonous.  Consuming the poison causes one of the following results (your choice):
        <Options bullet="⇀" :options="[
            'hallucenations',
            'euphoria',
            'illness',
            'paranoia',
            'drowsiness',
        ]" />
        <br>
        The MC also chooses one of these:
        <Options bullet="⇀" :options="[
            'The effects are severe and short-lived.',
            'The poison cannot be concealed.',
            'A large quantity needs to be consumed.',
            'It will take time for the effects to kick in.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>

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