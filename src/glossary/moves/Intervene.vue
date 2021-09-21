<!-- ============================== Script ============================== -->
<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import Move from "@/components/Move.vue";
import Options from "@/components/Options.vue";
import Roll from "@/components/Roll.vue";
import SHPM from "@/components/SHPM.vue";

const name = 'Intervene';
const stat = 'RESOLVE';
</script>

<!-- ============================== Template ============================== -->
<template>
<Move id="template" leftLined>
    <template v-slot:name>{{name}}</template>
    <template v-slot:body>
        When you <b>get in the way of incoming Harm or danger</b> to protect someone or something, <Roll>{{stat}}</Roll>. <em>S:</em> Choose 2.  <em>P:</em> Choose 1.
        <Options bullet="⇀" :options="[
            'You don’t take any Harm.',
            'You protect your ward from Harm or danger.',
            'You’re in control of the situation afterward.',
            'You put the aggressors or danger at a disadvantage.',
        ]" />
        <br>
        When you Intervene on the actions of another PC, and that PC is resolving a move, <Roll>{{stat}}</Roll> and use the following options.  Otherwise, roll the move as normal.  
        <SHPM use="spm" :options="[
            'You take the full results of the move in place of your ward.',
            'You and your ward are both affected by the move, but the effect is split between you, the other Player will tell you how.',
            'You don’t make it there in time.',
        ]" />
    </template>
    <template v-slot:example>
        
        <h3 class="lineTo">Design Thoughts</h3>
        For the most part I'm happy with it.  My primary worry is, like Overwhelm and Snipe, that players will take it as a physical-only interaction.  eg, acting as bodily shields.  My hope is that tables can use it as a way to intervene on someones behalf in arguments, accusations, attention, and so on. 
        <h3 class="lineTo">In Play</h3>
        <div class="playExample miniBorder">
        <p>"Marienne was the one who told the consul about your shitty trafficking ring in the first place, Baron," Flynn blurts.</p>
        <p>"Oh the Baron is pissed to here that," the MC says. "He literally jumps up from his chair, bumps the table along the way, everyone's wine glasses spill over, it's a mess.  His face is red.  He grabs the nearest steak knife and his hand shakes as he points it at her."</p>
        <p>"Back off, Rosefitz," Ewan says, "we had two of your crew primed to squeal anyway.  I was about to get you the same way, Marienne just beat me to it.  And believe me, the evidence we have against you is a lot more solid that her story."</p>
        <p>The MC frowns, "are you just trying to piss him off more?"</p>
        <p>Ewan shakes his head, "not quite.  I'm hoping I can distract his attention from Marienne a bit."</p>
        <p>"Oh, okay.  Sounds like you want to Intervene?  Roll your Resolve."</p>
        <p>Ewan rolls and gets a full Success.  "Definitely going to protect Marienne from danger.  Second option, hmm, can I put the Baron at a disadvantage?  I'm thinking, maybe he doesn't suspect his people would betray him, so this could shake him up a bit?"</p>
        <p>"Yeah," the MC agrees, "I'll give you that.  Rosefitz takes a glance at the door, where his mooks are guarding on the other side. He's still pissed, but you've got him cornered.  'Alright', he says, and licks his lips worriedly, 'alright.  So you're all here to do me in, is that it?'"</p>
        </div>
    </template>
</Move>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>