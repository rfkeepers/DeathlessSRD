<!-- ============================== Script ============================== -->
<script setup>
import Options from '@/components/Options.vue';
import Devotion from '@/glossary/entanglements/Devotion.vue';
import Grudge from '@/glossary/entanglements/Grudge.vue';
import Loyalty from '@/glossary/entanglements/Loyalty.vue';
import Obsession from '@/glossary/entanglements/Obsession.vue';

import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

const ents = [
    { base: 'devotion', label: 'Devotions' },
    { base: 'grudge', label: 'Grudges' },
    { base: 'loyalty', label: 'Loyalties' },
    { base: 'obsession', label: 'Obsessions' },
];

const scrollTo = (hash, behavior = 'smooth') => {
    let el = document.getElementById(hash);
    el.scrollIntoView({ behavior });
};

onMounted(() => {
    if (route.hash) {
        scrollTo(route.hash.substring(1), 'auto');
    }
});

router.afterEach(to => {
    let hash = (to.hash) ? to.hash.substring(1) : 'entanglements_page_title';
    scrollTo(hash, 'auto');
});
</script>

<!-- ============================== Template ============================== -->
<template>
<div class="entanglements">
    <h1 class="title" id="entanglements_page_title">Entanglements</h1>
    Living is a tangled business.  A knotted weave of relationships both friendly and fierce.  The Abyss eats away at this tapestry, pulling at the characters by their threads.  The only means of self-preservation is to grasp at new strings, to stitch them in, join your lives together so that any tension pulling at one then binds both more tightly together.
    <br><br>
    
    Entanglements are the counterweight to the Abyss: chaotic, present, and meaningful existence.  As the characters gradually lose themselves to the violent ends of the world they can recover (or perhaps make themselves anew) by getting involved in other peoples' lives and goals.  Granted, not every acquaintence or bond can make the cut.  A true Entanglement is formed when the relationship puts someone or something important on the line.  The stakes should be high.  And if they aren't, it's the MCs job to get them there, to make the solutions perilous and conflicted and the opposition credible.
    <br><br>
    
    Entanglements separated into four categories:
    <div class="categories">
        <h3
            v-for="ent in ents"
            :key="ent.base"
            class="categories__item"
        >
            <router-link
                exact
                :to="{
                    path: `/entanglements`,
                    hash: `#entanglement_${ent.base}`,
                }"
                class="forceColor forceClickable"
            >
                {{ ent.label }}
            </router-link>
        </h3>
    </div>
    <br>
    <hr>
    <Devotion embedded />
    <br>
    <hr>
    <Grudge embedded />
    <br>
    <hr>
    <Loyalty embedded />
    <br>
    <hr>
    <Obsession embedded />
    <br><br>
</div>
</template>

<!-- ============================== Style ============================== -->
<style lang="scss" scoped>
.categories {
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        align-items: center;
    }
}
</style>