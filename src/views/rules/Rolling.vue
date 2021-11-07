<!-- ============================== Script ============================== -->
<script setup>
import Options from '@/components/Options.vue';
import Roll from "@/components/Roll.vue";

defineProps({
    foo: {
        type: Boolean,
        description: "foo prop."
    }
});
</script>

<!-- ============================== Template ============================== -->
<template>
<div class="rolling">
    <h1 class="title">
        Rolling
    </h1>
    <div class="blurb">
        Deathless uses a D6 dice-pool system.  Rolling only happens when resolving a move, but not all moves require a roll.  If you see the text “<Roll something />”, that's your cue.
        <br><br>
        
        In most cases the number of dice rolled is equal to the specified stat.  When you're told to <Roll force />, you first look up your character's Force stat, and then roll that number of dice.  So if your Force is 4, you'll roll 4d6 dice.
        <br>
        <div class="playExample miniBorder">
            <p>A red-faced Baron de Rosefitz is dressing down Griffon’s character, Davenport, for exposing his black market trade ring.</p>
            <p>"Rosefitz sounds like he's about to blow his top," Davenport says, "I want to push him over the edge.  As soon as he pauses for a breath I say, 'Do you know how many of your goons were happy to trade a coin for this info?  No one here is under your control.' "</p>
            <p>The MC nods, "sounds good.  I think what you're trying to do is Snipe?  Let's see, yeah, that'll need you to <Roll skill/></p>
            <p>Davenport has a Skill of 3. Griffon rolls 3d6 and gets a result of 2, 4, and 5: one good with two bad.  That’s enough for a Partial success!</p>
        </div>
    </div>    

    <h2 class="title">
        Outcomes
    </h2>    
    <div class="blurb">
        Each roll has three possible outcomes: Success ( <em>S</em> ), Partial Success ( <em>P</em> ), or a Miss ( <em>M</em> ).  You might also see a move describe a Hit ( <em>H</em> ).  A Hit occurs when you get either a Success or a Partial Success.
        <br><br>
        
        The outcome is based on the number of dice that rolled up 5 or higher.  For a Success, you need at least two dice.  For a Partial Success, you only need one.  Therefore a Hit is when one or more dice roll 5 or higher.  If all dice rolled 4 or below, that's a Miss.
        <br><br>

        A couple outcome examples with 3d6 rolled:
        <Options bullet="⇀" asHtml :options="[
            '<em>[1, 2, 3]\</em> is a <em>M</em>iss, because no dice rolld up 5 or 6.',
            '<em>[1, 2, 6]</em> is a <em>H</em>it, and a <em>P</em>artial Success.',
            '<em>[1, 5, 6]</em> is a <em>H</em>it, and a <em>S</em>uccess.',
            '<em>[6, 5, 6]</em> is still just a <em>S</em>uccess, because more than two good roles does not add additional benefits.',
        ]" />
    </div>
    
    <h2 class="title">
        Variations
    </h2>
    <div class="blurb">
        Sometimes, instead of a specific stat, a move will tell you to roll a certain number of dice.  When you see <Roll :n=3 />, do exactly that: roll 3d6.
        <br><br>

        The Abyss, unlike your other rolls, will always have you roll 2d6.  Also unlike your other rolls, your goal isn't to get as many 5's and 6's as possible.  Instead, you have to <Roll abyss />.  In this case, you'll add the results and compare them to your current Abyss level.  Any time a move has you make this roll, it will also tell you how to handle the results, though as a general rule rolling lower (below your Abyss) will be better for you.
        <br><br>

        Some examples of rolling against your Abyss:
        <Options bullet="⇀" asHtml :options="[
            '<em>\'Against your Abyss\'</em> means rolling 2d6, adding the rolls together, and checking if the result is the same or greater than your Abyss score.',
            '<em>[3, 4] => 7</em>.  If your Abyss is 8 or greater, you rolled below.',
            '<em>[2, 3] => 5</em>.  If your Abyss is 5 or greater, you rolled above.',
        ]" />
    </div>

    <h2 class="title">
        Modifiers
    </h2>
    <div class="blurb">
        Roll reductions occur either from Conditions, or from having another player's character Hinder your actions.  For each Condition attached to a stat, you reduce the the number of dice you roll by 1.  For example: if your Resolve is 3, and you have a Resolve-based Condition, you'll only roll 2d6.  Additionally, if another PC decides to Hinder you, this also reduces your dice pool by 1.
        <br><br> 
        
        Increases are gained from Resilience, getting Helped by oher player's characters, and using the <em>Desperation</em> move  On any roll you may spend 1 Resilience to increase your dice pool by 1.  Or another PC can help aid you in teh action, granting 1 die as well.  Finally, if you're willing (or, as the name suggests, desperate enough) to risk additional consequences, you can make the move a Desperate action.
    </div>

    <h2 class="title">
        Probabilities
    </h2>

    <div class="blurb">
        If you're accustomed to PBTA or FITD games, and you like to know your statistics, you may be curious how the roll outcomes in Deathless compare to the other systems.  In general, 2d6 in Deathless is basically the same as 2d6+0 in pbta, which is very close to 1d6 in fitd, and these outcomes tend to stay in sync as you add or remove dice and modifiers.
        <br><br>
        For a more visual comparison // todo
    </div>
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
$varname: 1;
.rolling {
    padding-bottom: 32px;
}
</style>