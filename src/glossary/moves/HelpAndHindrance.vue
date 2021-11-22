<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";

const name = 'Help and Hindrance';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="help_and_hindrance" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When <b>two PCs want to act at the same time</b>, either to help each other out or to prevent each other from succeeding, and no moves are already tailored to handle the situation, both players hold their dice outstretched in their fist while (one at a time) they explain their actions to the MC.  It is the MC's job to decide if both players roll their dice at the same time, or one before the other.  It is each player's job to ensure everyone knows they'd like to act at the same time as another player.  If another player already has the spotlight, silently showing a raised hand to the table is the appropriate way to let everyone know you'd like to take part.  If the player with the spotlight rolls before any other player makes it known they'd like to join the action, that result is set and cannot be changed.
        <br><br>
        Simultaneous action must abide one of the following situations:
        <Options bullet="⇀" :options="[
            'Enabling: if an action cannot be attempted or completed by one player alone, it might be doable by two or more working together.',
            'Aid: when one player could do the act alone, but two or more provides a greater chance of success.',
            'Interference: when one player attempts to prevent another player\'s success.',
        ]">
            <template v-slot:subslot-0>
                <div class="hint">One player is selected to lead the roll.  If they roll a Partial success or a Miss, the MC gets to make a move against all characters involved.</div>
            </template>
            <template v-slot:subslot-1>
                <div class="hint">The player being aided gains 1 Die to their roll.  If they roll a Partial success or a Miss, the MC gets to make a move against all characters involved.</div>
            </template>
            <template v-slot:subslot-2>
                <div class="hint">Both players roll.  The player with the highest roll narrates the results (at least initially).  If either one rolls a Partial success or a Miss, the MC gets to make a move against all characters involved.</div>
            </template>
        </Options>
        <br>
        Determining the highest roll when multiple rolls are made:
        <Options numbered :options="[
            'The player who rolled the most successful dice has the highest roll.',
            'If both players rolled an equal number of successful dice, the player who rolled the highest die value has the highest roll.',
            'If still equal, the player who rolled the most dice has the highest roll.',
            'Otherwise, discard the result and roll again.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        I'm not even sure I'd call this a move.  But, since it involves <i>handling moves</i>, I figure I can lump it all together.
        <h3 class="lineTo indent">In Play</h3>
        <div class="playExample miniBorder">
        <p>Skipping play examples for now.</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
:deep(.option .option__numbered) {
    font-weight: 900;
    padding-right: 0;
    color: $color-z-pop;
}
</style>