<template>
    <h1 id="header" class="header">
        {{ content }}
    </h1>
</template>

<script>

const header = {
    name: 'header',
    props: {
        content: {
            type: String,
            description: "The content displayed in the header",
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

export default header;
</script>

<style scoped lang="scss">
.header {
    margin-block-start: 0.5em;
}
</style>