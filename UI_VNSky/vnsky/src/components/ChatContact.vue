<script setup>
    import { initFlowbite } from 'flowbite';
    import{onMounted} from 'vue';
    onMounted(() => {
        initFlowbite();
    })
</script>

<template>
    <section class="relative mt-32 rounded-[12px]" style="background-color: rgb(77, 163, 266);">
        <div class="grid lg:grid-cols-12 grid-cols-1 gap-[30px] box-faq">
            <div class="lg:col-span-8 md:col-span-12 hidden md:block">
                <h1 class="mx-4 text-white text-3xl font-bold">Bạn cần hỗ trợ thêm? Liên hệ ngay với VNSKY</h1>
                <div class="flex lg:col-span-4 justify-between">
                    <div class="mx-4">
                        <a href="https://www.facebook.com/myvnsky" class="p-2">
                            <img src="https://vnsky.vn/img/faq-mess.9b30ebb4.png" alt="" style="width: 310px;">
                        </a>
                        <a href="mailto:cskh@vnsky.vn" class="p-2">
                            <img src="https://vnsky.vn/img/faq-email.82e81088.png" alt="" style="width: 310px;">
                        </a>
                    </div>
                    <div class="mx-4">
                        <a href="https://zalo.me/3063616069076585675" class="p-2">
                            <img src="https://vnsky.vn/img/faq-zalo.cc071aed.png" alt="" style="width: 310px;">
                        </a>
                        <a href="mailto:cskh@vnsky.vn" class="p-2">
                            <img src="https://vnsky.vn/img/faq-hotline.827445df.png" alt="" style="width: 310px;">
                        </a>
                    </div>
                </div>
            </div>
            <div class="lg:col-span-8 md:col-span-12 block md:hidden mx-4" style="text-align: -webkit-center;">
                <h1 class="mx-4 text-white text-3xl font-bold mt-6">Bạn cần hỗ trợ thêm? Liên hệ ngay với VNSKY</h1>
                <div class="mx-auto">
                    <a href="https://www.facebook.com/myvnsky" class="p-2">
                            <img src="https://vnsky.vn/img/faq-mess.9b30ebb4.png" alt="" style="width: 310px;">
                        </a>
                        <a href="mailto:cskh@vnsky.vn" class="p-2">
                            <img src="https://vnsky.vn/img/faq-email.82e81088.png" alt="" style="width: 310px;">
                        </a>
                        <a href="https://zalo.me/3063616069076585675" class="p-2">
                            <img src="https://vnsky.vn/img/faq-zalo.cc071aed.png" alt="" style="width: 310px;">
                        </a>
                        <a href="mailto:cskh@vnsky.vn" class="p-2">
                            <img src="https://vnsky.vn/img/faq-hotline.827445df.png" alt="" style="width: 310px;">
                        </a>
                </div>
            </div>
            <div class="lg:col-span-4 md:col-span-12 relative">
                <a href="" class="icon-phone">
                    <img src="https://vnsky.vn/img/faq-dt.df6d38ea.webp" class="mx-auto" alt="">
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .box-faq{
        align-items: center;
        height: 250px;
    }

    .icon-phone{
        position: absolute;
        top: -227px;
    }
    @media (max-width: 768px){
        .box-faq{
            height: auto;
        }
    }
</style>