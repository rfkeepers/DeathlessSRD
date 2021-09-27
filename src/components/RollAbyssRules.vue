<!-- ============================== Script ============================== -->
<script setup>
import Options from "@/components/Options.vue";

</script>

<!-- ============================== Template ============================== -->
<template>
<div>
If you <em>roll above your current ABYSS</em>, the depths return your gaze.  The MC describes a vision that painfully stresses comprehension, then you choose 1: (thoughts, maybe just choose one and let the mc decide if its a vision that painfully stresses comprehension).
<Options bullet="⇀" :options="[
    'The Abyss takes from you, add one mark of the Abyss.',
    'You take something back with you, the MC will say what it is.',
    'You give something to the Abyss, which will circulate again into the world.  What is it?',
]" />
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>