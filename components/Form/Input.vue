<template>
    <div>
        <div v-if="horizontal" class="flex gap-3 font-nunito w-full items-center mb-3">
            <label class="text-sm w-2/5 text-end font-bold leading-[20px] tracking-wide" for=""><span v-if="required"
                    class="text-[#ff0000] font-semibold">*</span>{{ title }} :</label>
            <div class="relative w-full">
                <input
                    class="border-[#DFDFDF] rounded-[4px] border p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-secondary bg-[#FBFCFC]"
                    v-model="dataInput" :type="inputType" :placeholder="`Enter ${title}`" />
            </div>
        </div>
        <div v-else class="flex flex-col gap-2 font-nunito">
            <label class="text-sm font-bold leading-[20px] tracking-wide" for="">{{ title }}</label>
            <div class="relative">
                <input
                    class="border-[#DFDFDF] rounded-[4px] border p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-secondary bg-[#FBFCFC]"
                    v-model="dataInput" :type="inputType" :placeholder="`Enter ${title}`" />
                <i v-if="title?.toLocaleLowerCase().includes('email')"
                    class="icon email absolute top-[13px] right-[15px]"></i>
                <i v-if="title?.toLocaleLowerCase().includes('password')" @click="setShowPassword"
                    class="icon eye absolute top-[13px] right-[15px] cursor-pointer hover:opacity-80"></i>
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
        const dataInput = ref('')
        const showPassword = ref(false)

        const setShowPassword = () => {
            if (showPassword.value === false) {
                showPassword.value = true
                props.inputType = 'text'
            } else {
                showPassword.value = false
                props.inputType = 'password'
            }

        }

        watch(dataInput, (newValue) => {
            props.value[props.name] = newValue
        })

        return {
            dataInput,
            setShowPassword
        }
    }
}


</script>