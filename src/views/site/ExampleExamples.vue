<!-- ============================== Script ============================== -->
<script setup>
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
const moveOpts = ['You catch a faint whiff of cologne, the smell of a person whose name you almost remember.', 'Someone accidentally stumbles into you.  Ask or tell the MC if you make eye contact with them.', 'A sudden noise shakes you out of your reverie.'];
</script>

<!-- ============================== Template ============================== -->
<template>
<div class="exampleExamples">
    <div>Suppose you're reading along with the text and I'm explaining all manner of goodness about how the game and the rules and the conversation works out for all of the players involved.  Suddenly, a wild move appears!  "Egads", you say, "what do I do with it?"  Just click on the blue question marks to find out...</div>
    <Move id="take_in_the_scenery" ruled>
        <template v-slot:name>Take In The Scenery</template>
        <template v-slot:body>
            When you pause for a moment and <b>take a moment to enjoy your surroundings</b>, roll +happiness.  On a 10+, the MC will describe what whispers of sweet nothings the world gives you.  On a 7-9, pick one from below.  On a miss, well, prepare for the worst, which probably means a slight chance of rain.
            <Options :options="moveOpts"/>
        </template>
        <template v-slot:example>
            This is the perfect move to use after you, dear MC, have wowed the table with your sensuous talents of word-painting, evoking a pastoral scene of dappled light over desirable hills and valleys in expanse all around the characters.  As the players sit idly in their daydreaming, it's time to have them <b>Take In The Scenery</b>.
            <h3 class="lineTo">Outcomes</h3>
            <div class="quote"><i>{{moveOpts[0]}}</i></div>
            What better time to dive into someone's past than when you catch the character (or the player!) staring off into space.  Dig in to this moment and ask a few questions: how long has it been since the last time they caught that scent?  and does it surprise them to encounter it again, here, wherever it is they're at?
            <div class="quote"><i>{{moveOpts[1]}}</i></div>
            This is a chance for the narrative to branch multiple ways.  A brief moment of eye contact is an opportunity to flare up all kinds of emotions: curiosity, memory, lust, frustration.  Likewise, contact ignored can mean more than just eye contact was lost: pickpocketing, having something dropped or broken without realizing it, or the most simple irony that the person whom they're looking for nearly just knocked the character over.
            <div class="quote"><i>{{moveOpts[2]}}</i></div>
            There's nothing worse than a violent interruption in a moment of appreciation.  Especially when you were just about to remember that thing.  Oh, what was it?  Something important, you're sure of it.  Oh well.
            <h3 class="lineTo">In Play</h3>
            <div class="playExample miniBorder">
            <p>Jess wraps up a novelish description of the view of the city from the bridge.  "And that's what you see," they punctuate.</p>
            <p>"Woooowee," Em sighs.</p>
            <p>A moment of silence passes through the table.  "Seems like you're trying to <b>Take In The Scenery</b>," Jess suggests.</p>
            <p>"Yeah", Em agrees, "I haven't been to a real city for so long, it's overwhelming to see."  She rolls a 8 and decide that someone in a rush <b>bumped into them</b>, and that she <b>won't get to make eye contact</b>.  She describes the sudden flutter of papers and apologies and how, after everything is picked up, she turns to hand the person their last paper but they've already kept going down the street.</p>
            <p>Jess nods, "they huddle around their crumpled paperwork and scurry down the street, their daffodil-yellow jacket loud against the few people walking by in their brown and grey suits.  Remind me, who is it you were here to find?"</p>
            <p>"Brigamoor?  I think?" Em says.</p>
            <p>"Well," Jess continues, "As you look at the last paper, the one in your hands, you see a very offical looking letterhead stamped at the top with the name, 'Gayle Brigamoor'.  Looking back up the street you catch a flash of yellow climbing into a cab.  The door shuts and it begins to rumble down the street."</p>
            </div>
        </template>
    </Move>
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>