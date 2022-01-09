<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";

const name = 'Enjoy Respite';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="enjoy_respite" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you and another character <b>share an intimate moment</b> like: opening up about your fears and vulnerabilities, fucking each others' brains out, or allowing one to selflessly care for the other's pain- you both choose one option.  If the other character is an NPC, choose one and then ask a question from Understand Someone in addition to your choice.
        <Options bullet="⇀" :options="[
            'Erase a Condition of your choosing.',
            'Erase one mark of Abyss.',
            'Gain two Resilience.',
            'Ask a question from Understand Someone.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        I'm always a fan of intimacy moves as a way to tell the players, "yes, the game wants you to get into these moments".  And the more hurt the characters experience, especially emotionally, the more I expect them to seek out intimacy as a response.  Especially in Deathless, with the numerous opportunities that awakened moves provide similar mechanical resolution through bad behavior, I want to have a baseline for good behavior, too.  That's why the move is descriptively broad with its take on intimacy.  So long as, at the end of the scene, the characters come away feeling greater connection, I think it's okay to have that broadness.
        <h3 class="lineTo indent">In Play</h3>
        <div class="playExample miniBorder">
        <p>Flynn and Micah enter their home together in silence.  Flynn limps on one leg, using Micah as a crutch the other ankle.  Micah holds a bloodied kerchief against her left eye.</p>
        <p>Inside the house they say nothing.  Flynn lays Micah on a bed and begins to clean the wound with water and cloth.  They'll be lucky if Micah can use that eye after this, she thinks to herself.  After cleaning as best she can, she reaches for another box: needle and thread from an old sewing kit.  It isn't a very safe way to stitch it up, and she's no medic, but it's the only option they have.</p>
        <p>Micah clamps her jaw tight and holds still for as long as she can.  Almost long enough for Flynn to finish stitching.  It's when Flynn begins to softly hum a song that Micah's resolve breaks, and for the first time that night, holding herself against Flynn's chest, she cries.</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>