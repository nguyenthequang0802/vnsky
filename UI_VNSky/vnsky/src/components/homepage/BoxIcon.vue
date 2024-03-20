<script setup>
    import { initFlowbite } from 'flowbite';
    import{onMounted} from 'vue';
    onMounted(() => {
        initFlowbite();
    })
</script>

<template>
    <section class="relative bg-[#4DA3E2]">
        <div class="container m-auto lg:px-[13rem]">
            <div class="flex items-center">
                <div class="m-2 w-[180px]">
                    <a href="">
                        <img src="https://vnsky.vn/img/apple-store.6139e418.svg" alt="">
                    </a>
                </div>
                <div class="m-2 w-[180px]">
                    <a href="">
                        <img src="https://vnsky.vn/img/google-play.eb1266ac.svg" alt="">
                    </a>
                </div>
                <div class="">
                    <img src="https://vnsky.vn/img/qr.e2aa622c.jpg" alt="" class="m-2 w-[122px] rounded-[16px]">
                </div>
                <div class="hidden xl:block">
                    <img src="https://vnsky.vn/img/app-ig.2f916a57.webp" alt="" class="h-[440px] absolute top-[-175px] right-[20%]">
                </div>
            </div>
        </div>
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