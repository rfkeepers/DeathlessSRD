<!-- ============================== Script ============================== -->
<script setup>
import Options from "@/components/Options.vue";

</script>

<!-- ============================== Template ============================== -->
<template>
<div>
If you <em>roll above your current ABYSS</em>, the depths <slot>return your gaze.  The MC describes a vision that painfully stresses comprehension</slot>, then you choose 1:
<Options bullet="⇀" :options="[
    'The Abyss takes from you; describe a memory you have lost forever.',
    'You take something back with you, the MC will say what it is.',
    'You give something to the Abyss, which will circulate again into the world.  What is it?',
]" />
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>