<template>
    <Layout>
        <form action="" class="w-1/3">
            <FormInput horizontal name="customerId" title="Customer Id" :value="formData" />
            <FormSelect horizontal name="ticketIssue" title="Ticket Issue" :data="[{ name: 'test' }, { name: 'test' }]"
                :value="formData" required />
            <FormSelect horizontal name="productCategory" title="Product Category"
                :data="[{ name: 'test' }, { name: 'test' }]" :value="formData" required />
            <FormSelect horizontal name="productId" title="Product Id" :data="[{ name: 'test' }, { name: 'test' }]"
                :value="formData" required />
            <FormInput horizontal name="title" title="Title" :value="formData" required />
            <FormTextArea title="Description" required horizontal :value="formData" name="description" />
            <FormRadio title="Urgency" name="urgency" :data="dataRadio" :value="formData" />
        </form>
    </Layout>
</template>

<script>
export default {
    setup() {
        const formData = {

        }
        const dataRadio = [
            {
                label: 'Low',
                value: 'low'
            },
            {
                label: 'Medium',
                value: 'medium'
            },
            {
                label: 'Urgent',
                value: 'urgent'
            },
            {
                label: 'Critical',
                value: 'critical'
            }
        ]

        return {
            formData,
            dataRadio
        }
    },
}
</script>