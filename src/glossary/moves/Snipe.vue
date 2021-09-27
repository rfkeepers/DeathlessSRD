<!-- ============================== Script ============================== -->
<script setup>
import { ref } from 'vue';
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Snipe';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When your action requires <b>precision, subtlety, or precise execution</b> lest it all go wrong, <Roll skill/>.
        <SHPM :options="[
            'You accomplish what you set out to do.',
            'The MC picks one of the following:',
        ]">
            <template v-slot:subslot-1>
                <Options bullet="⇀" :options="[
                    'You have some success, but not everything you wanted.',
                    'To do it you have to put yourself or someone else in a spot.',
                    'You do what you wanted, and something extra as well, something you won\'t like.',
                    'Your target retaliates in turn.',
                ]" />
            </template>
        </SHPM>
        <br>
        When you take similar action against another PC, <Roll skill/>.  
        <SHPM use="spm" :options="[
            'You accomplish what you intended.',
            'The other player picks one of the following.',
            'You fumble it.  If the other PC is able, they have an opportunity to retaliate freely against you.',
        ]">
            <template v-slot:subslot-1>
                <Options bullet="⇀" :options="[
                    'Sacrifice something of theirs to avoid you.',
                    'Take what you\'re giving them, but retaliate or put you in a bad spot at the same time.',
                ]" />
            </template>
        </SHPM>
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        I can't stand the trigger for this move.  I've reworked it so many times and it never sits just right.  Always either too broad, "when you do something in a specific way", or too niche (and without supporting mechanics), "when you do something that only prior expertise would allow".  But I do like the general concept.  Maybe it'll end up in the kill-your-darlings drawer, if I ever have an epiphany about what a better way to use SKILL for a basic move would be.  Something with appropriate restriction.
        <br><br>
        Also, the name.  'Snipe' is such a gun-oriented term.  Which, I guess, does kinda fit in that I assume this is the skill to roll for shooting at things.  But if it leads the player in that direction, it also leads them away from other possible directions.
        <h3 class="lineTo">In Play</h3>
        <div class="playExample miniBorder">
        <p>"Two of the baron's people are coming down the street, following the sound of shattered glass.  They're being slow and thorough about it."</p>
        <p>"Well I'm screwed," Flynn says, "can't fight if I can't stand."</p>
        <p>"Can I wait just around, like, a doorway or a corner for one to walk by," Micah asks, "as soon as they appear I'm going to throw a punch.  Try to take them out in a single hit."</p>
        <p>"Sounds like a Snipe", the MC says.</p>
        <p>Micah rolls and gets a Partial success.  "Better than nothing, I guess," she says.</p>
        <p>"So you hide in some kind of shadowed enclave, and when the first one walks by you catch them square in the jaw.  Completely unaware, so they drop unconscious.  The other one is quick to react, though, and they have a knife ready.  While you're coming up from the punch they swing at you.  Add a Wound, 'slashed face', where they cut you from the cheekbone to your forehead."</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>