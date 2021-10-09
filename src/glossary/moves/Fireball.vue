<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Fireball';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="fireball" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 1 Abyss / 3 Resilience; ( Interruptable )</template>
    <template v-slot:body>
        When you <b>pour your own life into a torrential flame</b>, mark yourself as <em>Wounded</em> then say where you hurl the roaring ball of fire. The fire rages out of control and ignites everything where it lands.  If you are already Wounded and this act would kill you, finish the move before your death.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        This is the move to which I attribute the entire design philosophy of the Attunements playbook system.  In the beginning I was desigining for a very low/no-magic space.  But, because I'm ever a fan of magical realism, I wanted to venture a little into the space without making the game <i>about</i> doing the magic.  And so I caught onto the idea of magic as an evocation of personality flaws, and that exploration led me to where I am now.
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