<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";

const name = 'Yarn';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>tell an old tale, myth, or koan</b> to turn a character away from their current course of action and towards the right path...
        <options bullet="⇀" :options="[
            'if they heed your advice, erase one of your Pains.',
            'if they ignore your advice, and that character is a...',
        ]">
            <template v-slot:subslot-1>
                <Options bullet="❍" :options="[
                    'NPC, they are doomed to fail.',
                    'PC, they gain one Resilience.',
                ]" />
            </template>
        </Options>
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        Not yet certain whether this move works without a roll.  Alternatively, it could be played against NPCs as "roll GLAMOUR.  S: they follow your advice, erase a Pain.  P: They only heed the warning temporarily."  That might do a little too much to replace Persuade altogether, though, unless the table was very strict about the concept of turning the character towards "the right path".
        <br><br>
        This is also one of the few background moves to have PC-facing rules.  That part, I think, has to stay, because it's where I came up with the move in the first place.  It was harder to fit it around the NPC handling.
        <h3 class="lineTo indent">In Play</h3>
        <div class="playExample miniBorder">
        <p>Ewan says, "Have you heard this story? A man injures his leg during a hunt. He's in the middle of the Savanah. No means to treat the wound, the leg rots and death approaches. Last minute, he's picked up by an airplane, he looks down and sees a land of pure white below him. Glistening in the light. It's the summit of a snowcap mountain. The mountain is Killamanjaro. As he gazes down he feels the life flowing out of him and he thinks... that was where I was headed..."</p>
        <p>"And?" Micah sighs.</p>
        <p>"I hate stories like that."</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
:deep(.option .option__standard) {
    color: $color-z-pop;
}
</style>