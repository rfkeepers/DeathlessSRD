<!-- ============================== Script ============================== -->
<script setup>
import Options from '@/components/Options.vue';
import Roll from "@/components/Roll.vue";
import Rolling from "@/views/game/Rolling.vue";
</script>

<!-- ============================== Template ============================== -->
<template>
<h1 class="title">Stats &amp; Rolling Dice</h1>

<div class="stats">
    <h2>Stats</h2>
    Characters in Deathless have five distinct stats: <em>Glamour</em>, <em>Insight</em>, <em>Resolve</em>, <em>Force</em>, and <em>Skill</em>.  Each one represents a penchant for solving problems with a particular approach; best read as answers to the question, "when under duress, how does this character successfully navigate through a situation?"
    <br><br>

    For example, Force applies equally to brutish attacks as to commanding leadership.  In both cases the character uses a display of power to get what they want.

    <h3>Glamour</h3>
    Define the impression someone has of you and lure others towards your needs.  Make something seem like that which it is not.

    <h3>Insight</h3>
    Observe the moment, pierce the surface and look beneath, or imagine how the details string together.  Address what is, and not what seems to be.

    <h3>Resolve</h3>
    Weather a storm with dignity, find gems in the waste, and maintain self control.  Put ideals in front of the situation.

    <h3>Force</h3>
    Make yourself the center of attention, apply unyielding pressure, and put adversity under your heel.  Break any obstacle in your path.

    <h3>Skill</h3>
    Showcase your expertise, produce intricacy and grace at ease, or work within the constraints.  Do exactly what the moment needs, no more and no less.
    <br><br>

    <hr>
    <h2>The Abyss</h2>
    The bottomless sea existed before all things, and awaits the end of all things.
    <br>
    The endlessness is within and between all things.
    <br>
    All comes from the Abyss, and all returns to the Abyss.
    <br><br>

    In addition to the earlier five stats, all characters have an Abyss track that sometimes acts as their sixth stat.  Unlike the other five it doesn't showcase an approach they take to problem solving.  A character cannot behave <i>abyssally</i>.  Rather, this track represents the characters' loss of self, their erosion to the connection in the world.
    <br><br>


    holy shit I just realized what the game needs to be about, and it is NOT the abyss.  It's about https://www.youtube.com/watch?v=dZrEayPIrVE .  You do terrible things, sure.  And you don't have to feel bad about it, because you live forever.  So how do you make the game about dealing with it?  Loss and connection, instead of the abyss, is essential.  Fighting against your nature and the sins you are compelled to do is essential.  But these are all generators.  How do you atone for yourself?  How do you investigate atonement?
    <br><br>

    To say "the more abyss you have the more powerful you are" inverts the theme of the game, I think.  Want power?  Keep on sinning to get more?  That's like saying, "sin is good, keep on doing it".  Urban shadows avoids this by having the corruption track 'kill' you at its fulfillment.  Corruption there is not about loss of humanity, it's about a turn of humanity towards a specific end.  The abyss, "all I need to do to absolve my sin is make connections with people" isn't the right vector.  So... how to have both a growth of power to use the personas (and do I drop shared skills to do that?) without mechanizing, "regret nothing and reap the rewards"?

    <br><br>
    keep the theme in mind.  "if this were a video game, you'd have no introspection for the small stuff.  here you must.  Feel your humanity slipping away at each step."


    <br><br>

    The players' characters in deathless have a unique relationship with the Abyss.
    <br><br>

    You should be no different, yet you are different.  When you die, like all other things, your consciousness returns to the Abyss.  Unlike other things, it gets pulled back out again.  The process isn’t easy or clean: the Abyss doesn’t expect you to go, it doesn’t want you to go; you belong to it again, and so it will claw and bite and tear and drag as much of you as it can grasp back underneath its waters.  Therefore, when you do return to life, you come back with a little less of yourself.
    <br><br>

    Death will rip out a bit more of you each time, until one day you look inward and find only a cavernous and empty void.  On that day others might see something return to your body, but it’s too little of you to really be you.  When that happens you will be gone, lost and drowned in the void.  But you can prevent this fate.  You can replace what the Abyss consumes.  While the sea is deep and still and endless, the lives of people are turbulent, tangled, and finite.  Bind yourself into the knots of their wants and woes so that when the Abyss takes you under, those ties hold you together and fish you back out again.
    <br>
</div>
<hr>

<Rolling embedded />
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>