<!-- ============================== Script ============================== -->
<script setup>
import ReturnToLife from '@/glossary/moves/ReturnToLife.vue';
defineProps({
    embedded: {
        type: Boolean,
        description: "alters the display for when embedded into a separate page",
    },
});
</script>

<!-- ============================== Template ============================== -->
<template>

<h1
    v-if="embedded"
    class="title"
>
    Death
</h1>
<h2 v-else>
    Death
</h2>
<ReturnToLife :leftLined="false" ruled shaded />

</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>
