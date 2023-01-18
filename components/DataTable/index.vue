<template>
    <div>
        <DataFilter :filter="filter" class="mb-7" />
        <table class="w-full tracking-wider font-nunito text-sm">
            <thead class="bg-primary text-white border border-primary">
                <tr class="text-left">
                    <th class="p-3 px-5">#</th>
                    <th class="p-3 px-5" v-for="(item, index) in header" :key="index">{{
                        camelToTitle(item)
                    }}</th>
                    <th class="p-3 px-5 text-end">Action</th>
                </tr>
            </thead>
            <tbody class="font-semibold text-[#808080]">
                <tr v-for="(item, index) in data" :key="index" class="border border-[#CCCCCC]">
                    <td class="py-4 px-5">{{ index + 1 }}.</td>
                    <td class="py-4 px-5" v-for="(value, indexKey) in header" :key="indexKey" :class="{
                        'text-secondary': value === 'status' && item[value] === 'Active'
                    }">
                        {{ item[value] }}
                    </td>
                    <td class="py-4 px-5 text-end font-extrabold text-xl">
                        <DataTableAction :id="index" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: {
        header: {
            type: Array,
            required: true
        },
        data: {
            type: Array,
            required: true
        },
        filter: {
            type: Array,
            default: () => []
        }
    },
    setup() {
        const camelToTitle = (str) => {
            return str.replace(/([A-Z])/g, ' $1')
                .replace(/^./, function (str) { return str.toUpperCase(); })
        }

        return {
            camelToTitle
        }
    }
}

</script>