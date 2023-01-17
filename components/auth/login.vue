<template>
    <div class="bg-primary h-[100vh] w-[100vw] flex items-center justify-center font-montserrat">
        <div class="w-[100vw] h-[100vh] fixed top-[14%] left-[-15%]"
            style="background-image: url('/images/bg-login.svg'); background-repeat: no-repeat; background-size: contain;">
        </div>
        <div class="flex flex-col w-[30%] z-[1]">
            <div class="flex flex-col items-center mb-10">
                <Logo class="w-[200px] mb-3" />
                <h1 class="text-[28px] text-white font-bold">Flou Support Dashboard</h1>
            </div>
            <Card>
                <h1 class="text-[24px] font-bold my-4 text-center text-secondary">Login</h1>
                <form @submit.prevent="userLogin()">
                    <FormInput class="mb-4" label="Email Address" name="email" v-model="form" />
                    <FormInput class="mb-4" label="Password" name="password" v-model="form" inputType="password" />
                    <div class="flex items-center justify-between">
                        <a href="" class="text-secondary font-medium leading-1 text-sm">Forgot Password?
                            <span class="block"> Please contact administrator</span>
                        </a>
                        <Button type="submit">Login</Button>
                    </div>
                </form>
            </Card>
        </div>
    </div>
</template>
  
<script>

import { useStore, useRouter } from '@nuxtjs/composition-api'

export default {
    setup() {

        const store = useStore();
        const router = useRouter();

        const form = {
            email: 'flou@admin.com',
            password: 'pass789'
        }

        const userLogin = () => {
            if (form.email === store.state.email && form.password === store.state.password) {
                store.commit('setLogin', true)
                router.push('/')
            } else {
                alert('Email or Password is wrong')
            }
        }
        return {
            form,
            userLogin
        }
    }
}
</script>