<script setup>
import Carousel from '../components/homepage/Carousel.vue';
import DataPackage from '../components/homepage/DataPackage.vue';
import BoxGift from '../components/homepage/BoxGift.vue';
import ExperimentTitle from '../components/homepage/ExperimentTitle.vue';
import BoxIcon from '../components/homepage/BoxIcon.vue';
import Companion from '../components/homepage/Companion.vue';
import { initFlowbite } from 'flowbite';
import{onMounted} from 'vue';
    onMounted(() => {
    initFlowbite();
})
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
</script>

<template>
    <Carousel/>
    <DataPackage/>
    <BoxGift/>
    <ExperimentTitle/>
    <BoxIcon/>
    <Companion/>
</template>

<style scoped>

</style>
