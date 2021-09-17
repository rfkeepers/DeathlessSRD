<!-- ============================== Script ============================== -->
<script setup>
import { entries, types } from '@/consts/glossaryEntries.js'
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router'
const route = useRoute();
const router = useRouter();

// ---------- swipe (touch event) handling
let touchX = 0;
let touchY = 0;
let touchT = 0;
const handleTouchStart = (ev) => {
    if (matchMedia("screen and (min-width: 900px)")) return;
    touchX = ev.targetTouches[0].screenX;
    touchY = ev.targetTouches[0].screenY;
    touchT = ev.timeStamp;
};
const handleTouchEnd = (ev) => {
    if (matchMedia("screen and (min-width: 900px)")) return;
    const diffX = ev.changedTouches[0].screenX - touchX;
    const diffY = ev.changedTouches[0].screenY - touchY;
    const diffT = ev.timeStamp - touchT;
    touchX = 0;
    touchY = 0;
    touchT = 0;
    console.log('touch end', diffX, diffY);
    if (diffX > 100 && -50 < diffY && diffY < 50 && diffT < 1000) hide();
    if (diffX > 100 && -50 < diffY && diffY < 50 && diffT < 1000) show();
};

// ---------- slideout visibility control
const page = ref(null);
const searchInput = ref(null);
let isVisible = ref(true);
let selected = ref('');
const show = () => {
    isVisible.value = true;
    searchInput.value.focus();
};
const hide = () => {
    searchInput.value.blur();
    isVisible.value = matchMedia("screen and (min-width: 900px)").matches;
};
const hideIfShown = () => {
    if (!isVisible.value) return;
    hide();
};
watch(
    () => route.query.selected,
    () => selected.value = route.query.selected,
);

// ---------- searching glossary entries
const searchTerm = ref('');
const formattedEntries = [];
entries.forEach(ge => {
    const fe = Object.assign({}, ge);
    fe.searchable = [fe.name, fe.type, ...fe.tags];
    formattedEntries.push(fe);
});
const typeOrder = [types.move, types.background];
formattedEntries.sort((a, b) => {
    const iat = typeOrder.indexOf(a.type);
    const ibt = typeOrder.indexOf(b.type);
    const typeCompare = iat - ibt;
    return typeCompare ? typeCompare : a.name.localeCompare(b.name);
});
const filteredGlossary = ref(Object.assign({}, formattedEntries));
const searchGlossary = (ev) => {
    let term = ev.target.value ? ev.target.value.toLowerCase().trim() : '';
    if (!term) {
        filteredGlossary.value = Object.assign({}, formattedEntries);
        return;
    }
    filteredGlossary.value = formattedEntries.filter(
        fe => fe.searchable.some(
            s => s.includes(term)
        )
    );
};

// ---------- lifecycle and navigation hooks
onMounted(() => {
    selected.value = route.query.selected,
    page.value.addEventListener('touchstart', handleTouchStart, false);
    page.value.addEventListener('touchend', handleTouchEnd, false);
});
onUnmounted(() => {
    document.removeEventListener('click', hideIfShown);
});
</script>

<!-- ============================== Template ============================== -->
<template>
<div
    :class="{
        'glossaryList': true,
        'glossaryList--slideout': isVisible,
    }"
    @keyup.esc="hide"
    ref="slideout"
    tabglossary="-1"
>
    <div class="glossaryList__search">
        <input
            type="text"
            ref="searchInput"
            class="glossaryList__search__input"
            placeholder="search for moves/playbooks/etc"
            @input="searchGlossary"
        />
    </div>
    <div class="glossaryList__entries">
        <ul @click.stop="() => hide()">
            <li
                v-for="fg in filteredGlossary"
                :key="fg"
                class="entry"
            >
                <div>{{fg.name}}</div>
                <div class="entry__type">{{fg.type}}</div>
            </li>
        </ul>
    </div>
</div>
<div
    class="glossary"
    ref="page"
    @click.stop="() => show()"
>
    Welcome to the glossary.  Here you can search quick references to any move, background, awakening, or other thingy in the game!
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
.glossary {
    height: 100%;
    width: calc(100vw - 360px);
    left: 360px;
    padding: 0 32px;
    position: fixed;

    @media screen and (max-width: 900px) {
        width: 100vw;
        left: 0;
        padding: 0;
        position: inherit;
    }

    @media screen and (min-width: 1280px) {
        padding: 0 10%;
    }
}

.glossaryList {
    z-index: 900;
    position: fixed;
    transition: left 0.25s ease-out;
    height: 100%;
    width: 360px;
    top: 58px;

    background-color: $color-background-pop;
    border-right: 1px solid $color-background-popped;

    display: flex;
    flex-direction: column;

    &:focus{
        outline: none;
    }

    @media screen and (min-width: 900px) {
        left: 0;
    }

    @media screen and (max-width: 900px) {
        width: calc(100vw + 1px);
        left: calc(-100vw - 1px);

        &--slideout {
            left: 1px;
        }
    }

    &__search {
        padding: 0 16px;
        width: 100%;
        background-color: $color-background-sunk;
        border-bottom: 2px solid $color-foreground-sunk;

        &__input {
            width: 100%;
        }
    }

    &__entries {
        // padding: 1em 24px 0 24px;
        padding-top: 1em;
        height: 100%;
        overflow-y: auto;

        .entry {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 24px;
            min-height: 40px;
            cursor: pointer;
            
            &:hover {
                background: rgba(56, 48, 109, 0.596);
            }

            &__type {
                font-size: 0.8em;
                padding: 2px 8px;
                border-radius: 4px;
                background: darkslategray;
            }
        }
    }
}
</style>