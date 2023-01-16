<template>
    <div class="rounded-lg overflow-clip" style="{background-image: url('/images/bg-login.svg');}"
        :class="{ 'bg-primary': items.color === 'primary', 'bg-secondary': items.color === 'secondary', 'bg-[#D9D9D9]': items.color === 'gray', 'bg-[#FFD556]': items.color === 'warning' }">
        <div class="p-5 text-white text-[48px] text-center relative overflow-clip">
            <div class="w-[130px] h-[300px] absolute top-0 left-[-15%] -z-2"
                style="background-image: url('/images/bg-login.svg'); background-repeat: no-repeat; background-size: 130px;">
            </div>
            {{ items.value }}
        </div>
        <div class=" text-white p-3 text-center text-sm"
            :class="{ 'bg-primary-dark': items.color === 'primary', 'bg-secondary-dark': items.color === 'secondary', 'bg-[#A1A0A0]': items.color === 'gray', 'bg-[#E99716]': items.color === 'warning' }">
            {{ items.title }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Layout',
    props: {
        items: {
            type: Object,
            default: () => { }
        }
    }
};
</script>