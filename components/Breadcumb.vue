<template>
    <div
        class="font-nunito font-semibold text-xl border-l -ml-3 border-[#DFDFDF] pl-3 tracking-wider text-secondary flex mb-5">
        <div v-for="(item, index) in menu" :key="index">
            <nuxt-link v-if="item.path !== ''" :class="{ 'text-[#808080] hover:text-secondary': index == 0 }"
                :to="item.path">
                {{ kebabToTitle(item.name) }}
            </nuxt-link>
            <span :class="menu.length === 1 || index != 0 ? 'text-secondary' : 'text-[#808080]'" v-else>
                {{ kebabToTitle(item.name) }}
            </span>
            <span class="mr-2" v-if="index < menu.length - 1">\</span>
        </div>
    </div>
</template>

<script>
import { useRoute } from '@nuxtjs/composition-api'

export default {
    setup() {
        const route = useRoute();
        const routePath = route.value.path.split('/').filter((item) => item != '');

        const menu = routePath.map((item, index) => {
            return {
                name: item,
                path: index === routePath.length - 1 ? '' : '/' + item
            }
        })

        const kebabToTitle = (str) => {
            return str.replace(/-/g, ' ').replace(/\w\S*/g, (txt) => {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            });
        }
        return {
            menu,
            kebabToTitle
        }
    }
}
</script>