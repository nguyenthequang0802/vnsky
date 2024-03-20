<script>
    // import { data } from 'autoprefixer';
    import { initFlowbite } from 'flowbite';
    import{onMounted} from 'vue';
    onMounted(() => {
        initFlowbite();
    })
    export default{
        data() {
            return {
                dataPackage:[
                    {
                        title: "1month",
                        package: [
                            {
                                id: 1,
                                namePackage: "SKY89A",
                                url: "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000467219.jpeg",
                            },
                            {
                                id: 2,
                                namePackage: "SKY77",
                                url: "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000363975.jpeg",
                            },
                            {
                                id: 3,
                                namePackage: "SKY89TT",
                                url: "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000505652.jpeg",
                            },
                            {
                                id: 4,
                                namePackage: "SKY89YT",
                                url: "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000505454.jpeg",
                            },
                            {
                                id: 5,
                                namePackage: "SKY89B",
                                url: "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000467364.jpeg",
                                time: '1month'
                            },
                        ]
                    },
                    {
                        title: "3months",
                        package: [
                            {
                                id: 1,
                                namePackage: "3SKY77",
                                url: "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000364087.jpeg",
                            },
                        ]
                    },
                    {
                        title: "6months",
                        package: [
                            {
                                id: 7,
                                namePackage: "5SKY69A",
                                url: "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000467272.jpeg",
                            },
                        ]
                    },
                    {
                        title: "12months",
                        package: [
                            {
                                id: 1,
                                namePackage: "10SKY69YT",
                                url: "https://api.vnsky.vn/webform/libs/assets/images/goicuoc/18c1b86f1010000000000467796.jpeg",
                            },
                        ]
                    },
                ],
                selectedPackage: '1month',
            }
        },
        methods: {
            selectPackage(title) {
                this.selectPackage = title;
            }
        }
    }

</script>

