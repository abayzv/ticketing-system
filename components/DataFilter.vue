<template>
    <div class="flex gap-5 items-end">
        <div class="grid grid-flow-col auto-cols-auto gap-5 items-end w-full">
            <template v-for="(item) in filter">
                <FormInput v-if="item.type === 'text'" class="justify-items-end" :name="item.name" :value="form"
                    :title="item.name" :type="item.type" />
                <FormSelect v-else-if="item.type === 'select'" class="justify-items-end" :name="item.name" :value="form"
                    :title="item.name" :type="item.type" :data="item.data" />
                <FormDate type="range" v-else-if="item.type === 'date-range'" :value="form" />
                <!-- <DatePicker v-else-if="item.type === 'date-range'" v-model="form" /> -->
            </template>
        </div>
        <div>
            <Button>Search</Button>
        </div>
    </div>
</template>

<script>
// import { Calendar, DatePicker } from 'v-calendar';
export default {
    props: {
        filter: {
            type: Array,
            default: () => []
        }
    },
    setup() {
        const form = {}

        return {
            form,
        }

    },
    // components: {
    //     Calendar,
    //     DatePicker
    // }
}

</script>