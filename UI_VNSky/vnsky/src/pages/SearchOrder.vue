<script setup>

import { initFlowbite } from 'flowbite';
import{onMounted} from 'vue';
    onMounted(() => {
    initFlowbite();
})
</script>

<template>
    <section class="relative w-full box-search py-[3rem] mb-[199px]" style="background-color: rgb(55, 162, 224);">
        <div class="container mb-16 mx-auto lg:px-[13rem]">
            <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px] mt-8 text-center mt-10">
                <div class="lg:col-span-6 md:col-span-12 pb-16 md:text-center">
                    <h3 class="mb-4 md:text-4xl text-3xl md:leading-normal leading-normal font-medium text-white">Tra cứu đơn hàng</h3>
                    <div class="search-form mt-6 mb-3 lg:absolute md:relative w-full">
                        <form action="" class="relative max-w-xl">
                            <input type="text" class="pt-4 ltr:pr-40 rtl:pl-40 pb-4 ltr:pl-6 rtl:pr-6 w-full h-[50px] outline-none text-black dark:text-white rounded-xl bg-white dark:bg-slate-900/60 shadow dark:shadow-gray-800" placeholder="Mã vận đơn...">
                            <button type="submit" class="btn h-[46px] text-white rounded-xl mt-6" style="background-color: rgb(0, 90, 170); border: rgb(0, 90, 170);">Tra cứu</button>
                        </form>
                    </div>
                </div>
                <div class="lg:col-span-6 md:col-span-12 relative imgae-tra_cuu">
                    <div class="absolute"><img src="https://vnsky.vn/img/donhang.835e14fc.png" alt=""></div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
