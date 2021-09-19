<!-- ============================== Script ============================== -->
<script setup>
import Example from '@/components/Example.vue';
const props = defineProps({
    id: {
        type: String,
        description: "unique id of this move so that it can be recognized uniquely when multiples are embedded on a single page.  Preferably the move name.",
        required: true,
    },
    bordered: {
        type: Boolean,
        body: "Renders the move within a border.",
    },
    ruled: {
        type: Boolean,
        body: "Renders the move with top and bottom horizontal rules.",
    },
    shaded: {
        type: Boolean,
        body: "Renders the move within a shaded box.",
    },
});
</script>

<!-- ============================== Template ============================== -->
<template>
<div :class="{
    'move': true,
    'move--bordered': bordered,
    'move--ruled': ruled,
    'move--shaded': shaded,
}">
    <div class="move__title">
        <div class="move__name"><slot name="name"/></div>
        <div class="move__example">
            <Example :id="id">
                <template v-slot:header><slot name="name"/></template>
                <template v-slot:body><slot name="example"/></template>
            </Example>
        </div>
    </div>
    <div class="move__preconditions"><slot name="preconditions"/></div>
    <div class="move__body"><slot name="body"/></div>
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
$indent: 24px;
$indent--small: 16px; 

.move {
    padding: 12px 6% 12px 4%;

    @media screen and (max-width: 900px) {
        padding: 12px 4% 12px 4%;
    }

    &--bordered {
        border-radius: 8px;
        border: 1px solid var(--move-color-border, white);;
    }

    &--ruled {
        border-top: 1px solid var(--move-color-border, white);
        border-bottom: 1px solid var(--move-color-border, white);
    }

    &--shaded {
        background-color: var(--move-color-shaded, darkslategrey);
    }

    &__title {
        display: flex;
        justify-content: space-between;
    }

    &__name {
        font-size: 1.5em;
        font-weight: 900;
        line-height: 1.1em;
    }

    &__example {
        margin-top: 8px;
    }

    &__preconditions {
        font-style: italic;
        margin-left: $indent;
        font-size: 0.8em;

        @media screen and (max-width: 900px) {
            margin-top: 2px;
        }
    }

    &__body {
        margin-left: $indent;
        margin-top: 12px;

        @media screen and (max-width: 900px) {
            margin-left: 0;
            margin-top: 8px;
        }
    }
}
</style>