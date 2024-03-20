<script setup>
    import { initFlowbite } from 'flowbite';
    import{onMounted} from 'vue';
    onMounted(() => {
        initFlowbite();
    })
</script>

<template>
    <section class="container lg:px-[13rem] m-auto md:my-24 mt-16">
        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-bold text-center">
            ĐỒNG HÀNH CÙNG 
            <span class="text-[#009EDB] font-bold">VNSKY</span>
        </h3>
        <div class="grid grid-cols-1 mt-2 md:mt-6 relative">
            <div uk-slider="finite: false">
                    <div class="uk-position-relative">
                        <div class="uk-slider-container uk-light">
                            <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-5@s uk-child-width-1-5@">
                                <li>
                                    <div class="list-none text-center">
                                        <div class="p-6 mb-4 mt-10 h-32 w-32 rounded-full mx-auto relative overflow-hidden shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out items-center justify-center flex">
                                            <img src="https://vnsky.vn/img/samcenter.9bda738b.png" alt="">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="list-none text-center">
                                        <div class="p-6 mb-4 mt-10 h-32 w-32 rounded-full mx-auto relative overflow-hidden shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out items-center justify-center flex">
                                            <img src="https://vnsky.vn/img/mytour.vn.4f2490c9.png" alt="">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="list-none text-center">
                                        <div class="p-6 mb-4 mt-10 h-32 w-32 rounded-full mx-auto relative overflow-hidden shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out items-center justify-center flex">
                                            <img src="https://vnsky.vn/img/soi-bien.a0d29833.png" alt="">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="list-none text-center">
                                        <div class="p-6 mb-4 mt-10 h-32 w-32 rounded-full mx-auto relative overflow-hidden shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out items-center justify-center flex">
                                            <img src="https://vnsky.vn/img/phongvu.ac914ae8.png" alt="">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="list-none text-center">
                                        <div class="p-6 mb-4 mt-10 h-32 w-32 rounded-full mx-auto relative overflow-hidden shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out items-center justify-center flex">
                                            <img src="https://vnsky.vn/img/vnshop.1d60de66.png" alt="">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="list-none text-center">
                                        <div class="p-6 mb-4 mt-10 h-32 w-32 rounded-full mx-auto relative overflow-hidden shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out items-center justify-center flex">
                                            <img src="https://vnsky.vn/img/samcenter.9bda738b.png" alt="">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="list-none text-center">
                                        <div class="p-6 mb-4 mt-10 h-32 w-32 rounded-full mx-auto relative overflow-hidden shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out items-center justify-center flex">
                                            <img src="https://vnsky.vn/img/vnpay-invoice.39b291d5.png" alt="">
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="list-none text-center">
                                        <div class="p-6 mb-4 mt-10 h-32 w-32 rounded-full mx-auto relative overflow-hidden shadow dark:shadow-gray-800 hover:shadow-lg dark:hover:shadow-gray-800 duration-500 ease-in-out items-center justify-center flex">
                                            <img src="https://vnsky.vn/img/vnpay-invoice.39b291d5.png" alt="">
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="uk-hidden@s uk-light">
                            <a class="uk-position-center-left uk-position-small" href uk-slidenav-previous uk-slider-item="previous"></a>
                            <a class="uk-position-center-right uk-position-small" href uk-slidenav-next uk-slider-item="next"></a>
                        </div>
                        <div class="uk-visible@s">
                            <a class="uk-position-center-left-out uk-position-small" href uk-slidenav-previous uk-slider-item="previous"></a>
                            <a class="uk-position-center-right-out uk-position-small" href uk-slidenav-next uk-slider-item="next"></a>
                        </div>
                    </div>
                </div>
        </div>
    </section>
</template>

<style scoped>
</style>