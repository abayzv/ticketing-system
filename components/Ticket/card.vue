<template>
    <div class="flex gap-5 font-nunito py-7 px-10"
        :class="{ 'bg-[#E4F1FA]': items.status === 'active', 'border border-[#CCCCCC]': items.status !== 'active', 'bg-[#F1F1F2]': items.status === 'closed' }">
        <div class="font-bold">{{ index + 1 }}.</div>
        <i class="icon"
            :class="{ 'email-blue': items.status === 'active', 'email-open-secondary': items.status === 'proggress', 'email-open-gray': items.status === 'closed' }"></i>
        <div class="grid gap-2 w-full">
            <div class="flex items-center justify-between">
                <div class="font-bold">{{ items.title }}</div>
                <span class="bg-[#F60505] text-white text-sm px-4 rounded-full">Overdue - 11 Oct 2022 10.00</span>
            </div>
            <div class="flex items-center justify-between">
                <div class="text-[12px] text-[#004D7D] font-bold">#TICKETS-19023-ECS</div>
                <div class="text-[#808080] text-sm font-semibold">
                    Severity Level: <span class="text-[#004D7D] font-bold text-md">MEDIUM</span>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <p class="line-clamp-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, itaque
                    adipisci. Aut, tempora. Velit, consectetur quisquam deserunt dignissimos animi in laborum aperiam
                    pariatur cumque rem consequuntur quam error ullam, accusamus quaerat odit maxime ea neque.</p>
                <div class="text-secondary text-sm font-bold w-2/5 text-end">PRODUCT ISSUE</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Object,
            default: () => { }
        },
        index: {
            type: Number,
            default: () => {
            }
        }
    }
}

</script>