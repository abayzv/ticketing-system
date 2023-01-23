<template>
    <div class="flex gap-3 font-nunito w-full items-start mb-3">
        <label class="font-nunito font-bold w-2/5 text-end" for=""><span v-if="required"
                class="text-[#ff0000] font-semibold">*</span>{{ title }} :</label>
        <textarea
            class="border-[#DFDFDF] rounded-[4px] border p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-secondary bg-[#FBFCFC]"
            name="" id="" cols="30" rows="5" v-model="dataInput" />
    </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
export default {
    props: {
        title: {
            type: String,
            default: 'Title'
        },
        required: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            default: 'textarea'
        },
        value: {}
    },
    setup(props) {
        const dataInput = ref('');

        watch(dataInput, (newValue) => {
            props.value[props.name] = newValue
        })

        return {
            dataInput
        }
    }
}
</script>