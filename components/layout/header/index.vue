<template>
    <div class="py-2 flex bg-[#F1F1F2] border-b px-5 border-[#DFDFDF] sticky top-0 z-10">
        <div></div>
        <div class="ml-auto">
            <div></div>
            <div class="flex items-center gap-2">
                <img :src="store.state.avatar" alt="" class="rounded-full w-[45px] border-[3px] border-primary">
                <div class="relative">
                    <span @click="toggleDropDown()"
                        class="text-[#808080] font-nunito font-medium flex items-center gap-1 cursor-pointer">John
                        Doe
                        <i class="icon chevron-down"></i>
                    </span>
                    <div v-show="showDropDown"
                        class="absolute bg-white top-10 p-2 right-0 rounded shadow-md text-sm font-nunito w-[150px] text-[#808080] ">
                        <ul class="">
                            <li class='border-b py-1 px-5 border-[#DFDFDF]'>Profile</li>
                            <li @click="logout()" class='px-5 py-1 cursor-pointer'>Logout</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore, useRouter, ref } from '@nuxtjs/composition-api'

export default {
    setup() {
        const store = useStore()
        const router = useRouter()
        const showDropDown = ref(false)

        const logout = () => {
            store.commit('setLogin', false)
            router.push('/auth/login')
        }

        const toggleDropDown = () => {
            showDropDown.value = !showDropDown.value
        }

        return {
            store,
            router,
            logout,
            showDropDown,
            toggleDropDown,
        }
    },
}
</script>