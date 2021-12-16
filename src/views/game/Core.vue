<!-- ============================== Script ============================== -->
<script setup>
import Options from '@/components/Options.vue';

</script>

<!-- ============================== Template ============================== -->
<template>
<div class="core">

    <h1 class="title">
        Core Principles
    </h1>

    <div class="spaceAbove">
        <h2>The Game</h2>
        Deathless is a game about flawed and troublesome characters who are never allowed to die.  A person without the fear of death is a person without fear.  At the table, we play to find out where those characters' lines are drawn: which boundaries do they preserve, and which are they willing to step across?
    </div>
    
    <div class="spaceAbove">
        <h2>Powered By The Apocalypse</h2>
        Deathless is part of the PBTA school of games, which are based on <a href="https://lumpley.games/apocalypseworld/">Apocalpyse World</a> by D. Vincent and Meguey Baker.  If you're familiar with other pbta games (possibly: Masks, Dungeon World, or Monster of the Week), then you probably know what you're in for, more or less.
        <br><br>
        If you're new to PBTA games, here's what you're in for: the experience is light on rules, heavy on the narrative, and has strong opinions about which stories and spaces the game is best at exploring.
    </div>
    
    <div class="spaceAbove">
        <h2>The Conversation</h2>
        Playing this game is, fundamentally, a conversation between the people at the table.  The Master of Ceremonies (or MC), who takes the role of the world around the players, describes what's happening and asks the Players what they do.  The Players then tell the MC (or another player) how they act, and ask what happens next.  When necessary, the rules of the game will also contribute to the conversation, most often to arbitrate differences.
        <br><br>
        Like any good conversation the game works best with the following goals in mind.  There is no formal structure about who gets to talk and when, people contribute when they feel like it.  Everyone should have an opportunity to add to the conversation.  The topic should always be moving forward to new and interesting spaces.
        <br><br>
        Also like good conversations, everyone takes part in directing the topics and content.  All the things said at the table sum up to create "the fiction".  Since fiction is the story, that means every person involved is a co-author.  No one person at the table has special agency over the conversation that others do not.  We all play to find out what happens.
    </div>
    
    <div class="spaceAbove">
        <h2>Players</h2>
        To keep the tone of play in line with stories that the game wants to explore, everyone at the table has a guiding agenda.  These players' principles are as follows:
        <blurb>
            <Options bullet="⇀" :options="[
                'Play a real person: flawed, engaged, and aware.',
                'Embrace all consequences.',
                'Appreciate the fragility of good connections.',
                'Don\'t be afraid to make different commitments than your fellow players.',
            ]" />
        </blurb>

        <h4>Play a real person: flawd, engaged, and aware</h4>
        Each player creates a character, one of the deathless, whom they control for the lifespan of the story.  Each character has some unique history, relationships, and compulsions, and it is the player's job to bring that background out in dramatic context.
        <br><br>
        In specific, their chracter should act like a real person, and are expected to be--  Flawed: to make mistakes and act irrationally or in their own self-interest.  Engaged: seeking earnest and active involvement in the story.  Aware: thoughtful, introspective, and self-aware, just like the player.
   
        <h4>Embrace all consequences</h4>
        Characters in deathless are not superhuman, nor is the world around them hospitable.  Trouble and tragedy are an expected part of play.  If your goal is to avoid trial and hardship you'll end up fighting the game itself.  The best stories are discovered when your character experiences difficultly.  Dig into that, and explore it.

        <h4>Appreciate the fragility of good connections</h4>
        Your character cannot die, but that isn't the case for everyone in the world.  On the contrary, you're the exception, and part of living forever means watching everyone else die.  Enjoy the good things you have, while you have them.

        <h4>Don't be afraid to make different commitments than your fellow players</h4>
        You and your fellow players might all be in this together, but that doesn't mean you'll always share the same outlook on the situation.  When you disagree with the path the other players are heading down- or even further, you want try to stop them from walking it- go ahead and chase that conflict.  The game is ready to handle your quarrels, and you should trust the MC to bring things around again afterward.
    </div>
    
    <div class="spaceAbove">
        <h2>Master of Ceremonies</h2>
    </div>
    
    <div class="spaceAbove">
        <h2>PBTA Agendas</h2>
    </div>
    
    <div class="spaceAbove">
        <h2>Safety</h2>
    </div>

</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
$varname: 1;
.core {
    padding-bottom: 24px;
}
</style>