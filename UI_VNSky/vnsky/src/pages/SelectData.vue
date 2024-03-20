<script setup>
import DataPackage from "../components/homepage/DataPackage.vue"
import { initFlowbite } from 'flowbite';
import{onMounted} from 'vue';
 onMounted(() => {
  initFlowbite();
 })
</script>

<template>
    <div class="bg-gray-50 dark:bg-slate-800 min-h-screen">
        <div class="container mx-auto lg:px-[13rem] py-5">
            <p>
                <img src="https://vnsky.vn/img/step_1_goicuoc.dd608022.svg" alt="">
            </p>
        </div>
        <DataPackage/>
    </div>
</template>

<style scoped>
    
</style>