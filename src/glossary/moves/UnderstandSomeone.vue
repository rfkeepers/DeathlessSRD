<!-- ============================== Script ============================== -->
<script setup>
import { ref } from 'vue';
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";

const name = 'Understand Someone';
const stat = 'INSIGHT';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>take a moment to closely study someone</b>, <Roll>{{stat}}</Roll>.  Choose one question from below and the MC will answer truthfully.  <em>S:</em> Ask another question; it can come from the list, or you may also ask any question that follows on the previous answer.  <em>P:</em> Ask a second question if you want, but your prying makes the other person uncomfortable, flighty, or cautious.  <em>M:</em> After you ask your question the MC makes a move as hard as they want.
        <Options bullet="⇀" :options="[
            'What is your motivation at this moment?',
            'What detail about your past or culture would help me understand you?',
            'What subtle signals are you sending my way?',
            'What do you plan to do after we\'re done here?',
            'What are you avoiding or leaving unaddressed?',
            'What could I do for you?',
        ]" />
        <br>
        When you Understand another PC, ask one question from the list.  If they choose to answer honestly they get to ask you one question from the list as well, which you must answer honestly.
    </template>
    <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
        Not much to say about this one.  I purposefully avoided a couple topics: "are you lying?" is just something that characters don't get to know in this game.  Though I'm sure MCs will figure out a way to convey that with the "subtle signals" option.  "How could I get you to __?" is reserved for Persuasion.  The rest are mostly standard.  It's a sufficient list, but I bet I'll weed and replace some in testing. 
        <h3 class="lineTo">In Play</h3>
        <div class="playExample miniBorder">
        <p>"So Rosefitz is just munching away at dinner?  Is he making us wait on him just to be a jerk?" Flynn wonders.</p>
        <p>"Yeah, he doesn't show any sign of giving you his time," the MC confirms.</p>
        <p>"Can I study him while he does this?  Just, watch him do his thing and try and figure out what's going on in his head?"</p>
        <p>The MC nods, "sure, roll your Insight, we'll do an Understand Someone."</p>
        <p>Flynn rolls a Success, "awesome.  First question, um, what signals is he sending my way?."</p>
        <p>"So, he's not just being dismissive.  You realize he tries not to look any of you in the face at all.  He avoids eye contact as much as possible.  You get the impression that he's actually worried.  Like, sure, making you wait is an alpha play, but he doesn't seem totally convinced that he's in control right now.  What else?"</p>
        <p>"Is he avoiding anything else, besides us?"</p>
        <p>"Okay, right, I'm going to give you the reverse of that, sort of.  He's not avoiding Marienne.  She's the one person he looks at.  And he looks at her a lot.  Longingly."</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>