<script setup>
    import { initFlowbite } from 'flowbite';
    import{onMounted} from 'vue';
    onMounted(() => {
        initFlowbite();
    })
</script>

<template>
    <section class="container m-auto mt-32 lg:px-[13rem]">
        <h3 class="md:text-4xl text-2xl lg:leading-normal leading-normal font-bold my-4">
            Trải nghiệm
            <span class="text-[#009EDB] font-bold">ứng dụng VNSKY</span>
        </h3>
    </section>
</template>

<style scoped>
    .bground{
        background-image: url(https://vnsky.vn/img/Rectangle.2b780f44.webp);
        background-position: 50%;
        background-size: cover;
        height: 725px;
        margin-top: -170px;
    }
</style>