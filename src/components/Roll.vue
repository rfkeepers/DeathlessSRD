<!-- ============================== Script ============================== -->
<script setup>
const props = defineProps({
    abyss: {
        type: Boolean,
        details: "Roll details for the abyss stat.",
    },
    dice: {
        type: Boolean,
        details: 'Roll details for a specific number of dice',
    },
    plusD8: {
        type: Boolean,
        details: 'Roll details for adding a d8 risk die',
    },
    n: {
        type: Number,
        details: 'quanity of dice to roll',
        default: 0,
    },
    glamour: {
        type: Boolean,
        details: "Roll details for the glamour stat.",
    },
    force: {
        type: Boolean,
        details: "Roll details for the force stat.",
    },
    insight: {
        type: Boolean,
        details: "Roll details for the insight stat.",
    },
    resolve: {
        type: Boolean,
        details: "Roll details for the resolve stat.",
    },
    skill: {
        type: Boolean,
        details: "Roll details for the skill stat.",
    },
});
const quant = props.abyss ? '2d6 against your ABYSS'
    : props.plusD8 ? 'an additional 1d8'
    : props.dice || props.n > 0 ? `${props.n} DICE`
    : props.glamour ? 'GLAMOUR'
    : props.force ? 'FORCE'
    : props.insight ? 'INSIGHT'
    : props.resolve ? 'RESOLVE'
    : props.skill ? 'SKILL'
    : 'SOMETHING';
</script>

<!-- ============================== Template ============================== -->
<template>
<router-link to="/rolling">
    <span class="roll">roll {{quant}}</span>
</router-link>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
.roll {
    color: var(--stat-color, #6b6e70);
    font-weight: 700;
}
</style>