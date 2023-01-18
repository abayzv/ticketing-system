<template>
    <div class="flex flex-col gap-2 font-nunito" v-click-outside="close">
        <label class="text-sm font-bold leading-[20px] tracking-wide" for="">{{ label }}</label>
        <div class="relative">
            <div @click="toggleOpen()"
                class="border-[#DFDFDF] text-[#808080] rounded-[4px] border p-3 text-sm w-full flex justify-between items-center bg-[#FBFCFC] relative cursor-pointer"
                :class="{ 'ring-2 ring-secondary': open }">
                Select {{ label }}
                <i class="icon chevron-down"></i>
                <div v-if="open"
                    class="absolute top-14 left-0 border border-[#DFDFDF] bg-white w-full py-2 rounded overflow-clip">
                    <ul>
                        <li v-for="(item, index) in data" :key='index'
                            class="py-2 px-3 hover:bg-primary hover:text-white">
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// composition api
import { computed, ref, watch } from 'vue'

export default {
    props: {
        label: {
            type: String,
            required: true
        },
        inputType: {
            type: String,
            default: 'text'
        },
        value: {},
        name: {
            type: String,
            required: true
        },
        data: {
            type: Array,
            default: () => []
        }
    },
    setup(props) {
        const input = ref(props.value)
        const showPassword = ref(false)
        const open = ref(false)

        const toggleOpen = () => {
            open.value = !open.value
        }

        const close = () => {
            open.value = false
        }

        watch(input, (newValue) => {
            props.value = newValue
        })

        return {
            input,
            open,
            toggleOpen,
            close
        }
    }
}


</script>