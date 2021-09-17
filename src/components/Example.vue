<!-- ============================== Script ============================== -->
<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();
const router = useRouter();

// ---------- props
const props = defineProps({
    id: {
        type: String,
        description: "unique id of this example so that it can be made visible uniquely when multiples are embedded on a single page.",
        required: true,
    },
});

// ---------- swipe (touch event) handling
let touchX = 0;
let touchY = 0;
let touchT = 0;
const handleTouchStart = (ev) => {
    touchX = ev.targetTouches[0].screenX;
    touchY = ev.targetTouches[0].screenY;
    touchT = ev.timeStamp;
};
const handleTouchEnd = (ev) => {
    const diffX = ev.changedTouches[0].screenX - touchX;
    const diffY = ev.changedTouches[0].screenY - touchY;
    const diffT = ev.timeStamp - touchT;
    touchX = 0;
    touchY = 0;
    touchT = 0;
    if (diffX > 100 && -50 < diffY && diffY < 50 && diffT < 1000) hide();
};

// ---------- slideout visibility control
const slideout = ref(null);
let isVisible = ref(false);
const show = () => {
    router.push({ query: {
        showExample: props.id,
    }});
    slideout.value.focus();
};
const hide = () => {
    slideout.value.blur();
    // unwind the history if it returns us to the same page
    if (window.history.state.back === route.path) {
        router.back();
        return;
    }
    // otherwise, push forward to the base page
    router.push({ query: {
        showExample: undefined,
    }});
};
const hideIfShown = () => {
    if (!isVisible.value) return;
    hide();
};
watch(
    () => route.query.showExample,
    () => isVisible.value = route.query.showExample === props.id,
);

// ---------- lifecycle and navigation hooks
onMounted(() => {
    isVisible.value = route.query.showExample === props.id,
    document.addEventListener('click', hideIfShown);
    slideout.value.addEventListener('touchstart', handleTouchStart, false);
    slideout.value.addEventListener('touchend', handleTouchEnd, false);
});
onUnmounted(() => {
    document.removeEventListener('click', hideIfShown);
});
</script>

<!-- ============================== Template ============================== -->
<template>
<div
    class="icon"
    @click.stop="show"
>¿？</div>
<div :class="{
        'example': true,
        'example--shown': isVisible,
    }"
    @keyup.esc="hide"
    @click.stop="() => {}"
    ref="slideout"
    tabindex="-1"
>
    <div class="body">
        <div
            class="close clickable"
            @click.stop="hide"
        >╳</div>
        <div class="header">"<slot name="header"/>"</div>
        <slot name="body"/>
    </div>
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>

.example {
    z-index: 1000;
    transition: right 0.25s ease-out;
    overflow-y: auto;
    position: fixed;
    height: 100%;
    width: 800px;
    top: 58px;
    right: -800px;

    &:focus{
        outline: none;
    }

    @media screen and (max-width: 900px) {
        width: 110vw;
        right: -110vw;
    }

    &--shown {
        right: -50px;

        @media screen and (max-width: 900px) {
            right: -10vw;
        }
    }

    .close {
        position: absolute;
        right: 64px;
        font-size: 1.6em;
        color: $color-text-sunk;
    }

    .header {
        font-size: 1.5em;
        font-weight: 900;
        line-height: 1.25em;
        margin-bottom: 8px;
    }

    .body {
        padding: 16px 80px 64px 24px;
        min-height: 100%;
        height: max-content;
        background-color: white;
        border-left: 2px solid white;

        @media screen and (max-width: 900px) {
            padding: 16px calc(10vh + 12px) 64px 40px;
        }
    }
}

.icon {
    color: #2b72c2;
    cursor: pointer;
}
</style>