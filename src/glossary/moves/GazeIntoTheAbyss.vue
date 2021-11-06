<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import RollAbyssRules from "@/components/RollAbyssRules.vue";

const name = 'Gaze Into The Abyss';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="gaze_int_the_abyss" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>go looking for answers</b> in the endless sea underneath all things, you gaze into the infinite depths and find truths, however difficult to grasp they may be.  Choose 1 from below, and <Roll abyss/>.
        <Options bullet="⇀" :options="[
            'A gripping sensation guides you.',
            'A brief and obscure vision is revealed.',
            'You gain a terrible understanding.',
        ]" />
        <br>
        <RollAbyssRules />
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        This move had two goals: first to provide some kind of 'spout lore/open your brain' variant.  Second, to give the Abyss stat something to use.  In the former case I feel it's, you know, fine.  The success options are overlapping flavor without much direction at all.  It makes the choice between them a bit useless.  They get the point across, and not much more.  On the latter end, I think it makes sense to use Abyss for the role, but I'm not sure it justifies anything about abyss as a rollable stat.  That part feels more incidental than anything.  Which is okay?  I guess?
        <h3 class="lineTo">In Play</h3>
        <div class="playExample miniBorder">
        <p>(note, this play example is slightly out of sync, following an update to the move)</p>
        <p>"We don't have much to go on here," Ewan says, "I think I'm going to risk looking for answers in the Abyss."</p>
        <p>"Sounds good," says the MC, "how do you manage to do that?"</p>
        <p>"I think this time it's an act of meditation.  Pulling closed all the curtains in the room, making it as dark as possible, trying to shut out everything I can hear and smell and see.  I sit there as long as it takes to emptying my mind of thought."</p>
        <p>"Roll it," the MC affirms.  Ewan rolls above his abyss. "Alright," the MC starts, "sitting there in the emptyness, you begin to feel like you drift off.  Maybe this is sleep?  A sudden dream?  Maybe it's something else.  You feel detached from your body, suspended.  In that state you hear a voice.  Not with your ears, it's like a vibration across your chest, as if your whole body is an eardrum.  The words are difficult to understand but you recognize the voice: its the Baron.</p>
        <p>"Time to pay Rosefitz a visit, huh?"</p>
        <p>"Not so fast.  Partial success, the Abyss gazes back at you."</p>
        <p>"Shit", Ewan curses.  "Okay, I give something to the Abyss.  How about a taste of my fear?  I let it know I'm worried about Micah and Flynn."</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>