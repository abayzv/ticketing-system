<template>
    <LayoutMain :breadcumb="breadcumb">
        <slot />
    </LayoutMain>
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