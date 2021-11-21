<!-- ============================== Script ============================== -->
<script setup>
    import Move from '@/components/Move.vue';
    import Options from '@/components/Options.vue';
</script>

<!-- ============================== Template ============================== -->
<template>
<h1 id="entanglement_devotion">Devotions</h1>
<div class="blurb">
    To devote yourself to a task means more than a simple agreement to help.  It is the commitment to risk honor and name and blood for a cause.  The player is allowed to entangle themselves within any request for help, whether or not the MC intended to have made such a request.  Be warned that devotion implies adversity.  There is no such thing as a small and menial goal.
    todo: rewrite this
    <br><br>
    Examples:
    <Options bullet="⇀" :options="[
        'I swore to Marienne that I would rescue her child from the Baron de RoseFitz.',
        'I am the defender of the people of Sekkerdi, and promised to defend them from the demon-boar in the forest.',
        'Consul Bergen fears for his son\'s safety during the convocation, I have given my word that I will keep him safe.',
    ]" />
    <br><br>
    <Move id="make_a_promise" ruled shaded>
        <template v-slot:name>Devote yourself</template>
        <template v-slot:body>
            When someone asks you to <b>commit yourself to their cause or their need</b>, you have a choice: dismiss their cries, or devote yourself to the task.  If you dismiss them, you're done here and can get on with your life, unburdened.  If you take part in their struggles, erase a mark of Abyss and write a new Entanglement to describe who you're helping and the commitment you've made to them.
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
        'If you earnestly try your best to fulfill your devotion and see it through to the end, enduring all the trouble you get into along the way- whether or not the result is the goal you committed to- erase the Entanglement and remove 2 marks of Abyss.',
    ]" />
    <h2>Failure</h2>
    <Options bullet="❍" :options="[
        'If you do any of the following with clear intent: abandon your devotion, avoid taking action while the situation resolves itself, or commit an act which directly opposes your promised goal, erase the Entanglement and mark the Abyss.  The MC will always give you a warning if your actions would default on this Entanglement.  Your choice to defy this warning is what counts as clear intent.',
    ]" />
    <h2>Abandonment</h2>
    <Options bullet="❍" :options="[
        'In a situation where fulfilling your Devotion as it is written becomes untenable, or if the situation changes to dramatically conflict with the nature of your commitment, but you still wish to see the Entanglement through to the end, you may propose to change the terms.  If the table agrees with your proposal, you may rewrite your devotion at no cost.  This may not alter the type of Entanglement.',
    ]" />
</div>
<br><br>
&nbsp;
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
</style>