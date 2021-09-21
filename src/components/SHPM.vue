<!-- ============================== Script ============================== -->
<script setup>
import { ref } from 'vue';
import Options from '@/components/Options.vue';
const keys = {
    h: 'H:',
    m: 'M:',
    p: 'P:',
    s: 'S:',
};
const props = defineProps({
    use: {
        type: String,
        description: `Format of the prefixes to use.
For example: 'hpm' will turn out three prefixes in that order: H: P: M:
Alternatively: 'spm' will turn out three prefixes in that order: S: P: M:
The number of options should match the quantity of options being provided.
IE: if you write three options, you should specify three characters in the Use prop.
I can't guarantee good things will happen if you don't match lengths...`,
        default: 'sp',
    },
});
const pfx = [];
for (let i = 0; i < props.use.length; i++) {
    const k = keys[props.use[i].toLowerCase()];
    if (k) pfx.push(k);
}
const prefixes = ref(pfx);
</script>
<!-- ============================== Template ============================== -->
<template>
<Options v-bind="$props" :prefixes="prefixes">
    <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData" />
    </template>
</Options>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
:deep(.option .option__prefix) {
    font-weight: 900;
    padding-right: 0;
    color: $color-z-pop;
}
</style>