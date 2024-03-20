<script setup>
    import { initFlowbite } from 'flowbite';
    import{onMounted} from 'vue';
    onMounted(() => {
        initFlowbite();
    })
</script>

<template>
    <div class="inline-grid">
        <router-link to="/tin-tuc/detail-post" class="block">
            <img src="https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18c9bc642eb0000000002206177.jpeg" alt="" class="">
        </router-link>
        <router-link to="/tin-tuc/detail-post">
                <h3 class="font-bold">MỞ SIM THỨ HAI - CHỌN SỐ PHÁT TÀI</h3>
            </router-link>
            <p class=" public-date text-[#9999b1]">05 tháng 02 , 2024</p>
            <router-link to="/tin-tuc/detail-post">
                <p class="font-bold text-[#005aaa] see-more">Xem thêm</p>
            </router-link>
    </div>
</template>

<style scoped>

</style>