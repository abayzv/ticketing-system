<template>
    <Layout :breadcumb="false">
        <div class="flex items-end justify-between">
            <Breadcumb />
            <Button>Add New Team +</Button>
        </div>

        <!-- Data Table -->
        <DataTable :header="header" :data="data" :filter="filter" class="my-10" />
    </Layout>
</template>

<script>
export default {
    setup() {
        const header = [
            'teamId',
            'name',
            'acceptedSeverity',
            'acceptedAccountType',
            'status'
        ]

        const data = [
            {
                teamId: 'T01',
                name: 'Team A',
                acceptedSeverity: 'Low',
                acceptedAccountType: 'Personal',
                status: 'Active'
            },
            {
                teamId: 'T02',
                name: 'Team B',
                acceptedSeverity: 'Low',
                acceptedAccountType: 'Personal',
                status: 'Active'
            },
            {
                teamId: 'T03',
                name: 'Team C',
                acceptedSeverity: 'Low',
                acceptedAccountType: 'Personal',
                status: 'Active'
            },
            {
                teamId: 'T04',
                name: 'Team D',
                acceptedSeverity: 'Low',
                acceptedAccountType: 'Bussiness',
                status: 'Inactive'
            },
            {
                teamId: 'T05',
                name: 'Team E',
                acceptedSeverity: 'Low',
                acceptedAccountType: 'Bussiness',
                status: 'Inactive'
            },
        ]

        const filter = [
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
                type: 'select',
                data: [
                    {
                        name: 'All',
                        value: 'all'
                    },
                    {
                        name: 'Individual',
                        value: 'individual'
                    },
                    {
                        name: 'Company',
                        value: 'company'
                    }
                ]
            },
            {
                name: 'Severity',
                type: 'select',
                data: [
                    {
                        name: 'All',
                        value: 'all'
                    },
                    {
                        name: 'Low',
                        value: 'low'
                    },
                    {
                        name: 'Medium',
                        value: 'medium'
                    },
                    {
                        name: 'High',
                        value: 'high'
                    }
                ]
            }
        ]


        return {
            header,
            data,
            filter
        }

    }
}
</script>