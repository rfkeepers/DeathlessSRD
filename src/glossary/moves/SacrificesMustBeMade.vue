<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";

const name = 'Sacrifices Must Be Made';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="sacrifices_must_be_made" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>make a last ditch effort to save yourself</b> from imminent Harm, say what you intend to do and ask the MC what it takes to keep you safe.  They will offer a trade which requires you to pay a cost, introduce danger, or transfer the Harm to someone or something else.  If you agree to their bargain, you do it and receive no Harm.  If you think the MC's offer is too severe then apparently the Harm is preferable.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        This move is one of the two somewhat extreme experiements I'm playing with at this point in the game: does harm work if no "avoid harm" move exists.  Question being: will the players hate me if I don't let them roll to avoid harm?  Here in this game I can manufacture it into the theme, the core of the experience: you can't die, why should I let you slip out of Harm (ie, reduce tension) whenever you want?
        <br><br>
        But justification doesn't guarantee fun.  And on the side of the MC, it also means I've removed denial of intent from the mechanics.  As it stands, the MC doesn't get to hide behind the mechanics, "it's not my fault, you just have to take Harm here."  Which could feel bad for both ends of the table.
        <br><br>
        Opposite of the worries, I like that this maintains tension in a scene.  In an impish way I like that it pushes players towards bargaining.  At some point in play they're going to have a scene they don't want to give up on.  What, then, are they willing to sacrifice to see it through?  That question is worth exploring as an experiment, I think.
        <h3 class="lineTo">In Play</h3>
        <div class="playExample miniBorder">
        <p>Ewan, trying to wrest a knife from the Baron, rolls a Miss on Overwhelm.</p>
        <p>"You two get in a tussle over the knife," the MC says, "and there's a point where he feints and kicks at your knee, and you falter, and he gains control and stabs you.  Mark an injury."</p>
        <p>Ewan sighs, "that's it for me, I'm dead.  Crap.  Not like this.  Can I avoid it somehow?"</p>
        <p>"Are you willing to make a sacrifice?  Alright.  You manage just enough control to shove the knife to your side.  Instead, it hits Marienne in the gut.  She'd rushed over to try and separate the two of you before anything else happens."</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>