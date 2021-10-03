<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'Dismantle';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="dismantle" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>pick a lock or disarm a trap</b>, the MC picks one from the Requirements list.  If you meet or agree to those terms, <Roll skill/>.  <em>S:</em> Choose one outcome.  <em>P:</em> Choose two outcomes.
        <br><br>
        Requirements:
        <Options bullet="⇀" :options="[
            'It needs a specialized tool.  If you don\'t have it, the MC will tell you where you could get it.',
            'Someone is going to find the result, and they\'ll know it was you.',
            'A secondary system gets tripped in the process.  The result may not be obvious or immediate.',
            'Nothing.',
        ]" />
        <br>
        Outcomes:
        <Options bullet="⇀" :options="[
            'It takes a long time.',
            'It consumes some resources.',
            'Someone is Harmed, something is damaged, or you trigger a noisy alarm.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Having a move for picking locks and disarming traps always seemed to me like having a move for solving a puzzle.  The very nature of those things is to provide impediment.  For narrative games to offer locks and lock picking moves both is something of a zero-sum situation.  I figure, if the MC wants a lock in the way then, sure, some character should have the opportunity to shine and pick it.  But an impediment is an impediment, and one of the mc principles in deathless is that everything has a cost.
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