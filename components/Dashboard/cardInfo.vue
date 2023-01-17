<template>
    <div class="rounded-lg overflow-clip" style="{background-image: url('/images/bg-login.svg');}"
        :class="{ 'bg-primary': items.color === 'primary', 'bg-secondary': items.color === 'secondary', 'bg-[#D9D9D9]': items.color === 'gray', 'bg-[#FFD556]': items.color === 'warning', 'bg-[#4834D4]': items.color === 'purple', 'bg-[#F39C12]': items.color === 'warning-dark' }">
        <div class="p-5 text-white text-[48px] text-center relative overflow-clip">
            <div v-if="background" class="w-[130px] h-[300px] absolute top-0 left-[-15%] -z-2"
                style="background-image: url('/images/bg-login.svg'); background-repeat: no-repeat; background-size: 130px;">
            </div>
            {{ items.value }}
        </div>
        <div class=" text-white p-5 text-center text-sm font-semibold"
            :class="{ 'bg-primary-dark': items.color === 'primary', 'bg-secondary-dark': items.color === 'secondary', 'bg-[#A1A0A0]': items.color === 'gray', 'bg-[#E99716]': items.color === 'warning', 'bg-[#6B5BD9]': items.color === 'purple', 'bg-[#F5AF41]': items.color === 'warning-dark' }">
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
        },
        background: {
            type: Boolean,
            default: true
        }
    }
};
</script>