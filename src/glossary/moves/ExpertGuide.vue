<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Expert Guide';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        Whenver you're <b>at the lead of a group</b>, the MC will warn you of traps before you walk into them.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Traps aren't something I'd expect to see a lot of in Deathless.  It is not, after all, intended as a dungeon-delving sort of game.  So then there's the question of how loosely one can interpret the notion of a 'trap'.  Is walking into a bad situation always a trap?  Is getting drawn into an unwinnable conversation a trap?  If it is, would a <i>Hunter</i> still have the intuition to know they're walking into it, given that it doesn't involve a physical trigger?
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