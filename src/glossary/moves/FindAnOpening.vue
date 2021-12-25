<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'Find An Opening';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="find_an_opening" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>search around for an opportunity</b> in a moment of need, <Roll insight/> and choose one from below.  If remotely possible, the MC will show you what you need, and also...  <em>S:</em> Put few barriers in your way, if any.  <em>P:</em> Put something defiant or costly in your way.  <em>M:</em> Make it as difficult as they want for you to get to it.
        <Options bullet="⇀" :options="[
            'I need a way in / out / around / through.',
            'I need to know what poses the biggest threat.',
            'I need to find something vulnerable or open to me.',
            'I need something valuable.',
            'I need to know who is in control.',
        ]" />
        <br>
        When you try to Find An Opening against another PC, <Roll insight/>.  On a... <em>S:</em> ask one.  <em>M:</em> they get to ask you one.  <em>P:</em> both.  Whomever answers must answer truthfully.
        <Options bullet="⇀" :options="[
            'How could I get you to ___________________?',
            'Would ___________________ get past your defenses?',
            'Are you willing to ___________________?',
        ]" />
    </template>
    <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
        As a take on the classic <i>read a sitch</i>, I wanted to switch the direction from "how much can I possibly learn about this moment" towards "how can I get the thing I need".  The test is whether it's better or worse to have the player use it when they need something specific, instead of when they want to explore their total options.  The most plausible problem I can think of is that it might focus the resolution too much on "a thing".  eg: a player asks for something vulnerable to them, and the MC presents it, and now play revolves entirely around that thing as a sort of macguffin, instead of using the full environment alongside that.  At the same time, I do want to keep pushing the notion that players shouldn't need to roll to ask questions, but instead to resolve them.
        <h3 class="lineTo indent">In Play</h3>
        <div class="playExample miniBorder">
        <p>Flynn, in a tight spot with guards advancing on their position, starts looking for a way to escape the building.  "I'm hoping there's a window or, I dunno, a vent?"</p>
        <p>"That's a Find An Opening," the MC says, "which means an Insight roll."</p>
        <p>Flynn agrees and rolls a Partial success, choosing 'I need a way out' from the list.</p>
        <p>"There's a window, sure.  Kinda high up, which makes it hard to reach.  But that's not the problem.  The problem is the window has a full pane of glass and no hinges.  To get out that way you're going to need to shatter it.  That'll be pretty noisy, not to mention the risk of getting cut up."</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>