<template>
    <div>
        <div class="flex items-center justify-between">
            <Title>{{ title }}</Title>
            <NuxtLink v-if="title" class="font-nunito text-sm text-secondary font-bold tracking-wider" to="/">See More
            </NuxtLink>
        </div>
        <div class="grid gap-3 mt-5">
            <TicketCard v-for="(item, index) in ticket" :key="index" :items="item" :index="index" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        status: {
            type: String,
            default: 'recent'
        },
        title: {
            type: String,
        }
    },
    setup() {
        const ticket = [
            {
                title: 'Request For New Tax Information',
                status: 'active',
            },
            {
                title: 'Request For New Tax Information',
                status: 'proggress'
            },
            {
                title: 'Request For New Tax Information',
                status: 'proggress'
            },
            {
                title: 'Request For New Tax Information',
                status: 'proggress'
            },
            {
                title: 'Request For New Tax Information',
                status: 'proggress'
            },
            {
                title: 'Request For New Tax Information',
                status: 'closed'
            },
            {
                title: 'Request For New Tax Information',
                status: 'closed'
            },
        ]

        return {
            ticket
        }
    }
}
</script>