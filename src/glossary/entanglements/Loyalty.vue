<!-- ============================== Script ============================== -->
<script setup>
import Move from '@/components/Move.vue';
import Options from '@/components/Options.vue';
defineProps({
    embedded: {
        type: Boolean,
        description: "alters the display for when embedded into a separate page",
    },
});
</script>

<!-- ============================== Template ============================== -->
<template>
<div id="entanglement_loyalty">
    <h2 v-if="embedded">Loyalties</h2>
    <h1 v-else>Loyalties</h1>
</div>

<div :class="{ blurb: !embedded }">

    Expressing Loyalty means more than just an alignment of purpose between you and another character.  It means more than to recognize someone as your boss or charge.  Loyalty is devotion.  If they are your superior, you agree to be at their beck and call.  If they are your ward, you agree to shelter, guide, and nurture them.  And in both cases you must be prepared to make sacrifices for them when it is asked or needed of you.  For as long as it takes.  Perhaps as long as they live.
    <br><br>

    Examples:
    <Options bullet="⇀" indent :options="[
        'I Persuaded Flynn to help me save Marienne\'s child.  In return Flynn asked that I take an oath of loyalty to them until we have ousted the Baron de RoseFitz, and I agreed.',
        'The demon-boar of Sekkerdi is the great and terrible spirit of the forest manifest in flesh.  As a protector of the forest, I have pledged my life to the boar\'s guard.',
        'As Consul Bergen died he charged me to raise his son as my own.  I owe him that and so much more.',
    ]" />
    <br><br>

    <Move id="swear_an_oath" ruled shaded>
        <template v-slot:name>Swear An Oath</template>
        <template v-slot:body>
            When a character requests you show homage and <b>declare an oath of fealty</b>, or asks you to protect someone with all your life, you have a choice: stand proud and alone, or swear your Loyalty to them.  If you deny their request, you're done here and owe them nothing.  If you consent and become their servant or defender, write a new Loyalty which describes who you are sworn to and, if the oath is not permanent, for how long you must maintain this oath.
            <br><br>
            NPC loyalty supersedes PC loyalty.  If a Player intentionally contrives a situation in which another PC cannot successfully maintain loyalty to both an NPC and the first PC, the NPC's loyalty takes precedence.  In such a case the second PC may choose between violating their loyalty to the NPC by siding with the PC, or to ignore their loyalty to the PC and side with the NPC at no cost.
        </template>
        <template v-slot:example>
        <h3 class="lineTo indent">Design Thoughts</h3>
            todo
        <h3 class="lineTo indent">In Play</h3>
        <div class="playExample miniBorder">
            <p>"todo", the author says.</p>
        </div>
        </template>
    </Move>

    <h3 v-if="embedded">Maintaining Loyalty</h3>
    <h2 v-else>Maintaining Loyalty</h2>
    When you earnestly go out of your way to endure significant Harm, hardship, or danger for the sake of protecting those you are sworn to serve- whether or not you are successful- erase a mark of Abyss.  This can only occur once per scene, independent of the number of Entanglements involved.

    <div class="spaceAbove">
        If those you are sworn to serve receive significant Injury or are placed in great danger while you are elsewhere and unable to protect them, mark the Abyss.
    </div>

    <h3 v-if="embedded">Failure</h3>
    <h2 v-else>Failure</h2>

    <em>When sworn to An NPC:</em>

    <div class="blurb spaceAbove">
        If you do any of the following with clear intent: ignore the call of those you are sworn to serve; willingly leave their jurisdiction without order or permission; or intentionally cause them Harm or allow Harm to befall them, whether directly or indirectly, erase the Loyalty and mark the Abyss.  The MC will always give you a warning if your actions would default on the Entanglement, and your choice to defy this warning is what counts as clear intent.
    </div>
    <br>

    <em>When sworn to a player's Character:</em>

    <div class="blurb spaceAbove">
        If you do any of the following with clear intent: ignore a plea for help from those you are sworn to serve, intentionally leave them stranded in a time of need, or intentionally sabotage or prevent their attendance to their other Entanglements, erase the Entanglement and mark the Abyss.  The MC will always give you a warning if your actions would default on the Entanglement, and your choice to defy this warning is what counts as clear intent.
    </div>

    <h3 v-if="embedded">Abandonment</h3>
    <h2 v-else>Abandonment</h2>
    If you find yourself in a situation where fulfilling your Loyalty becomes untenable or distasteful, only those whom you are sworn to serve may release you from your oath.  Ask them to be relieved of your duty.  If they agree to your request, you may erase the Entanglement.  Alternatively, if your oath is permanent, they may choose to maintain the oath while adding a condition of finality.

    <h3 v-if="embedded">Completion</h3>
    <h2 v-else>Completion</h2>
    If your oath is not permanent then when the time or event of its end arrives you may erase the Entanglement immediately and erase one mark of Abyss.  If you choose to not erase the Entanglement, then instead erase the end condition and make your Loyalty permanent.

    <div class="spaceAbove">
        When someone to whom you have pledged Loyalty dies, erase your Entanglement.  If they died of unnatural causes which you were unable to prevent, mark the Abyss.
    </div>

</div>
<br><br>
&nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>