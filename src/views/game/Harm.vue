<!-- ============================== Script ============================== -->
<script setup>
import Death from '@/views/game/Death.vue';
import HLink from '@/components/HLink.vue';
import SacrificesMustBeMade from '@/glossary/moves/SacrificesMustBeMade.vue';
</script>

<!-- ============================== Template ============================== -->
<template>
<HLink id="harm" title>
    Harm
</HLink>
Harm is how Deathless engages with the pain and frustration and wounds that characters inflict on each other.  Any attack on a person is an attempt to Harm them.
<br><br>
The nuances of <em>Harm</em>, what it means to be harmed and how that affects each character,  are intentionally left out of most of the rules.  Questions of "how" and "how much" get resolved according to the fiction.  A stabbed belly is a stabbed belly.  A severed limb is a severed limb.  Whatever flows from the moment, however the cause and effect makes sense in the conversation, those properties are most important.
<br><br>
Characters record the Harm they've suffered with <em>Tags</em>: brief statements that describe the damage.  Tags are not mechanics themselves.  They state the truth of the problem and little more.  "Busted jaw".  "Arrow to the knee".  "Gaslit".  The kind and severity of the Harm, and how it impacts the character, gets handled at the moment of its introduction.  Whenever it comes up in the fiction afterward the tags help paint a picture of the character living with it.
<br><br>
The text does hold a few opinions about dealing with Harm.  Categorizations more than anything, aids to help you quickly resolve the nature of the problem while the specifics remain in your hands.  The rules enforce three concepts: what kind of Harm is it, how severe is it, and how much is too much?

<HLink :h="2" id="insult_and_injury">
    Insult and Injury
</HLink>
In Deathless, Harm encompasses more than bodily damage.  Vitriol and mind games have equal share in the space.  The text will, at times, separate the two categories with the terms <em>Injuries</em> (for bodily effects) and <em>Insults</em> (for emotional or mental damage).  Normally, moves only say "Harm"; in these cases you can invoke either category, insult or injury, whichever fits the action.  On the rare occasion that either term is specified, the Harm must match that type.

<HLink :h="2" id="pain">
    Pain
</HLink>
Harm severity funnels down to two categories, the less severe of which is called <em>Pain</em>.  If you have trouble deciding whether the Harm is more or less severe, focus on the intent of the fiction.  Is the character trying to send a message or make a statement?  That's Pain.  Are they trying to kill or break someone?  That's probably the next step up (see Conditions and Wounds below).
<br><br>
Player Characters can manage up to three Pain tags at a time.  After the third, all Harm escalates to the greater severity independent of the intent.  You don't need to fill out a characters Pain Tags first; skip straight to the greater severity when it makes sense.  Also Harm never downgrades from a Wound or Condition to Pain (unless a move specifies otherwise).  The character's situation only ever gets worse.
<br><br>
Injury and insult may both cause Pain.  A character who has been bullied and berated, intimidated and flustered, may not be in physical pain per se, but they're still in <i>a state</i>.  Somewhere beyond clear and conscious control of themselves.  That's what Pain tracks: how the character is pushed towards or across the line where they're no longer able to think rationally.  To the point where they get desperate, take risks and make mistakes, flinch, stumble, or hesitate.  The players are not required to act out the state of their pain.  Leave those symptoms under the hood if you want.  Nonetheless, that's the position their characters are in.

<HLink :h="2" id="wounds_and_scars">
    Wounds and Scars
</HLink>
Player characters have no Harm clock or HP.  Each has only a single box to track a <em>Wound</em> tag.  Once filled, the next injury causes death.  NPCs may not even have that.  Some, where it makes sense in the fiction, have a wound slot to fill like the players do.  For most: if a PC intends to kill an NPC, they do so.  Life in Deathless is not precious.  Combat is severe.  Murderous intent results in killing.
<br><br>
Healed wounds beget Scars.  You won't need to remember each and every cut; many of the wounds taken may be forgettable, a patch of mended skin with a story to tell, not much more.  For the rest, the missing limbs and digits, the burns and brands, damage to visible areas like the face and hands, those you'll want to record.  A character can list as many scars as they please.  The purpose is purely for fictional tracking and does not affect the character's state of health or capacity to take future Harm.

<HLink :h="2" id="conditions">
    Conditions
</HLink>
The mental and emotional versions of a wound, <em>Conditions</em> track things like broken self image, severed attachments, and barely-contained resentment.  They affect the character's behavior at all times, similar to how a wound to affects movement.  Every tension near the source, any act which stretches or exercises a connection to it, all strain from the damage.
<br><br>
Mechanically, Conditions manifest as penalties to player rolls.  Each of the characters' stats have two slots for Conditions.  For each condition on a stat, the character takes -1 when they roll it.  This modifier remains as long as the Condition persists.
<br><br>
A note on severity: the important difference between Pains and Conditions is not always the toxicity of the attack, but instead the persistence of the result.  Pains disappear in short order, Conditions do not.  We don't always get a say in what greives or affronts us.  Sometimes, the insignificant shit you hold on, the emotinal pricks that still hurt despite all the opportunity to heal, that'll surprise you.  Keep that in mind when Conditions come into play: the lingering effects can be disproportionate compared to their source.

