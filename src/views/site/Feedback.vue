<template>
    <hr>
    <br>
    <div id="feedback" class="feedback">
        <span>Have some feedback about Deathless?</span>
        <span>Maybe you just want to say "Hello!"?</span>
        <span>&nbsp;</span>
        <span>Go ahead and tell us what's good at <a href="mailto:keepers@innumerable-engines.net">keepers@innumerable-engines.net</a>.</span>
    </div>
    <br>
    <hr>
    <br>
</template>

<script>
const feedback = { name: 'feedback' };
export default feedback;
</script>

<style scoped lang="scss">
.feedback {
    text-align: center;
    display: flex;
    flex-direction: column;
}
</style>