<template>
    <section class="relative md:py-16">
        <div class="container mx-auto lg:px-[13rem]" id="selected_datapackage">
            <div class="grid grid-cols-1 pt-8 text-center">
                <h3 class="md:text-4xl md:leading-normal text-2xl leading-normal font-bold md-5 text-black">
                    Chọn ngay <span class="text-[#37A2E0] font-bold">gói cước</span> phù hợp
                </h3>
            </div>
            <div class="flex items-center justify-center flex-wrap gap-3 select_category">
                <label class="block mx-[5px] my-0" v-for="(item) in dataPackage" :key="item.title">
                    <input class="hidden" type="radio" name="radiofilter" :value="item.title" v-model="selectedPackage">
                    <span class="w-[140px] h-[32px] m-auto font-bold rounded-full flex justify-center items-center text-center leading-none px-[5px] py-0 cursor-pointer bg-[#9b9b9b] text-[18px] text-white" :id="item.title" :class="{ active: selectedPackage == item.title}" @click="selectPackage(item.title)">{{ item.title }}</span>
                </label>
            </div>
            <div class="grid grid-cols-1 mt2 md:mt-6 relative">
                <div uk-slider="finite: true">
                    <div class="uk-position-relative">
                        <div class="uk-slider-container uk-light">
                            <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-2@s uk-child-width-1-3@m" v-for="(group) in dataPackage" :key="group.title" v-show="group.title === selectedPackage">
                                <li v-for="(item) in group.package" :key="item.id" :id="'slider-' + item.namePackage">
                                    <div class="" :id="'group-' + item.namePackage">
                                        <div class="flex flex-col min-h[300px] relative overflow-hidden rounded-md shadow-[10px_10px_10px_rgba(0,0,0,.3)] dark:shadow-gray-800 hover:shadow-shadow-[10px_10px_10px_rgba(0,0,0,.3)] dark:hover:shadow-gray-800 duration-500 ease-in-out bg-white m-2 mb-5 scale-75 hover:scale-100" :id="'box-' + item.namePackage">
                                            <div class="block" id="">
                                                <img :src="item.url" class="w-full" alt="" :id="'img' + item.namePackage">
                                            </div>
                                            <div class="p-3 " :id="'buy-' + item.namePackage">
                                                <router-link to="/chon-so" style="display: block;">
                                                    <div class="rounded-md text-xl w-full text-center flex font-medium text-[rgb(55, 162, 224)] ml-[5px] items-end" :id="'buy' + item.namePackage">
                                                        <svg data-v-50613428="" xmlns="http://www.w3.org/2000/svg" width="121" height="23" viewBox="0 0 121 23" fill="none"><path data-v-50613428="" d="M12.768 2.8L8.568 9.751L4.347 2.8H1.365V17.5H4.263V7.987L8.4 14.791H8.736L12.873 7.966V17.5H15.75V2.8H12.768ZM25.293 12.67C25.293 14.413 24.39 15.274 22.983 15.274C21.723 15.274 20.904 14.518 20.904 13.111V7H18.195V13.447C18.195 14.812 18.573 15.862 19.308 16.639C20.064 17.416 21.009 17.794 22.164 17.794C23.592 17.794 24.642 17.311 25.293 16.324V17.5H28.002V7H25.293V12.67ZM38.4631 8.239C37.6441 7.21 36.5101 6.706 35.0401 6.706C33.6331 6.706 32.4361 7.252 31.4281 8.323C30.4411 9.394 29.9371 10.696 29.9371 12.25C29.9371 13.804 30.4411 15.127 31.4281 16.198C32.4361 17.269 33.6331 17.794 35.0401 17.794C36.5101 17.794 37.6441 17.29 38.4631 16.261V17.5H41.1721V7H38.4631V8.239ZM33.4651 14.392C32.9191 13.825 32.6461 13.111 32.6461 12.25C32.6461 11.389 32.9191 10.675 33.4651 10.129C34.0111 9.562 34.7041 9.289 35.5441 9.289C36.3841 9.289 37.0771 9.562 37.6231 10.129C38.1901 10.675 38.4631 11.389 38.4631 12.25C38.4631 13.111 38.1901 13.825 37.6231 14.392C37.0771 14.938 36.3841 15.211 35.5441 15.211C34.7041 15.211 34.0111 14.938 33.4651 14.392ZM54.7166 6.706C53.2886 6.706 52.2386 7.189 51.5876 8.176V7H48.8786V17.5H51.5876V11.83C51.5876 10.087 52.4906 9.226 53.8976 9.226C55.1576 9.226 55.9766 9.982 55.9766 11.389V17.5H58.6856V11.053C58.6856 9.688 58.3076 8.638 57.5516 7.861C56.8166 7.084 55.8716 6.706 54.7166 6.706ZM69.0418 8.302C68.2438 7.231 67.1308 6.706 65.6818 6.706C64.2118 6.706 62.9728 7.231 61.9648 8.281C60.9568 9.331 60.4528 10.591 60.4528 12.082C60.4528 13.573 60.9568 14.854 61.9438 15.904C62.9518 16.933 64.1908 17.458 65.6818 17.458C67.1308 17.458 68.2438 16.933 69.0418 15.862V16.996C69.0418 18.655 67.9918 19.579 66.2908 19.579C64.9888 19.579 64.0648 19.096 63.5398 18.109L61.2298 19.432C62.1538 21.112 63.9388 21.994 66.2068 21.994C67.7188 21.994 68.9998 21.574 70.0708 20.713C71.1418 19.852 71.6878 18.613 71.6878 16.996V7H69.0418V8.302ZM69.0418 12.082C69.0418 13.762 67.8028 14.959 66.1018 14.959C64.4008 14.959 63.1618 13.762 63.1618 12.082C63.1618 11.263 63.4348 10.57 63.9808 10.045C64.5478 9.499 65.2408 9.226 66.1018 9.226C66.9628 9.226 67.6558 9.499 68.2018 10.045C68.7688 10.57 69.0418 11.263 69.0418 12.082ZM82.1243 8.239C81.3053 7.21 80.1713 6.706 78.7013 6.706C77.2943 6.706 76.0973 7.252 75.0893 8.323C74.1023 9.394 73.5983 10.696 73.5983 12.25C73.5983 13.804 74.1023 15.127 75.0893 16.198C76.0973 17.269 77.2943 17.794 78.7013 17.794C80.1713 17.794 81.3053 17.29 82.1243 16.261V17.5H84.8333V7H82.1243V8.239ZM77.1263 14.392C76.5803 13.825 76.3073 13.111 76.3073 12.25C76.3073 11.389 76.5803 10.675 77.1263 10.129C77.6723 9.562 78.3653 9.289 79.2053 9.289C80.0453 9.289 80.7383 9.562 81.2843 10.129C81.8513 10.675 82.1243 11.389 82.1243 12.25C82.1243 13.111 81.8513 13.825 81.2843 14.392C80.7383 14.938 80.0453 15.211 79.2053 15.211C78.3653 15.211 77.6723 14.938 77.1263 14.392ZM91.8048 14.056L89.0748 7H86.1138L90.4188 17.164C89.9148 18.592 89.1168 19.201 87.6678 19.18V21.7C90.3558 21.847 92.1198 20.524 93.2118 17.5L97.0338 7H94.1358L91.8048 14.056Z" fill="#37A2E0"></path><path data-v-50613428="" d="M108.5 16.5L113.5 11.5L108.5 6.5" stroke="#37A2E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                    </div>
                                                </router-link>
                                            </div>
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
        </div>
    </section>
</template>

<style scoped>
    .select_category .active{
        background-color: #4da3e2;
    }
</style>
