<template>
    <Layout>
        <form action="" class="w-1/3 grid gap-4 mt-10">
            <FormInput name="employeeId" :value="form" label="Employee Id" type="text" formType="horizontal"
                :required="true" />
            <FormInput name="name" :value="form" label="Name" type="text" formType="horizontal" :required="true" />
            <FormInput name="email" :value="form" label="Email" type="text" formType="horizontal" :required="true" />
            <FormInput name="phone" :value="form" label="Phone" type="text" formType="horizontal" :required="true" />
            <div class="flex gap-5 mt-5">
                <div class="w-1/3"></div>
                <div class="w-full">
                    <Button>Submit</Button>
                </div>
            </div>
        </form>
    </Layout>
</template>

<script>
export default {
    setup() {
        const form = {}
        return {
            form,
        }
    }
}
</script>