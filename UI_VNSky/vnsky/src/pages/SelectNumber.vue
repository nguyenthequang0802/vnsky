<script setup>
import ListNumber from '../components/ListNumber.vue';
import { initFlowbite } from 'flowbite';
import{onMounted} from 'vue';
 onMounted(() => {
  initFlowbite();
 })

</script>

<template>
    <div class="bg-gray-50 dark:bg-slate-800 min-f-[100vh]">
        <div class="container px-[13rem] m-auto py-5 pt-8">
            <p class="block md:hidden">
                <img src="https://vnsky.vn/img/step_1.95cf6b8e.png" alt="">
            </p>
            <p class="hidden md:block">
                <img src="https://vnsky.vn/img/step_1.d8252881.svg" alt="">
            </p>
        </div>
        <ListNumber/>
    </div>
</template>

<style scoped>
    
</style>