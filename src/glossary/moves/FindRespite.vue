<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";

const name = 'Find Respite';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="find_respite" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you and another character <b>share an intimate moment</b> like: opening up about your fears and vulnerabilities, fucking each others' brains out, or allowing one to selflessly care for the other's pain- you both choose one option.  If the other character is an NPC, you get to ask a question from Understand Someone in addition to your other choice.
        <Options bullet="⇀" :options="[
            'Erase a Condition of your choosing.',
            'Erase one mark of Abyss.',
            'Gain +2 Resilience.',
            'Ask a question from Understand Someone.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        I'm always a fan of intimacy moves as a way to tell the players, "yes, the game wants you to get into these moments".  And the more hurt the characters experience, especially emotionally, the more I expect them to seek out intimacy as a response.  Especially in Deathless, with the numerous opportunities that awakened moves provide similar mechanical resolution through bad behavior, I want to have a baseline for good behavior, too.  That's why the move is descriptively broad with its take on intimacy.  So long as, at the end of the scene, the characters come away feeling greater connection, I think it's okay to have that broadness.
        <h3 class="lineTo">In Play</h3>
        <div class="playExample miniBorder">
        <p>Flynn and Micah arrive back home together in silence.  Flynn limps on one leg, using Micah as a crutch the other ankle.  Micah holds a bloodied kerchief against her left eye.</p>
        <p>In the house they say nothing to each other.  Flynn lays Micah on a bed and begins to clean the wound with water and cloth.  They'll be lucky if Micah can use that eye after this.  After cleaning, she reaches for another box.  Needle and thread from an old sewing kit isn't a very safe way to stitch it up, and she's no medic, but it's the best option they have.</p>
        <p>Micah holds still as long as she can.  It's almost long enough for Flynn to finish stitching.  It's only when Flynn begins to softly hum a song to her that Micah cries.  What have they done?  She's so scared.  What have they done?</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>