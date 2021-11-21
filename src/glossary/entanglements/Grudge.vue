<!-- ============================== Script ============================== -->
<script setup>
    import Move from '@/components/Move.vue';
    import Options from "@/components/Options.vue";
</script>

<!-- ============================== Template ============================== -->
<template>
<h1 id="entanglement_grudge">Grudge</h1>
<div class="blurb">
    Sometimes it isn't about taking on other peoples problems.  You'll have a few of your own issues to settle along the way.  It doesn’t take much to decide that it's time to hold a Grudge.  Dealing with wrongdoings is often daily life for the characters.  They shouldn't be spoken lightly.  No matter who started the fight, as soon as you declare a Grudge the MC will turn that character into a proper rival or villain.
    <br><br>
    Examples:
    <Options bullet="⇀" :options="[
        'The Baron de RoseFitz kidnapped my nieces in a raid and sold them.  I won\'t rest until he gets dragged into the streets and hanged.',
        'The demon-boar of Sekkerdi forest ripped off my arm and ate it.  I\'ll hunt it down and have a banquet of meat myself.',
        'Consul Bergen\'s son, was first my apprentice and then my lover, until his father found out and had me illegitimately jailed.  His son died of sickness while I rotted in this cell.  We\'re not even until I take something precious from him in turn.',
    ]" />
    <br><br>
    <Move id="hold_a_grudge" ruled shaded>
        <template v-slot:name>Hold A Grudge</template>
        <template v-slot:body>
            When you or someone you care about <b>gets wronged in an egregious way</b>, you have a choice: forgive your antagonist and make peace with yourself, or stake a sincere commitment to bring them the justice or punishment they deserve.  If you make peace, you're done here and can try to forget the pain.  If you opt for revenge, write a new Grudge which describes why that person or creature deserves to get what's coming.
        </template>
        <template v-slot:example>
        <h3 class="lineTo">Design Thoughts</h3>
            todo
        <h3 class="lineTo">In Play</h3>
        <div class="playExample miniBorder">
            <p>"todo", the author says.</p>
        </div>
        </template>
    </Move>
    <h2>Completion</h2>
    <Options bullet="❍" :options="[
        'If you earnestly try your best to right the wrongs and aveng yourself, enduring all the trouble you get into along the way to see it through to the end- whether or not the result is what you committed to- erase the Entanglement and remove 2 marks of Abyss.',
    ]" />
    <h2>Failure</h2>
    <Options bullet="❍" :options="[
        'If you do any of the following with clear intent: abandon pursuit of your grudge, avoid engaging while the world takes vengeance into its own hands, or allow your antagonist to go free and unharmed when nothing prevents you from stopping them, erase the Grudge and mark the Abyss.  The MC will always give you a warning if your actions would default on the Entanglement, and your choice to defy this warning is what counts as clear intent.',
    ]" />
    <h2>Abandonment</h2>
    <Options bullet="❍" :options="[
        'If you find yourself in a situation where fulfilling your grudge as it is written becomes untenable, or if your understanding of the situation changes to dramatically conflict with the nature of your commitment, but you still wish to see the Entanglement through to the end, you may propose to change the terms.  If the table agrees with your proposal, you may rewrite your grudge at no cost.  This may not alter the type of Entanglement.',
    ]" />
</div>
<br><br>
&nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>