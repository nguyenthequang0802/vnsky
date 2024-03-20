<script setup>
    import { initFlowbite } from 'flowbite';
    import{onMounted} from 'vue';
    onMounted(() => {
        initFlowbite();
    })
</script>

<template>
        <div>
            <router-link to="/tin-tuc/detail-post" class="block">
                <img src="https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18c9bc642eb0000000002206177.jpeg" alt="">
            </router-link>

            <div>
                <router-link to="/tin-tuc/detail-post">
                    <h1 class="font-bold text-[2rem]">MỞ SIM THỨ HAI - CHỌN SỐ PHÁT TÀI</h1>
                </router-link>
                <p class="sub-title">
                    <img src="https://vnsky.vn/img/1f4cd.16d417b8.svg" class="inline-block mt-[-10px]" alt="">
                    Cùng khai mở năm mới phát tài vơi SIM số đẹp, dễ nhớ, hợp với phong thủy từ VNSKY. .....
                </p>
                <p class="public-date text-[#9999b1]">05 tháng 02 , 2024</p>
                <router-link to="/tin-tuc/detail-post">
                    <p class="font-bold text-[#005aaa] see-more">Xem thêm</p>
                </router-link>
            </div>
        </div>
</template>

<style scoped>

</style>