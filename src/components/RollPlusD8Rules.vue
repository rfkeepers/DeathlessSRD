<!-- ============================== Script ============================== -->
<script setup>
import Options from "@/components/Options.vue";
defineProps({
    opposed: {
        type: Boolean,
        description: "displays the d8 rolling rules for an opposed roll, instead of an augment",
    },
});
</script>

<!-- ============================== Template ============================== -->
<template>
<div v-if="opposed">
The d8 die gets rolled on its own.  On a 5 and above, the other roll steps down one tier: a Success becomes a Partial Success, a Partial becomes a Miss.  On a 4 or less, nothing happens.  Additionally, the d8 exposes you to extra risks of its own.
<Options bullet="⇀" :options="[
    'On a 1 or 2, the MC introduces an additional an complication or badness.',
    'On a 7 or 8, you go overboard or take things too far, ask or tell the other Player how.',
]" />
</div>
<div v-else>
The d8 die gets counted towards the results like normal: 5 and above add to the success, everything else does not.  Additionally, the d8 exposes extra risks of its own.
<Options bullet="⇀" :options="[
    'On a Partial Success or Miss, if the d8 lands on 1 or 2, the MC introduces an additional complication or badness.',
    'On a Hit, if this die lands on a 7 or 8, you go overboard or take things too far, ask or tell the MC how.',
]" />
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>