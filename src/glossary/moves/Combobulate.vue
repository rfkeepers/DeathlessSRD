<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'Combobulate';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="combobulate" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you first gain this move, choose your area of extensive knowledge and research:
        <Options bullet="❍" :options="[
            'the body (healing, surgery, illness)',
            'history (culture, tradition, events, language)',
            'botany (plants, homeopathic usage of flora)',
            'the abyss (its presence and usage, or phenomena involving it)',
            '_____________ (other)',
        ]" />
        <br>
        When you <b>leverage your expertise</b> to heal or Harm, to fabricate or modify or destroy a thing, or to otherwise cause some specific effect, ask the MC what it requires.  They will select one or more from the list below.  If you meet or agree to those requirements, you do it.
        <Options bullet="⇀" :options="[
            'It will take you a significant amount of time (hours, days, weeks, or months).',
            'You\'ll need one or more special components or tools.',
            'Additional research on the subject, available at _____________, is necessary to do it right.',
            'Doing so will put you and/or others in danger of _____________.',
            'The result will be unreliable or have limitations.',
            'The thing you want is not possible, but you could produce a close approximation like _____________.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        How do you distill "the knowledge of years of study" into a move?  Without making a "barf forth information" move, that is.  This take is the "do an arbitrary thing with consequences/preconditions" route.  Works with the theme, and provides the flexibility that a resource of knowledge might offer a character.
        <h3 class="lineTo indent">In Play</h3>
        <div class="playExample miniBorder">
        <p>Skipping play examples for now.</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>