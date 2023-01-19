<template>
    <div>
        <div v-if="horizontal" class="flex gap-3 font-nunito w-full items-center mb-3">
            <label class="text-sm w-2/5 text-end font-bold leading-[20px] tracking-wide" for=""><span v-if="required"
                    class="text-[#ff0000] font-semibold">*</span>{{ label }} :</label>
            <div class="relative w-full">
                <input
                    class="border-[#DFDFDF] rounded-[4px] border p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-secondary bg-[#FBFCFC]"
                    v-model="value[name]" :type="inputType" :placeholder="`Enter ${label}`" />
            </div>
        </div>
        <div v-else class="flex flex-col gap-2 font-nunito">
            <label class="text-sm font-bold leading-[20px] tracking-wide" for="">{{ label }}</label>
            <div class="relative">
                <input
                    class="border-[#DFDFDF] rounded-[4px] border p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-secondary bg-[#FBFCFC]"
                    v-model="value[name]" :type="inputType" :placeholder="`Enter ${label}`" />
                <i v-if="label.toLocaleLowerCase().includes('email')"
                    class="icon email absolute top-[13px] right-[15px]"></i>
                <i v-if="label.toLocaleLowerCase().includes('password')" @click="setShowPassword"
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
        const input = ref(props.value)
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

        watch(input, (newValue) => {
            props.value = newValue
        })

        return {
            input,
            setShowPassword
        }
    }
}


</script>