<template>
    <div class="flex gap-3 font-nunito w-full items-start mb-3">
        <div class="font-nunito font-bold w-2/5 text-end">{{ title }} :</div>
        <div class="w-full flex gap-7">
            <div v-for="(item, index) in data" :key="index">
                <input type="radio" :name="name" v-model="dataInput" :value="item.value">
                <label class="text-[#696969]" :for="name">{{ item.label }}</label>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref, watch } from 'vue'
export default {
    props: {
        data: {
            type: Array,
            default: () => []
        },
        name: {
            type: String,
            default: 'radio'
        },
        value: {},
        title: {
            type: String,
            default: 'Title'
        }
    },
    setup(props) {
        const dataInput = ref('')

        watch(dataInput, (newValue) => {
            props.value[props.name] = newValue
        })

        return {
            dataInput
        }
    }
}
</script>