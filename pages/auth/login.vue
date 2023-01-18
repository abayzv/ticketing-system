<template>
    <AuthLogin />
</template>

<script>
import { useStore, useRouter } from '@nuxtjs/composition-api'

export default {
    setup() {
        const store = useStore()
        const router = useRouter()

        if (store.state.isLogin) router.push('/')

        return {
            store,
            router
        }
    },
}
</script>