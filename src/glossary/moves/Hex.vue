<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import RollAbyssRules from "@/components/RollAbyssRules.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Template';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="hex" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:preconditions>Cost: 2 Abyss / 2 Resilience</template>
    <template v-slot:body>
        When you <b>utter a curse that summons the Abyss and warps a living creature</b>, describe the curse to the MC and <Roll abyss/>.  A curse may change the way a creature sounds, appears, or feels.  It may not deal Harm, cause illness, or permanently cripple.  Curses are only lifted by the first light of the sun on the next morning.
        <br><br>
        <RollAbyssRules>lash out against being used.  The MC describes how the curse falters or takes on unintended effects</RollAbyssRules>
        <br>
        Example curses:
        <Options bullet="⇀" :options="[
            'They grow an animal’s features (such as a tail, ears, or scales).',
            'They only make animal noises (alternatively for animals: human noises).',
            'Anyone who sees them thinks they look monstrous or grotesque.',
            'Their skin sags and wrinkles or grows boils everywhere.',
            'They gain a rattling cough, and will eventually hack up a spider or centipede.',
            'They have an aura of stench and nauseating halitosis.',
            'Animals in their presence panic, flee, or intimidate them.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        Another move I stole from prior Dungeon World playbooks.  At the time I both really wanted to explore the move itself again, to give it some breathing room in a system that isn't focused so directly on fantasy combat.  I also chose it because, at that time, I imagined that every persona would be rolling a particular stat, and I hadn't changed the way rolling against the Abyss works, and wanted an Abyss-based persona.  Almost all of those mechanics and constants have changed at this point.  Reviewing the move again, although I enjoy the potential horror of it, I'm not sure it's diving into the game's theme of backing fantasy tropes with foibles in the way the other personas are.  Perhaps this is too critical of me, but I really want the move to evoke the character lashing out with thier negative feelings in a way that brings horror into the world, and I'm no longer sure this is it.
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