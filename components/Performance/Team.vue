<template>
    <div class="grid gap-2 font-nunito">
        <div v-for="(items, index) in data" :key="index" class="grid grid-cols-2 bg-[#F9F9F9] p-5 px-10">
            <div class="flex items-center gap-5">
                <div class="font-bold">{{ index + 1 }}.</div>
                <i class="icon teams-primary"></i>
                <div>
                    <div class="font-bold">{{ items.name }}</div>
                    <div class="text-sm text-primary font-semibold">This Month ticket handled: {{
                        items.thisMonthTicket
                    }}</div>
                    <div class="text-sm text-primary font-semibold">Last Month ticket handled: {{
                        items.lastMonthTicket
                    }}</div>
                </div>
            </div>
            <div class="flex gap-5 justify-end">
                <div class="grid text-lg font-bold text-secondary">
                    <span class="text-sm font-normal text-black">NPS Last Month</span>
                    {{ items.npsLastMonth }}
                </div>
                <div>__</div>
                <div class="grid text-lg font-bold text-secondary">
                    <span class="text-sm font-normal text-black">NPS This Month</span>
                    {{ items.npsThisMonth }}
                </div>
                <div>__</div>
                <div class="grid text-lg font-bold text-secondary">
                    <span class="text-sm font-normal text-black">Yearly NPS</span>
                    {{ items.yearlyNPS }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => []
        }
    },
    setup(props) {
        console.log(props.data)
    },
}
</script>