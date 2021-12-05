<!-- ============================== Template ============================== -->
<template>
<div
    class="navDropdown"
    @click="toggleDropdown"
>
    {{ name }}
</div>
<div
    v-if="showDropdown"
    class="navPopover"
>
    <ul class="navPopover__list">
        <li
            v-for="l in links"
            :key="l.to"
            @click="routeTo(l)"
            class="navPopover__list__line"
        >
            <a
                v-if="l.external"
                :href="l.to"
            >
                {{ l.text }}
            </a>
            <router-link
                v-else
                :to="l.to"
                @click="emitRouted"
            >
                {{ l.text }}
            </router-link>
        </li>
    </ul>
</div>
</template>

<!-- ============================== Script ============================== -->
<script>
import * as evt from '@/utils/event.js';

const navDropdown = {
    name: 'navDropdown',
    emits: ['routed'],
    props: {
        name: {
            type: String,
            description: "The text of the dropdown display.",
        },
        links: {
            type: Array,
            description: "Array of objects containing 'to', 'text', and 'external', each will create a router-link.",
        },
    },
    data() { return {
        showDropdown: false,
    }; },
    methods: {
        toggleDropdown(e) {
            const offclick = (e2) => {
                if (e !== e2) {
                    this.showDropdown = !this.showDropdown;
                    document.removeEventListener('click', offclick);
                }
            }
            if (!this.showDropdown) {
                this.showDropdown = !this.showDropdown;
                document.addEventListener('click', offclick);
            }
        },
        routeTo(link) {
            if (link.external) { window.location.href = link.to; }
            this.emitRouted();
            this.$router.push(link.to);
        },
        emitRouted() {
            evt.emit('routed');
        },
    },
};

export default navDropdown;
</script>

<!-- ============================== Style ============================== -->
<style scoped lang="scss">

.navDropdown {
    cursor: pointer;
    text-indent: 1em;
    color: var(--nav-color-text, white);

    @media screen and (max-width: 900px) {
        margin-top: 8px;

        &:first-child {
            margin-top: 16px;
        }
    }
}

.navPopover {
    @media screen and (min-width: 900px) {
        position: relative;
    }
    
    &__list {
        z-index: 1100;
    
        @media screen and (min-width: 900px) {
            position: absolute;
            width: max-content;
            right: 1em;
            top: 1.75em;
            background: var(--nav-color-background, black);
            border: 2px solid var(--nav-color-border, magenta);
            border-radius: 0.5em;
            padding: 0;
        
            &:after {
                content: "";
                position: absolute;
                top: -0.4em;
                right: 5px;
                border-style: solid;
                border-width: 0 6px 6px;
                border-color:  var(--nav-color-flag, magenta) transparent;
                display: block;
                width: 0;
                z-index: 1;
            }
        }

        &__line {
            cursor: pointer;
            padding: 4px 1.25em 4px 1em;
            z-index: 1;

            &:hover {
                background: var(--nav-color-background-hover, green);
            }

            @media screen and (max-width: 900px) {
                padding: 8px;
                padding-left: 16px;
                margin-left: 20px;
                border-left: 1px solid var(--nav-color-background-hover, white);
            }

            @media screen and (min-width: 900px) {
        
                &:first-child {
                    padding-top: 6px;
                    border-top-left-radius: 0.5em;
                    border-top-right-radius: 0.5em;
                }
            
                &:last-child {
                    padding-bottom: 6px;
                    border-bottom-left-radius: 0.5em;
                    border-bottom-right-radius: 0.5em;
                }
            }
        }
    }
}
</style>