<template>
    <Layout>
        <!-- Card -->
        <div class="grid grid-cols-4 gap-10 my-10">
            <DashboardCardInfo v-for="(item, index) in cardItems" :key="index" :items="item" />
        </div>

        <!-- NPS -->
        <NPS class="my-10" />

        <!-- Ticket -->
        <Ticket title="Recent Tickets" class="my-10" />

    </Layout>
</template>

<script>
import { useStore, useRouter } from '@nuxtjs/composition-api'

export default {
    name: 'IndexPage',
    setup() {
        const store = useStore()
        const router = useRouter()

        const logout = () => {
            store.commit('setLogin', false)
            router.push('/auth/login')
        }

        const breadCumb = [
            {
                text: 'Dashboard',
                to: '/dashboard'
            },
            {
                text: 'Home',
                to: '/dashboard/home'
            }
        ]

        const cardItems = [
            {
                title: 'Support Team Officers',
                value: 15,
                color: 'primary'
            },
            {
                title: 'Number Of Team',
                value: 3,
                color: 'gray'
            },
            {
                title: 'Online Support Team',
                value: 15,
                color: 'secondary'
            },
            {
                title: 'Ticket On Progress',
                value: 30,
                color: 'warning'
            }
        ]

        return {
            store,
            router,
            logout,
            breadCumb,
            cardItems
        }
    },

    mounted() {
        if (!this.store.state.isLogin) {
            this.router.push('/auth/login')
        }
    }
}
</script>
