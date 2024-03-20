<script setup>
    import HeadNews from "../components/HeadNews.vue"
    import { initFlowbite } from 'flowbite';
    import{onMounted} from 'vue';
    onMounted(() => {
        initFlowbite();
    })
</script>

<template>

    <div class="col-span-12">
        <div class="m-0 tabs">
            <div class="active tab">Tất cả</div>
            <div class="tab">Tin khuyến mại</div>
            <div class="tab">Tin tức VNSKY</div>
        </div>
        <div class="content-news">
            <div class="tab-content block">
                <div class="col-span-12">
                    <div class="py-[60px] px-0">
                        <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                            <div class="lg:col-span-4 md:col-span-12"><HeadNews/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .tabs{
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        border-bottom: 1px solid #bebebe;
    }
    .tabs .active{
        border-bottom: 2px solid #005aaa;
        color: #000;
        font-weight: 700;
    }
    .tab{
        padding: 10px 20px;
        cursor: pointer;
        border-bottom: none;
        color: #8b8b8b;
    }
</style>