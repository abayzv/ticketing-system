<template>
    <div class="flex h-[100vh] overflow-hidden">
        <LayoutSidebar />
        <div class="w-full flex flex-col">
            <LayoutHeader />
            <div class="p-10 px-16 flex-grow shrink overflow-y-scroll">
                <Breadcumb v-if="breadcumb" />
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        breadcumb: {
            type: Boolean,
            default: true
        }
    }
}

</script>