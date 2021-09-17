<!-- ============================== Script ============================== -->
<script setup>
const props = defineProps({
    options: {
        type: Array,
        description: "Array of string options values.",
    },
    bullet: {
        type: String,
        description: "Custom bullet character prepended to all options.",
    },
    bulletSize: {
        type: String,
        description: "Font size of the custom bullet.",
        default: "1em",
    },
    bulletWidth: {
        type: String,
        description: "Width of the bullet spacing, for alignment of text.",
        default: "auto",
    },
    prefixes: {
        type: Array,
        description: "Array of string prefixes for option values.",
    },
    selectable: {
        type: Boolean,
        description: "Renders a checkbox for each option, instead of a dot.",
    },
});

const prefixed = props.prefixes && props.prefixes.length > 0;
const standard = !props.bullet && !prefixed && !props.selectable;

const customStyle = {
    'font-size': props.bulletSize,
    'width': props.bulletWidth,
};
</script>

<!-- ============================== Template ============================== -->
<template>
<div class="options">
    <ul class=options__list>
        <li class="options__list__item">
            <ul
                v-for="(opt, idx) in options"
                :key="opt"
                class="option"
            >
                <span v-if="standard" class="option__standard" :style="customStyle">●</span>
                <span v-if="selectable" class="option__selectable" :style="customStyle">▢</span>
                <span v-if="bullet" class="option__custom" :style="customStyle">{{bullet}}</span>
                <span v-if="prefixed" class="option__prefix" :style="customStyle">{{prefixes[idx]}}</span>
                <span class="option__text">{{opt}}</span>
            </ul>
        </li>
    </ul>
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
.options {
    &__list {
        &__item {
            margin-top: 16px;
        }
    }
}

.option {
    display: flex;
    &:not(:last-child) {
        padding-bottom: 8px;
    }

    &__standard {
        font-size: 1.25em;
        padding-right: 8px;
    }

    &__selectable {
        font-size: 1.75em;
        padding-right: 8px;
    }

    &__custom {
        padding-right: 8px;
    }

    &__prefix {
        padding-right: 8px;
    }

    &__text {
        // included in case the caller wants to deep change the text styling for reasons like alignment.
    }
}
</style>