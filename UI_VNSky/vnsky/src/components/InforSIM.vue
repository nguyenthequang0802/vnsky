<script setup>
    import { initFlowbite } from 'flowbite';
    import{onMounted} from 'vue';
        onMounted(() => {
        initFlowbite();
    })
</script>

<template>
    <div class="relative shadow dark:shadow-gray-800 p-2" style="box-shadow: rgba(0, 0, 0, 0.3) 5px 5px 10px !important; border-radius: 10px;">
        <form>
            <div class="px-3 mb-6">
                <h5 class="text-lg font-normal">Thông tin SIM :</h5>
            </div>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div class="px-3">
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Số thuê bao:
                        <span class="font-medium text-red-600">*</span>
                    </label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Số thuê bao..." required />
                </div>
                <div class="px-3">
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Lý do đổi SIM
                        <span class="font-medium text-red-600">*</span>
                    </label>
                    <select name="" id=""
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Chọn lý do</option>
                        <option value="">Cấp lại SIM/eSIM đã mất/hỏng</option>
                        <option value="">Đổi SIM bảo hành</option>
                        <option value="">Đổi SIM vật lý sang eSIM</option>
                        <option value="">Đổi eSIM sang SIM vật lý</option>
                    </select>
                </div>
                <div class="px-3">
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Số điện thoại liện hệ:
                        <span class="font-medium text-red-600">*</span>
                    </label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập số điện thoại" required />
                </div> 
                <div class="px-3">
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Email:
                        <span class="font-medium text-red-600">*</span>
                    </label>
                    <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nhập email nhận hợp đồng" required />
                </div>
            </div>
            <div class="mb-3">
                <div class="mb-6">
                    <label class="form-label text-black block font-medium mx-4">Vui lòng nhập số điện thoại gọi đi/nhắn tin đi để yêu cầu của bạn được hoàn thành trong thời gian sớm nhất: </label>
                </div>
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                    <div class="px-3">
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sđt đã liên hệ 1..." required />
                    </div>
                    <div class="px-3">
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sđt đã liên hệ 2..." required />
                    </div>
                    <div class="px-3">
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sđt đã liên hệ 3..." required />
                    </div>
                    <div class="px-3">
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sđt đã liên hệ 4..." required />
                    </div>
                    <div class="px-3">
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sđt đã liên hệ 5..." required />
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<style scoped>
    
</style>
