<template>
    <Layout :breadcumb="false">
        <div class="flex items-end justify-between">
            <Breadcumb />
            <NuxtLink to="/support-officer/add-new-officer"><Button>Add New Team +</Button></NuxtLink>
        </div>

        <!-- Data Table -->
        <DataTable :header="header" :data="data" :filter="filter" class="my-10" />
    </Layout>
</template>

<script>
export default {
    setup() {
        const header = [
            'employeeId',
            'name',
            'email',
            'phone',
            'team'
        ]

        const data = [
            {
                employeeId: '123456',
                name: 'John Doe',
                email: 'john.doe@gmail.com',
                phone: '080012341234',
                team: 'Team A'
            },
            {
                employeeId: '123456',
                name: 'John Doe',
                email: 'john.doe@gmail.com',
                phone: '080012341234',
                team: 'Team A'
            },
            {
                employeeId: '123456',
                name: 'John Doe',
                email: 'john.doe@gmail.com',
                phone: '080012341234',
                team: 'Team A'
            },
            {
                employeeId: '123456',
                name: 'John Doe',
                email: 'john.doe@gmail.com',
                phone: '080012341234',
                team: 'Team A'
            },
            {
                employeeId: '123456',
                name: 'John Doe',
                email: 'john.doe@gmail.com',
                phone: '080012341234',
                team: 'Team A'
            },
            {
                employeeId: '123456',
                name: 'John Doe',
                email: 'john.doe@gmail.com',
                phone: '080012341234',
                team: 'Team A'
            },
            {
                employeeId: '123456',
                name: 'John Doe',
                email: 'john.doe@gmail.com',
                phone: '080012341234',
                team: 'Team A'
            },
            {
                employeeId: '123456',
                name: 'John Doe',
                email: 'john.doe@gmail.com',
                phone: '080012341234',
                team: 'Team A'
            },
        ]

        const filter = [
            {
                name: 'Employee ID',
                type: 'text'
            },
            {
                name: 'Name',
                type: 'text'
            },
            {
                name: 'E-mail',
                type: 'text'
            },
            {
                name: 'Phone',
                type: 'text'
            },
            {
                name: 'Team',
                type: 'select',
                data: [
                    {
                        name: 'Team A',
                        value: 'Team A'
                    },
                    {
                        name: 'Team B',
                        value: 'Team B'
                    },
                    {
                        name: 'Team C',
                        value: 'Team C'
                    },
                    {
                        name: 'Team D',
                        value: 'Team D'
                    },
                    {
                        name: 'Team E',
                        value: 'Team E'
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