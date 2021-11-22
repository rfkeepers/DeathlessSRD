<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Roll from "@/components/Roll.vue";
import Options from "@/components/Options.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Overwhelm';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="overwhelm" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>seize or break something</b> which a character won’t give to you willingly (an item, a belief, their position, their authority, etc), <Roll force/>.
        <SHPM :options="[
            'You take it from them or destroy it entirely.',
            'You or the MC choose one:',
        ]">
            <template v-slot:subslot-1>
                <Options bullet="⇀" :options="[
                    'Whatever you sought is still there, now neither of you have it.',
                    'You take it from them, but they take something from you as well.',
                ]" />
            </template>
        </SHPM>
        <br>
        When you Overwhelm another PC, <Roll force/>.  
        <SHPM use="spm" :options="[
            'They must spend 1 Resilience or let you get what you wanted.',
            'They choose one of the partial success options above.',
            'They keep firm control of it, and take something from you as well.',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        I like this move well enough.  But I know it's going to become the defacto "fight a thing" move.  Which isn't, I suppose, entirely the wrong approach.  If a character wants to deal belligerent Harm, this here fits the bill.  I just hope it comes to mind for considerations that aren't strictly combat, too.  That could be too dreamy of me: believing the move has more breadth than it's capable of.  But it would be nice for the pattern of things, avoiding a strict combat move and all, if it worked for both.
        <h3 class="lineTo indent">In Play</h3>
        <div class="playExample miniBorder">
        <p>"The guard looks nervous.  They can see the odds, they know they're outnumbered.  But they're trying to do their job, and their job is to keep you out of the place."</p>
        <p>"Can I grab them by the shirt and shove them against the door?" Micah asks.</p>
        <p>"Go for it," says the MC.</p>
        <p>"Listen to me you worthless shite," she begins, "you think we're who you're keeping out?  The consul ordered a raid on this estate.  They know about the Baron's trafficking.  You're going to let us through this door because we will turn you into a body if we have to, and no one's going to know the difference whether it happens now, or later when that raid burns this all to the ground."</p>
        <p>"Damn.  Trying to Persuade him?"</p>
        <p>"I was hoping for Overwhelm?  Seize the last of his courage, or whatever is keeping him here?"</p>
        <p>"Sure," the MC agrees, "I'll take that.  Show me that Force."</p>
        <p>Micah rolls a Partial success and looks up to the MC. "Ugh," she says, "I don't want neither of us to have it, I want through this door.  Other option: what do they want from me?  They can take it."</p>
        <p>The MC ponders a moment, "I think they take a promise from you.  Like, they describe how if they abandon this door then they're toast.  Not just out of a job; the Baron's people will hunt them down.  They don't let loose ends hang around.  So this guard wants a promise: after tonight, they need somewhere to lay low.  Just for a night or two.  Do you promise?"</p>
        <p>"Fine," Micah says, "whatever."</p>

        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>