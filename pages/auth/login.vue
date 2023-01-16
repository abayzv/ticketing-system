<template>
    <AuthLogin />
</template>

<script>
import { useStore, useRouter } from '@nuxtjs/composition-api'

export default {
    setup() {
        const store = useStore()
        const router = useRouter()

        return {
            store,
            router
        }
    },

    mounted() {
        if (this.store.state.isLogin) {
            this.router.push('/')
        }
    }
}
</script>