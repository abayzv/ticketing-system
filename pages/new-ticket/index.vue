<template>
    <Layout>
        <form action="" class="w-1/3">
            <FormInput horizontal name="customerId" label="Customer Id" :value="form" />
            <FormSelect horizontal name="ticketIssue" label="Ticket Issue" :data="[{ name: 'test' }, { name: 'test' }]"
                :value="form" required />
            <FormSelect horizontal name="productCategory" label="Product Category"
                :data="[{ name: 'test' }, { name: 'test' }]" :value="form" required />
            <FormSelect horizontal name="productId" label="Product Id" :data="[{ name: 'test' }, { name: 'test' }]"
                :value="form" required />
        </form>
    </Layout>
</template>

<script>
export default {
    setup() {
        const form = {

        }

        return {
            form
        }
    },
}
</script>