<HLink :h="2">
    Healing
</HLink>
Wounds can mend with care: time, restraint, patience.  All the <em>things the characters won't have</em> in surplus.  In a rush you'll do what any desperate fool would do: go to one of those things that call themselves doctors, or find a pharmacist who'll pack the sores full of herbs, maybe stitch pieces back together yourself.  Or you die.  Funny thing about dieing when you're in the character's position: all your injuries get healed up in the process.
<br><br>

Conditions, unlike wounds, won't even mend with time or rest.  To heal a damaged mind you'll need to engage with the emotions directly.  Each stat has different specifics for engagement, but they all invoke one of two behaviors: you can fight back against the feeling (<em>Catharsis</em>), or give in to it (<em>Surrender</em>).  Or, your Persona might provide an alternative, a way to put that hurt into motion independent of the stat.
<br><br>
Play a Condition into the fiction according to the requirements of a removal trigger (such as Catharsis or Surrender) and, when the scene is over, you get to erase that Condition.  Triggering Condition removal is expected to be an <i>event</i>, not mere background noise or an offhand gesture.  If the scene didn't include the introduction of a new character, new clock, or a significant change in the relationship with an existing character, the insitgating player didn't take it far enough to count as a resolution trigger.  Because of this weight, each character can only resolve a single condition per scene, even if they meet multiple resolution triggers.
<br><br>
<table class="tbl">
    <thead class="tblHead">
        <tr class="tblRow">
            <th class="tblEnt"></th>
            <th class="tblEnt">Catharsis</th>
            <th class="tblEnt">Surrendur</th>
        </tr>
    </thead>
    <tbody class="tblBody">
        <tr class="tblRow">
            <td class="tblEnt"><em>Glamour</em></td>
            <td class="tblEnt">⇀ Win someone's affection then drop them, just to prove you can.</td>
            <td class="tblEnt">⇀ Distance yourself from someone who trusts or cares about you.</td>
        </tr>
        <tr class="tblRow">
            <td class="tblEnt"><em>Insight</em></td>
            <td class="tblEnt">⇀ Abandon a prior arrangement or solution to do things your way.</td>
            <td class="tblEnt">⇀ Put yourself in a bad spot without taking prior precautions.</td>
        </tr>
        <tr class="tblRow">
            <td class="tblEnt"><em>Resolve</em></td>
            <td class="tblEnt">⇀ Don't back out of a hopeless situation, or stay when everyone else flees.</td>
            <td class="tblEnt">⇀ Indulge in gratification or vice at significant expense.</td>
        </tr>
        <tr class="tblRow">
            <td class="tblEnt"><em>Force</em></td>
            <td class="tblEnt">⇀ Start an unnecessary fight or escalate a tense situation.</td>
            <td class="tblEnt">⇀ Show submission to someone who challenges you.</td>
        </tr>
        <tr class="tblRow">
            <td class="tblEnt"><em>Skill</em></td>
            <td class="tblEnt">⇀ Challenge a formidable opponent to a contest and go to any lengths to win.</td>
            <td class="tblEnt">⇀ Challenge an easy opponent to a contest and try to ruin them in the process.</td>
        </tr>
    </tbody>
</table>

<HLink :h="2" id="defenses">
    Defenses
</HLink>
Protecting against Harm is, for the most part, <em>handled in the fiction</em>, not in the mechanics.  Shields don't have a value, armor can't take a wound and downgrade it to pain.  The table must question whether, in the presence of sufficient defenses, a character can deal Harm at all; not how much it might get reduced.
<br><br>
Naturally, that leads into ambiguity.  If an NPC has a shield, can you Harm them or not?  The shield is there, it exists in the fiction, but it isn't the perfect defense either.  Easiest way to handle this is to assume the NPC will use their shield, or whatever it is they have to defend themselves with, and probably <i>successfully</i>, unless the players' characters deal with it in some way.  By taking it from them, or causing a distraction, or using an attack that a shield can't block.  It doesn't particularly matter how: be creative.
<br><br>
Now, what if a player character has a shield, what then?  The MC still has the right to <em>Harm them</em>.  That's one of their moves, and it isn't dependent on the PC's lack of defenses.  Kinda begs the question: what good is a shield?  It's a bargaining chip.  Something you can offer when you need to make sacrifices.
<br><br>
There is one part to defense that doesn't require fictional handling, a currency that can be traded for protection regardless of the character's position: (link-needed)<b>Resilience</b>.  When a PC would receive a Condition, they can instead spend a Resilience to ignore the Harm.  Fictionally, this is the character exhausting some sense of security or lingering good feelings to ward off the Condition.  Still a sacrifice, in its own way, just more formalized.

