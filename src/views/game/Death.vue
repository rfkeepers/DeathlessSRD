<!-- ============================== Script ============================== -->
<script setup>
import DrownInTheAbyss from '@/glossary/moves/DrownInTheAbyss.vue';
import Options from '@/components/Options.vue';
defineProps({
    embedded: {
        type: Boolean,
        description: "alters the display for when embedded into a separate page",
        default: false,
    },
});
</script>

<!-- ============================== Template ============================== -->
<template>

<h2 v-if="embedded">
    Death
</h2>
<h1
    v-else
    class="title"
>
    Death
</h1>
<h3 v-if="embedded">
    When you die.
</h3>
<h2 v-else>
    When you die.
</h2>
<Options bullet="⇀" :options="[
    'Increase your Abyss by one.',
    'Make the following move:',
    'Gaze into the Abyss. (todo, maybe change to something investigating your woes.',
    'Heal your Wounds. Ask the MC if they leave Scars.',
    'Erase all of your Pains.  Ask the MC if they leave Scars.',
]">
    <template v-slot:subslot-1>
        <DrownInTheAbyss />
    </template>
</Options>

<h3 v-if="embedded">
    If your body was irreparably damaged:
</h3>
<h2 v-else>
    If your body was irreparably damaged:
</h2>
<Options bullet="⇀" :options="[
    'Heal all your Wounds, Scars, and Conditions.',
    'Clear your character sheet of all inventory and equipment that you had in your possession (unless the MC says otherwise).',
    'If you have aged, revert to your age at the time of your first death.',
]" />

<h3 v-if="embedded">
    Finally, when you regain consciousness, ask the MC:
</h3>
<h2 v-else>
    Finally, when you regain consciousness, ask the MC:
</h2>
<Options bullet="⇀" :options="[
    'Where you are.',
    'How long you were out.',
    'If you still have everything in your possession.',
]" />

</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>
