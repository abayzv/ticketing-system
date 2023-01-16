<template>
    <button type="button" @click="submit()"
        class="bg-primary hover:bg-opacity-80 text-white font-bold text-[16px] py-3 px-5 rounded-[10px]">
        <slot />
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        submit: {
            type: Function,
            default: () => { }
        }
    }
}
</script>