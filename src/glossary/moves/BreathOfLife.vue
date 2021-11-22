<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Breath Of Life';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="breath_of_life" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 1 Abyss / 2 Resilience</template>
    <template v-slot:body>
        When you <b>collect your vitality within a deep inhalation</b>, and expel it onto another character, mark yourself as <em>Wounded</em> and restore their Injuries in turn.  If this wound will kill you, finish the move before you die.
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        Healing, mechanically, loses its luster in a game that doesn't center much on health, in the video-gamey sense.  As in, in a game like Deathless, the point is to avoid notions like, "the party needs a healer to survive the ____".  Endurance and durability within a dungeon isn't the game.  But still, I think healing is so central to living, especially when investigating nastiness and hurt and death, that I can't leave the topic alone.  So how to handle it?  This attunement went down the "healing as self sacrifice" path.  There are lots of other areas it could have gone.  But this particular investigation, I think, keeps stride with the atmosphere of the game: everything has a cost, and it should investigate the difficult notions that fantasy sweeps away.
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