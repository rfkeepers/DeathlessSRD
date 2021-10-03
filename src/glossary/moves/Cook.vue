<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'Cook';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="cook" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>prepare and serve a meal</b> for a group, wait until everyone is finished eating and then <Roll skill/>.
        <br><br>
        To gain the benefits from the meal a character must:
        <Options numbered :options="[
            'Eat the food you prepared.',
            'Remain with the group for the duration of the meal.',
            'Ask another character one question from Understand Someone.',
        ]" />
        <br>
        <em>S:</em> choose 2.  <em>P:</em> choose 1.
        <Options bullet="⇀" :options="[
            'Everyone clears their Pain tags or gains +1 Resilience, their choice.',
            'Name someone, they leave the meal feeling wonderful or terrible, your choice.',
            'No one gets unintentionally poisoned, sick, allergic, or otherwise affected by the meal.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Unabashedly, this is one of my favorite moves I've written.  Is it a great move?  Maybe not.  But I like it quite a bit.
        <h3 class="lineTo">In Play</h3>
        <div class="playExample miniBorder">
        <p>Skipping play examples for now.</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>