<template>
    <div class="flex flex-col gap-2 font-nunito">
        <label class="text-sm font-bold leading-[20px] tracking-wide" for="">{{ label }}</label>
        <div class="relative">
            <input class="border-[#DFDFDF] rounded-[4px] border p-3 text-sm w-full bg-[#FBFCFC]" v-model="value[name]"
                :type="inputType" />
            <i v-if="label.toLocaleLowerCase().includes('email')"
                class="icon email absolute top-[13px] right-[15px]"></i>
            <i v-if="label.toLocaleLowerCase().includes('password')" @click="setShowPassword"
                class="icon eye absolute top-[13px] right-[15px] cursor-pointer hover:opacity-80"></i>
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