<HLink :h="2" id="sacrifices">
    Sacrifices
</HLink>
Characters in Deathless don't fuck with danger and come out clean.  One of the MCs principles is, after all, <i><em>give nothing away freely</em></i>- and gambling is not payment.  When a character takes risks, when they throw themselves against bad odds or imminent danger, losses are expected.  Sure they might scrape by on a roll or two, eventually they're going to get hurt, and when they do they get to make a choice: take the Harm, or sacrifice something valuable to keep themselves in the scene.
<br><br>
<div class="squeeze">
    <SacrificesMustBeMade :leftLined="false" shaded ruled flat />
</div>
<br>
If you go looking for an alternative move, some check to see if you can keep your shit together or slip sideways around the problem, you won't find one.  The players don't get to throw their characters in over their heads and just hope for the best.  The MC doesn't get to throw danger at the players and just hope for the best.  The risk is always real, and to get through everyone needs to approach it head on or trade for a character's safety.

<HLink :h="2" id="negotiating_harm">
    Negotiating Harm
</HLink>
Most of the time the game handles negotiations for you.  First you let the moves have their say (you want to pull a stunt?  okay, roll the move and watch the dice).  If the roll goes well then everyone gets on with the scene.  When it tanks, you look at the rules on Harm, figure out which ones match the fiction and deal with the aftermath according to those rules.  Then, everyone gets on with the scene.  Great and good.
<br><br>
What happens if <em>the table can't decide</em> what move (if any) you're able to trigger?  A soldier has you at spearpoint, can you Overwhelm them without first getting stabbed?  You're abandoned in a cell, do you just suffer the maddening isolation, or can you thwart it somehow?  On your knees before the chopping block in the city center, in view of a bloodthirsty crowd, the sheriff lashes accusations against you and your ken; the abuses of this turncoat bastard churn your stomach, but is there anything at all you can roll to avoid taking another Condition?
<br><br>
Of course, at your table, you get to make these decisions however you want: hack and bend the game this way and that.  But the foundation of the game, the advice it gives the MC, the reason it makes you offer Sacrifices instead of a roll to gamble through the risk, is that you are not always in control of the moment.  The players' characters do not have the power to choose what does and doesn't hurt them, or what danger they can and cannot ignore.  No negotiations: you'll take a spear to the chest, scream into the lonely dark, and reek of vengence and impotence tomorrow.

<HLink :h="2" id="npc_harm">
    NPC Harm
</HLink>
Non-playable characters, the lot controlled by the MC, don't track all this structure like the players' characters do.  Instead, their Harm is defined more simply defined by their fictional position.  An NPC is either in Pain, or they aren't.  Pissed off or thinking clearly.  Wounded or healthy.  Dead, or alive.  Their state switches <em>as the fiction dictates</em>, with each affliction giving the NPC a new Tag.  They might take "kicked in the ribs" to track how they're in Pain, or "one-upped by Flynn" if they're in a mood.  The MC can add as many Tags as they want a character to have.
<br><br>
What's important is how each Tag changes that character's behavior.  "One-upped by Flynn" isn't an idle frustration; it means that character is a spring coiled tight with contempt, or is cowed when in the same room together.  "Kicked in the ribs" will cause them to double over, breathe laboriously through their teeth and strain to make each movement.  Tags are burdens, and the table should see the character struggle to heft their weight.

<HLink :h="2" id="dealing_harm">
    Dealing Harm
</HLink>
Always <em>lead with the fiction</em>.  Ideally, the player starts with a description of what their character is trying to do, and how they mean to achieve it.  It's fine to start with your instincts, too.  You can say, "I'm going to kick this little cretin's teeth in," without meaning you want to literally kick their teeth.  But when it comes time to act on your instinct, four things should be clearly addressed in the conversation: which character(s) the Harm is directed at, whether you're dealing Insult or Injury, if you're holding back to only cause Pain, and what it looks like when your character does it.
<br><br>
At this point the MC will say if you trigger a move (probably (link-needed)<b>Overwhlem</b> or (link-needed)<b>Snipe</b>, if it's a basic move) or not.  A move only triggers under two circumstances: either you need the mmove to do whatevver you did in the first place; or you're uncertain about the outcome.  Not all Harm is uncertain.  Sometimes you simply do it ("I stab the sleeping Baron").  Sometimes it's impossible ("I stab the suit of living iron").
<br><br>
If you thought you had triggered a certain move and the MC didn't call it, or they called a different move, it's a good idea to pause and make sure everyone has the same perspective on what the fiction looks like in the moment.  Chances are the MC pictured the action or the intent a little differently than you did.

<Death embedded />
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>
