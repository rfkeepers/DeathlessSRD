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
    }
});
</script>

<!-- ============================== Template ============================== -->
<template>
<div :class="{
    'move': true,
    'move--bordered': bordered,
}">
    <div class="moveTitle">
        <div class="moveName"><slot name="name"/></div>
        <div class="moveExample">
            <Example :id="id">
                <template v-slot:header><slot name="name"/></template>
                <template v-slot:body><slot name="example"/></template>
            </Example>
        </div>
    </div>
    <div class="preconditions"><slot name="preconditions"/></div>
    <div class="body"><slot name="body"/></div>
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
$indent: 24px;
$indent--small: 16px; 

.move {
    margin: 0 6% 12px 4%;

    @media screen and (max-width: 900px) {
        margin: 0 4% 12px 4%;
    }

    &--bordered {
        padding: 8px 12px 16px 12px;
        border-radius: 8px;
        border: 1px solid white;
    }
}

.moveTitle {
    display: flex;
    justify-content: space-between;

    .moveName {
        font-size: 1.5em;
        font-weight: 900;
        margin-top: 8px;
        line-height: 1.25em;
    }

    .moveExample {
        margin-top: 8px;
    }
}

.preconditions {
    font-style: italic;
    margin-left: $indent;
    font-size: 0.8em;

    @media screen and (max-width: 900px) {
        margin-top: 2px;
    }
}

.body {
    margin-left: $indent;
    margin-top: 12px;

    @media screen and (max-width: 900px) {
        margin-left: 0;
        margin-top: 8px;
    }
}
</style>