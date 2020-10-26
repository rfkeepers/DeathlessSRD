<template>
    <div id="paragraph" class="paragraph">
        {{ content }}
    </div>
</template>

<script>

const paragraph = {
    name: 'paragraph',
    props: {
        content: {
            type: String,
            description: "The content displayed in the paragraph",
        },
    },
    data() { return {
    }; },
    created() {},
    methods: {},
    computed: {},
    watch: {},
    components: {},
};

export default paragraph;
</script>

<style scoped lang="scss">
.paragraph {
    margin-top: 0.5em;
    margin-bottom: 0.5em;
}
</style>