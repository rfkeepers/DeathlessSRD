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
    bulletStyle: {
        type: Object,
        description: "Custom css styling of the bullets.",
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

const customStyle = Object.assign({}, {'font-size': props.bulletSize}, props.bulletStyle);
if (customStyle["font-size"] === "1em" && (props.selectable || standard)) {
    delete customStyle["font-size"];
}
</script>

<!-- ============================== Template ============================== -->
<template>
<div class="options">
    <ul>
        <li class="optionList">
            <ul
                v-for="(opt, idx) in options"
                :key="opt"
                class="option"
            >
                <span v-if="standard" class="option__standard" :style="customStyle">●</span>
                <span v-if="selectable" class="option__selectable" :style="customStyle">▢</span>
                <span v-if="bullet" class="option__custom" :style="customStyle">{{bullet}}</span>
                <span v-if="prefixed" class="option__prefix" :style="customStyle">{{prefixes[idx]}}</span>
                {{opt}}
            </ul>
        </li>
    </ul>
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
ul {
    list-style-type: none;
    padding-inline-start: 0;
}

.optionList {
    margin-top: 16px;
}

.option {
    display: flex;
    // align-items: center;
    padding-bottom: 8px;

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
}
</style>