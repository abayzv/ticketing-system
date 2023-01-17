<template>
    <div>
        <div class="flex items-center justify-between">
            <Title>Support Ticket NPS</Title>
            <NuxtLink class="font-nunito text-sm text-secondary font-bold tracking-wider" to="/">See More</NuxtLink>
        </div>
        <div class="w-full flex mt-5">
            <NPSChart class="w-3/4" />
            <div class="pl-24 gap-5 grid w-1/4">
                <DashboardCardInfo v-for="(item, index) in cardItems" :key="index" :items="item" :background="false" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup() {
        const cardItems = [
            {
                title: 'This Month NPS Score',
                value: 40,
                color: 'warning-dark'
            },
            {
                title: 'Yearly NPS Score',
                value: 35,
                color: 'purple'
            },
        ]

        return {
            cardItems
        }
    }
}
</script>