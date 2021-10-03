<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Rabbit In the Hat';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="rabbit_in_the_hat" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you reach into something like a hat or sack and <b>pull out an item</b> no one expected you to have, tell the MC how you acquired and concealed it (this may have occurred in the past) and <Roll glamour/>.
        <SHPM use="spm" :options="[
            'Pick one, and explain it:',
            'The MC picks one and explains it:',
            'You pull out an item you didn\'t think you had.  Ask or Tell the MC what it is, and whether it implies immediate bad news, or something bad to come',
        ]">
            <template v-slot:subslot-1>
                <Options bullet="⇀" :options="[
                    'Getting that thing cost you.  Name the price.',
                    'The thing you have isn\'t exactly what you thought it was.  What is it?',
                    'Someone realizes it\'s missing and immediately suspects you.  Who?',
                ]" />
            </template>
        </SHPM>
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Another experiment in turning a magic trick into a move.  This one isn't as elegant as And For My Next Move.  It has more built in complication just in terms of figuring out the results.  On one hand I do like what the move is reaching for.  On the other hand, I don't want to stall the table over contrivances around it, such as what you pulled and who would suspect you and etc turning into a discussion that sidelines the game itself.
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