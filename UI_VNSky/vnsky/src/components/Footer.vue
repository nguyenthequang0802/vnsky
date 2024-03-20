<script setup>
    import { initFlowbite } from 'flowbite';
    import{onMounted} from 'vue';
    onMounted(() => {
        initFlowbite();
    })
</script>

<template>
    <footer class="bg-[#F1F3F4] dark:bg-gray-900">
        <div class="container mx-auto">
            <div class="grid grid-cols-12">
                <div class="col-span-12">
                    <div class="py-[60px] px-0 pb-[30px]">
                        <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                            <div class="lg:col-span-6 md:col-span-12">
                                <a href="" class="text-[22px] focus:outline-none"><img class="w-[400px] mt-[-16px]" src="https://vnsky.vn/img/logo.2d2d0d2c.svg" alt=""></a>
                            </div>
                            <div class="lg:col-span-3 md:col-span-12">
                                <h5 class="tracking-[1px] text-[#161c2d] font-bold">Kết nối với VNSKY</h5>
                                <div class="my-4">
                                    <a href="">
                                        <img src="https://vnsky.vn/img/fb.4d1a6e04.svg" class="w-[32px] m-1 inline-block" alt="">
                                    </a>
                                    <a href="">
                                        <img src="https://vnsky.vn/img/ig.b83840de.svg" class="w-[32px] m-1 inline-block" alt="">
                                    </a>
                                    <a href="">
                                        <img src="https://vnsky.vn/img/yt.6d15b414.svg" class="w-[32px] m-1 inline-block" alt="">
                                    </a>
                                    <a href="">
                                        <img src="https://vnsky.vn/img/zalo-logo.275727f3.webp" class="w-[32px] m-1 inline-block" alt="">
                                    </a>
                                </div>
                                <div>
                                    <a href="">
                                        <img src="https://vnsky.vn/img/tt.d3c8d9b2.svg" class="w-[32px] m-1 inline-block" alt="">
                                    </a>
                                    <a href="">
                                        <img src="https://vnsky.vn/img/lzd-01.15d73aaf.svg" class="w-[32px] m-1 inline-block" alt="">
                                    </a>
                                    <a href="">
                                        <img src="https://vnsky.vn/img/shopeee-01.2ad954c9.svg" class="w-[32px] m-1 inline-block" alt="">
                                    </a>
                                </div>
                            </div>
                            <div class="lg:col-span-3 md:col-span-12">
                                <h5 class="tracking-[1px] text-[#161c2d] font-bold">Tải ứng dụng</h5>
                                <div class="my-5">
                                    <a href="">
                                        <img class="w-[120px] m-1 inline-block" src="https://vnsky.vn/img/apple.7bf11292.svg" alt="">
                                    </a>
                                    <a href="">
                                        <img class="w-[120px] m-1 inline-block" src="https://vnsky.vn/img/ggplay.e4aa9a25.svg" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto">
            <div class="grid grid-cols-12">
                <div class="col-span-12">
                    <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                        <div class="lg:col-span-3 md:col-span-3">
                            <h5 class="tracking-[1px] text-[#161c2d] font-bold">Giới thiệu</h5>
                            <ul class="list-none mt-6">
                                <li>
                                    <a href="" class="text-gray-900 hover:text-gray-400 ease-in-out">
                                        <svg class="w-5 h-6 text-gray-800 dark:text-white hover:text-gray-400 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
                                        </svg>
                                        Về VNSKY
                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-gray-900 hover:text-gray-400 ease-in-out">
                                        <svg class="w-5 h-6 text-gray-800 dark:text-white hover:text-gray-400 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
                                        </svg>
                                        Tin Tức
                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-gray-900 hover:text-gray-400 ease-in-out">
                                        <svg class="w-5 h-6 text-gray-800 dark:text-white hover:text-gray-400 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
                                        </svg>
                                        Tải xuống logo VNSKY
                                    </a>
                                </li>
                            </ul>
                            <h5 class="tracking-[1px] text-gray-900 flex text-sm mt-2">
                                <a href="" class="flex">
                                    <svg class="h-[21px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"/>
                                    </svg>

                                    <span class="text-[#005AAA] text-medium text-[16px] ml-[10px]">1900 5222</span> 
                                    &nbsp;
                                    <span class="text-[14px]">(1.000đ/Phút)</span>
                                </a>
                            </h5>
                        </div>
                        <div class="lg:col-span-3 md:col-span-3">
                            <h5 class="tracking-[1px] text-[#161c2d] font-bold">Trung tâm hỗ trợ</h5>
                            <ul class="list-none mt-6">
                                <li>
                                    <a href="" class="text-gray-900 hover:text-gray-400 ease-in-out">
                                        <svg class="w-5 h-6 text-gray-800 dark:text-white hover:text-gray-400 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
                                        </svg>
                                        Chất lượng dịch vụ
                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-gray-900 hover:text-gray-400 ease-in-out">
                                        <svg class="w-5 h-6 text-gray-800 dark:text-white hover:text-gray-400 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
                                        </svg>
                                        Câu hỏi thường gặp
                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-gray-900 hover:text-gray-400 ease-in-out">
                                        <svg class="w-5 h-6 text-gray-800 dark:text-white hover:text-gray-400 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
                                        </svg>
                                        Chính sách bảo mật thông tin
                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-gray-900 hover:text-gray-400 ease-in-out">
                                        <svg class="w-5 h-6 text-gray-800 dark:text-white hover:text-gray-400 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
                                        </svg>
                                        Chính sách vận chuyển
                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-gray-900 hover:text-gray-400 ease-in-out">
                                        <svg class="w-5 h-6 text-gray-800 dark:text-white hover:text-gray-400 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
                                        </svg>
                                        Điều kiện giao dịch chung
                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-gray-900 hover:text-gray-400 ease-in-out">
                                        <svg class="w-5 h-6 text-gray-800 dark:text-white hover:text-gray-400 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
                                        </svg>
                                        Chính sách bảo vệ dữ liệu cá nhân
                                    </a>
                                </li>
                                
                            </ul>
                        </div>
                        <div class="lg:col-span-3 md:col-span-3">
                            <h5 class="tracking-[1px] text-[#161c2d] font-bold">Tiện ích</h5>
                            <ul class="list-none mt-6">
                                <li>
                                    <a href="" class="text-gray-900 hover:text-gray-400 ease-in-out">
                                        <svg class="w-5 h-6 text-gray-800 dark:text-white hover:text-gray-400 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
                                        </svg>
                                        eSIM
                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-gray-900 hover:text-gray-400 ease-in-out">
                                        <svg class="w-5 h-6 text-gray-800 dark:text-white hover:text-gray-400 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
                                        </svg>
                                        Mua eSIM
                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-gray-900 hover:text-gray-400 ease-in-out">
                                        <svg class="w-5 h-6 text-gray-800 dark:text-white hover:text-gray-400 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
                                        </svg>
                                        Nạp tiền
                                    </a>
                                </li>
                                <li>
                                    <a href="" class="text-gray-900 hover:text-gray-400 ease-in-out">
                                        <svg class="w-5 h-6 text-gray-800 dark:text-white hover:text-gray-400 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m10 16 4-4-4-4"/>
                                        </svg>
                                        Tra cứu đơn hàng
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="lg:col-span-3 md:col-span-12">
                            <h5 class="tracking-[1px] text-[#161c2d] font-bold">Phương thức thanh toán</h5>
                            <div class="my-5">
                                <img class="m-1 w-[104px] mr-[10px] inline-block" src="https://vnsky.vn/img/vnpay.6feac728.svg" alt="">
                                <img class="m-1 w-[59px] mr-[10px] inline-block" src="https://vnsky.vn/img/visa.8db00f67.svg" alt="">
                                <img class="m-1 w-[50px] mr-[12px] inline-block" src="https://vnsky.vn/img/logo-mastercard-footer.6e10fa76.svg" alt="">
                            </div>
                            <div>
                                <a class="inline-block" href="">
                                    <img class="w-[168px] text-[12px] focus:outline-none" src="https://vnsky.vn/img/da-thong-bao-bo-cong-thuong.c06bbc8e.png" alt="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-[30px] px-0 border-t border-slate-800 mt-8">
            <div class="container text-center">
                <div class="items-center">
                    <div class="ltr:md:text-left rtl:md:text-right text-center">
                        <p class="mb-0 text-[14px] text-black"> © Bản quyền của Công ty TNHH Dịch vụ số DIGILIFE Việt Nam. </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>

</style>
