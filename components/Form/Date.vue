<template>
    <div v-if="type === 'range'" class="flex flex-col gap-2 font-nunito">
        <label class="text-sm font-bold leading-[20px] tracking-wide" for="">{{ label }}</label>
        <div class="flex gap-3">
            <!-- <input type="date" name="" id="" placeholder="Start Date"
                class="border-[#DFDFDF] rounded-[4px] border p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-secondary bg-[#FBFCFC]">
            <input type="date" name="" id=""
                class="border-[#DFDFDF] rounded-[4px] border p-3 text-sm w-full focus:outline-none focus:ring-2 focus:ring-secondary bg-[#FBFCFC]"> -->
            <client-only>
                <div class="relative w-full">
                    <date-picker placeholder="Start Date" format="MM/dd/yyyy" v-model="value['dateStart']" />
                    <i class="icon calendar absolute top-3 right-3"></i>
                </div>
                <div class="relative w-full">
                    <date-picker placeholder="Start Date" format="MM/dd/yyyy" v-model="value['dateEnd']" />
                    <i class="icon calendar absolute top-3 right-3"></i>
                </div>
            </client-only>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'date'
        },
        label: {
            type: String,
            default: 'Date'
        },
        value: {},
    },
    setup() {

    },
}
</script>

<style>
.vdp-datepicker input {
    border: 1px solid #DFDFDF !important;
    border-radius: 4px;
    padding: 0.75rem;
    font-size: 0.875rem;
    width: 100%;
    background-color: #FBFCFC;
    font-family: 'Nunito', sans-serif;
}

.vdp-datepicker input:focus {
    outline: 2px solid #29BAA3 !important;
}
</style>