<template>
  <div>
    <Dashboard />
    <!-- <form @submit.prevent="logout()">
      <Button type="submit">Logout</Button>
    </form> -->
  </div>
</template>

<script>
import { useStore, useRouter } from '@nuxtjs/composition-api'

export default {
  name: 'IndexPage',
  setup() {
    const store = useStore()
    const router = useRouter()

    if (store.state.isLogin){
      router.push('/dashboard')
    } else {
      router.push('/auth/login')
    }

      return {
        store,
        router,
        logout
      }
  },
}
</script>
