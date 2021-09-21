<!-- ============================== Script ============================== -->
<script setup>
</script>

<!-- ============================== Template ============================== -->
<template>
<router-link to="/rolling">
    <span class="roll">roll <slot /></span>
</router-link>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
.roll {
    color: var(--stat-color, #6b6e70);
}
</style>