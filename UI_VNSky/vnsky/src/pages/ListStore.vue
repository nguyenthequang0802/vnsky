<script setup>
    import router from '@/router';
    import { initFlowbite } from 'flowbite';
    import{onMounted} from 'vue';
    onMounted(() => {
        initFlowbite();
    })
</script>

<template>
    <div class="container mt-[65px] mx-auto lg:px-[13rem]">
        <div class="text-center">
            <h1 class="text-[2.5rem] font-bold leading-normal">Địa điểm cung cấp dịch vụ viễn thông VNSKY</h1>
            <p class="title text-[1.5rem] mt-[50px] leading-relaxed">Tìm điểm cung cấp dịch vụ gần bạn</p>
        </div>
        <div class="flex justify-center gap-5 mt-5">
            <div class="select">
                <select name="" id="">
                    <option value="">Chọn Tỉnh/Thành phố</option>
                    <option value="">Tất cả</option>
                    <option value="">Thành Phố Hà Nội</option>
                    <option value="">Thành Phố Hồ Chí Minh</option>
                    <option value="">Tỉnh Vĩnh Phúc</option>
                    <option value="">Tỉnh Phú Thọ</option>
                    <option value="">Tỉnh Nghệ An</option>
                    <option value="">Tỉnh Thanh Hóa</option>
                </select>
            </div>
            <div class="select">
                <select name="" id="">
                    <option value="">Chọn Quận/Huyện</option>
                </select>
            </div>
        </div>
        <div class="mt-5 address">
            <div class="flex justify-between items-center" style="padding: 50px 0; border-bottom: 1px solid #515151;">
                <ul>
                    <li>
                        <p class="font-bold mb-3">Khu vực Hà Nội</p>
                        <p>
                            <span class="font-bold">Địa chỉ:</span>
                            Tầng 4, toàn Hateco Laroma, số 4A đường Huỳnh Thúc Kháng kéo dài, quận Đống Đa, thành phố Hà Nội
                        </p>
                        <p>
                            <span class="font-bold">Điện thoại:</span>
                            0777982686
                        </p>
                    </li>
                </ul>
                <ul class="showmap">
                    <li>
                        <a href="">Xem bản đồ</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .address{
        padding: 0 5%;
        height: 55vh;
        overflow: auto;
        margin-bottom: 20px;
        position: relative;
    }
    .address a{
        color: #045aaf;
        font-weight: 800;
        font-size: 20px;
    }
    select{
        border: 1px solid #b8b8b8;
        padding: 5px 30px;
        border-radius: 5px;
        color: #000;
    }
</style>