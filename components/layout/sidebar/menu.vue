<template>
    <ul class="mt-7">
        <li v-for="(item, index) in menu" :key="index">
            <nuxt-link :to="item.link" class="flex items-center gap-3 py-4 px-6 text-white"
                :class="{ 'bg-secondary': item.link == route.path }">
                <i class="icon" :class="item.icon"></i><span class="font-nunito font-medium">{{ item.name }}</span>
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
import { useStore, useRouter, useRoute } from '@nuxtjs/composition-api'

export default {
    setup() {
        const store = useStore()
        const router = useRouter()
        const route = useRoute()

        const menu = [
            {
                name: 'Dashboard',
                icon: 'dashboard',
                link: '/dashboard',
            },
            {
                name: 'Support Officer',
                icon: 'support',
                link: '/support-officer'
            },
            {
                name: 'Teams',
                icon: 'teams',
                link: '/teams'
            },
            {
                name: 'Compensation',
                icon: 'compensation',
                link: '/compensation'
            },
            {
                name: 'Ticket Records',
                icon: 'task-list',
                link: '/ticket-records'
            },
            {
                name: 'NPS Statistic',
                icon: 'statistic',
                link: '/nps-statistic'
            }
        ]

        return {
            store,
            router,
            menu,
            route
        }
    }
}
</script>