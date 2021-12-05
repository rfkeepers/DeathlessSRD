<!-- ============================== Script ============================== -->
<script setup>
import Options from "@/components/Options.vue";

</script>

<!-- ============================== Template ============================== -->
<template>
<div>
The d8 die gets counted towards your results like normal: 5 and above add to your success, everything else does not.  Additionally, the d8 carries further risks of its own.
<Options bullet="⇀" :options="[
    'If you roll a Partial Success or Miss, and this die lands on 1 or 2, the MC will introduce an additional complication or badness.',
    'If you roll a Hit, and this die lands on a 7 or 8, you go overboard or take things too far, ask or tell the MC how.',
]" />
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>