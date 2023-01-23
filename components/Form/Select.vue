<template>
    <div v-if="horizontal" class="flex gap-3 font-nunito w-full items-center mb-3" v-click-outside="close">
        <label class="text-sm w-2/5 text-end font-bold leading-[20px] tracking-wide" for=""><span v-if="required"
                class="text-sm text-[#FF0000] font-bold">*</span>{{ title }} :</label>
        <div class="relative w-full">
            <div @click="toggleOpen()"
                class="border-[#DFDFDF] text-[#808080] rounded-[4px] border p-3 text-sm w-full flex justify-between items-center bg-[#FBFCFC] relative cursor-pointer"
                :class="{ 'ring-2 ring-secondary': open }">
                {{ Object.keys(input).length > 0 ? input : `Select ${title}` }}
                <i class="icon chevron-down"></i>
                <div v-if="open"
                    class="absolute top-14 left-0 border z-10 border-[#DFDFDF] bg-white w-full py-2 rounded overflow-clip">
                    <ul>
                        <li v-for="(item, index) in data" :key='index' @click="setValue(index)"
                            class="py-2 px-3 hover:bg-primary hover:text-white">
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div v-else class="flex flex-col gap-2 font-nunito" v-click-outside="close">
        <label class="text-sm font-bold leading-[20px] tracking-wide" for="">{{ title }}</label>
        <div class="relative">
            <div @click="toggleOpen()"
                class="border-[#DFDFDF] text-[#808080] rounded-[4px] border p-3 text-sm w-full flex justify-between items-center bg-[#FBFCFC] relative cursor-pointer"
                :class="{ 'ring-2 ring-secondary': open }">
                Select {{ title }}
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
        title: {
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
        },
        horizontal: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const input = ref('')
        const showPassword = ref(false)
        const open = ref(false)

        const toggleOpen = () => {
            open.value = !open.value
        }

        const close = () => {
            open.value = false
        }

        const setValue = (index) => {
            input.value = props.data[index].name
        }

        watch(input, (newValue) => {
            props.value[props.name] = newValue
        })

        return {
            input,
            open,
            toggleOpen,
            close,
            setValue
        }
    }
}


</script>