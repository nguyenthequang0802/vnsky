<script setup>
    import { initFlowbite } from 'flowbite';
    import{onMounted} from 'vue';
    onMounted(() => {
        initFlowbite();
    })
</script>

<template>
    <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px] mt-8">
        <div class="lg:col-span-4 md:col-span-12">
            <div class="relative shadow dark:shadow-gray-800 p-6 rounded-[10px]" style="box-shadow: rgba(0, 0, 0, 0.3) 5px 5px 10px !important;">
                <div class="mb-3">
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        CCCD mặt trước
                        <span class="font-medium text-red-600">*</span>
                        :
                    </label>
                    <div class="form-icon relative mt-2">
                        <label for="" class="img-preview relative shadow dark:shadow-gray-800 flex flex-col rounded-[10px]" style="box-shadow: rgba(0, 0, 0, 0.3) 5px 5px 10px;">
                            <img src="https://vnsky.vn/img/cmt.96b5e86b.svg" class="block" alt="">
                            <p style="font-size: 10px;">Vui lòng chụp rõ nét, không chói sáng và đầy đủ thông tin</p>
                        </label>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        CCCD mặt sau
                        <span class="font-medium text-red-600">*</span>
                        :
                    </label>
                    <div class="form-icon relative mt-2">
                        <label for="" class="img-preview relative shadow dark:shadow-gray-800 flex flex-col rounded-[10px]" style="box-shadow: rgba(0, 0, 0, 0.3) 5px 5px 10px;">
                            <img src="https://vnsky.vn/img/cmt.96b5e86b.svg" class="block" alt="">
                            <p style="font-size: 10px;">Vui lòng chụp rõ nét, không chói sáng và đầy đủ thông tin</p>
                        </label>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Ảnh chân dung
                        <span class="font-medium text-red-600">*</span>
                        :
                    </label>
                    <div class="form-icon relative mt-2">
                        <label for="" class="img-preview relative shadow dark:shadow-gray-800 flex flex-col rounded-[10px]" style="box-shadow: rgba(0, 0, 0, 0.3) 5px 5px 10px;">
                            <img src="https://vnsky.vn/img/avartar.d421d10a.svg" class="block" alt="">
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="lg:col-span-8 md:col-span-12">
            <form class="relative shadow dark:box-gray-800 p-6 rounded-[10px]" style="box-shadow: rgba(0, 0, 0, 0.3) 5px 5px 10px !important;">
            <div class="px-3 ">
                <h5 class="text-lg font-normal">Thông tin cá nhân :</h5>
            </div>
            <div class="mb-3 px-3">
                <div class="flex mr-[20px] items-baseline">
                    <div class="flex">
                        <div class="flex items-center me-4" style="margin-right: 50px;">
                            <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="inline-radio" class="ms-2 text-gray-900 dark:text-gray-300">CCCD/CMND</label>
                        </div>
                        <div class="flex items-center me-4">
                            <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="inline-2-radio" class="ms-2 text-gray-900 dark:text-gray-300">Hộ chiếu</label>
                        </div> 
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="">
                    <div class="px-3">
                        <label for="" class="block mb-2 text-[14px] font-normal text-gray-900 dark:text-white">
                            Họ tên
                            <span class="font-medium text-red-600">*</span>
                        </label>
                        <input type="text" id="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Họ tên..." required />
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="">
                    <div class="px-3">
                        <label for="first_name" class="block mb-2 text-[14px] font-normal text-gray-900 dark:text-white">
                            Giới tính
                            <span class="font-medium text-red-600">*</span>
                            :
                        </label>
                        <select name="" id=""
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Nam</option>
                            <option value="">Nữ</option>
                            
                        </select>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="">
                    <div class="px-3">
                        <label for="first_name" class="block mb-2 text-[14px] font-normal text-gray-900 dark:text-white">
                            Ngày sinh
                            <span class="font-medium text-red-600">*</span>
                            :
                        </label>
                        <input type="date" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ngày sinh..." required />
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="">
                    <div class="px-3">
                        <label for="" class="block mb-2 text-[14px] font-normal text-gray-900 dark:text-white">
                            Số CCCD
                            <span class="font-medium text-red-600">*</span>
                            :
                        </label>
                        <input type="number" id="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Số CCCD..." required />
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="">
                    <div class="px-3">
                        <label for="first_name" class="block mb-2 text-[14px] font-normal text-gray-900 dark:text-white">
                            Ngày cấp CCCD
                            <span class="font-medium text-red-600">*</span>
                            :
                        </label>
                        <input type="date" id="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ngày cấp..." required />
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="">
                    <div class="px-3">
                        <label for="" class="block mb-2 text-[14px] font-normal text-gray-900 dark:text-white">
                            Nơi cấp CCCD
                            <span class="font-medium text-red-600">*</span>
                            :
                        </label>
                        <input type="text" id="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nơi cấp..." required />
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="">
                    <div class="px-3">
                        <label for="" class="block mb-2 text-[14px] font-normal text-gray-900 dark:text-white">
                            Địa chỉ thường trú
                            <span class="font-medium text-red-600">*</span>
                            :
                        </label>
                        <input type="text" id="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Địa chỉ..." required />
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="">
                    <div class="px-3">
                        <label for="" class="block mb-2 text-[14px] font-normal text-gray-900 dark:text-white">
                            Tỉnh/TP
                            <span class="font-medium text-red-600">*</span>
                            :
                        </label>
                        <select name="" id=""
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Tỉnh / Thành Phố</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="">
                    <div class="px-3">
                        <label for="first_name" class="block mb-2 text-[14px] font-normal text-gray-900 dark:text-white">
                            Quận/Huyện
                            <span class="font-medium text-red-600">*</span>
                            :
                        </label>
                        <select name="" id=""
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Quận/Huyện</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="mb-3">
                <div class="">
                    <div class="px-3">
                        <label for="first_name" class="block mb-2 text-[14px] font-normal text-gray-900 dark:text-white">
                            Phường/Xã
                            <span class="font-medium text-red-600">*</span>
                            :
                        </label>
                        <select name="" id=""
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Phường/Xã</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="text-end h-16"></div>
        </form>
        </div>
    </div>
</template>

<style scoped>
    .img-preview{
        width: 100%;
        height: 189px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        border: 1px solid #ccc;
        margin-top: 5px;
        cursor: pointer;
        overflow: hidden;
    }
    
</style>