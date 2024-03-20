<script setup>
    import HotNews from "../components/HotNews.vue";
    import AttentionNews from "../components/AttentionNews.vue";
    import ListNews from "../components/ListNews.vue";
    import { initFlowbite } from 'flowbite';
    import{onMounted} from 'vue';
    onMounted(() => {
        initFlowbite();
    })
</script>

<template>
    <section>
        <div class="container mx-auto lg:px-[13rem]">
            <div class="flex py-[40px]">
                <div class="icon-news bg-[#005aaa] p-[10px] rounded-[8px]">
                    <img src="data:image/png;base64,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" alt="" style="width: 40px;">
                </div>
                <div class="flex-col mx-5">
                    <div class="text-[#005aaa] font-bold">Giới thiệu ></div>
                    <h1 class="font-bold text-[1.5rem]"> Tin tức</h1>
                </div>
            </div>
            <div class="hot-news">
                <div class="grid grid-cols-12">
                    <div class="col-span-12">
                        <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                            <div class="lg:col-span-9 xl:grid-cols-9 md:col-span-12 sm:col-span-12">
                                <HotNews/>
                            </div>
                            <div class="lg:col-span-3 xl:grid-cols-3 md:col-span-12 sm:col-span-12 attention-news">
                                <AttentionNews/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="list-news grid grid-cols-12">
                <ListNews/>
            </div>
            <div class="banner mt-[70px]">
                <a href="">
                    <img src="https://cms.vnsky.vn/webform/cms/assets/images/banner/00d08e4bdd1ac375c32e258d2d426c9e.jpeg" class="object-cover" alt="">
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
    /* .attention-news{
        background-image: linear-gradient(#e6e6e6, #fff);
        padding: 10px 20px;
    } */
</style>