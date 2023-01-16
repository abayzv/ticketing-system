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

    const logout = () => {
      store.commit('setLogin', false)
      router.push('/auth/login')
    }

    return {
      store,
      router,
      logout
    }
  },

  mounted() {
    if (!this.store.state.isLogin) {
      this.router.push('/auth/login')
    } else {
      this.router.push('/dashboard')
    }
  }
}
</script>
