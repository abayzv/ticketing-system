<template>
    <div class="flex">
        <LayoutSidebar />
        <div class="w-full">
            <LayoutHeader />
            <div class="p-10 px-16">
                <slot />
            </div>
        </div>
    </div>
</template>