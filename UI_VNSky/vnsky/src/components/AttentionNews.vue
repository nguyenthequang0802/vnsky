<script setup>
    import HeadNews from "../components/HeadNews.vue"
    import { initFlowbite } from 'flowbite';
    import{onMounted} from 'vue';
    onMounted(() => {
        initFlowbite();
    })
</script>

<template>
    <div>
        <h3 class="font-bold">Đáng chú ý</h3>
        <HeadNews/>
    </div>
</template>

<style scoped>

</style>