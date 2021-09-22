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
    },
    numbered: {
        type: Boolean,
        description: "Prefixes the options with increasing numbers (ex: 1. 2. ... N.).",
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
const standard = !props.bullet && !prefixed && !props.selectable && !props.numbered;

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
                <span v-if="bullet" class="option__custom" :style="customStyle">{{bullet}}</span>
                <span v-if="numbered" class="option__numbered" :style="customStyle">{{idx+1}}.&nbsp;</span>
                <span v-if="prefixed" class="option__prefix" :style="customStyle">{{prefixes[idx]}}</span>
                <span v-if="selectable" class="option__selectable" :style="customStyle">▢</span>
                <span v-if="standard" class="option__standard" :style="customStyle">●</span>
                <div class="option__text">
                    {{opt}}
                    <slot :name="`subslot-${idx}`" />
                </div>
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
            margin-top: 8px;
        }
    }
}

.option {
    display: flex;
    padding-bottom: 4px;

    &__standard {
        font-size: 1.25em;
        padding-right: 8px;
        min-width: 32px;
    }

    &__selectable {
        font-size: 1.75em;
        padding-right: 8px;
        min-width: 32px;
    }

    &__custom {
        padding-right: 8px;
        min-width: 32px;
    }

    &__prefix {
        padding-right: 8px;
        min-width: 32px;
    }

    &__text {
        // included in case the caller wants to deep change the text styling for reasons like alignment.
    }
}
</style>