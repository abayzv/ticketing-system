<template>
    <div class="flex gap-5 items-end">
        <div class="grid grid-flow-col auto-cols-auto gap-5 items-end w-full">
            <template v-for="(item) in dataFilter">
                <FormInput v-if="item.type === 'text'" class="justify-items-end" :name="item.name" :value="form"
                    :label="item.name" :type="item.type" />
                <FormSelect v-else-if="item.type === 'select'" class="justify-items-end" :name="item.name" :value="form"
                    :label="item.name" :type="item.type" />
            </template>
        </div>
        <div>
            <Button>Search</Button>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const form = {}
        const dataFilter = [
            {
                name: 'Team Id',
                type: 'text',
            },
            {
                name: 'Name',
                type: 'text',
            },
            {
                name: 'Account Type Handling',
                type: 'select'
            },
            {
                name: 'Severity',
                type: 'select'
            }
        ]

        return {
            form,
            dataFilter
        }

    }
}

</script>