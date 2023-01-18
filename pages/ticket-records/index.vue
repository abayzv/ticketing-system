<template>
    <Layout>
        <!-- Data Filter -->
        <DataFilter :filter="filter" />
    </Layout>
</template>

<script>
export default {
    setup() {
        const filter = [
            {
                name: 'Ticket Number',
                type: 'text'
            },
            {
                name: 'Status',
                type: 'text'
            },
            {
                name: 'Submited Time',
                type: 'date-range'
            },
            {
                name: 'Keyword',
                type: 'text'
            },
        ]

        return {
            filter
        }
    }
}

</script>