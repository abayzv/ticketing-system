<template>
    <div class="cursor-pointer relative" @click="toggleOpen()" v-click-outside="close">
        ...

        <div v-if="open"
            class="text-sm shadow-sm font-normal text-left border border-[#DFDFDF] absolute top-0 right-6 w-full rounded bg-white py-2">
            <div @click="actionEdit(id)" class="hover:text-primary hover:font-semibold px-2 py-1">Edit</div>
            <div @click="actionDelete(id)" class="hover:text-primary hover:font-semibold px-2 py-1">Delete</div>
            <Slot />
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    props: {
        id: {
            type: Number,
            required: true
        }
    },
    setup() {
        const open = ref(false)

        const testFunction = (id) => {
            alert(`testFunction: ${id}`)
        }

        // toggle open
        const toggleOpen = () => {
            open.value = !open.value
        }

        const close = () => {
            open.value = false
        }

        // action
        const actionEdit = (id) => {
            alert(`edit: ${id}`)
        }

        const actionDelete = (id) => {
            alert(`delete: ${id}`)
        }

        return {
            testFunction,
            toggleOpen,
            open,
            close,
            actionEdit,
            actionDelete
        }
    }
}

</script>