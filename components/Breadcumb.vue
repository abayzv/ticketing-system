<template>
    <div
        class="font-nunito font-semibold text-xl border-l border-[#DFDFDF] pl-5 tracking-wider text-secondary flex mb-5">
        <div v-for="(item, index) in menu" :key="index">
            <nuxt-link v-if="index != 0" :to="item.to">
                {{ item.text }}
            </nuxt-link>
            <span class="text-[#808080]" v-else>
                {{ item.text }}
            </span>
            <span class="mr-2" v-if="index < menu.length - 1">\</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        menu: {
            type: Array,
            default: () => []
        }
    }
}
</script>