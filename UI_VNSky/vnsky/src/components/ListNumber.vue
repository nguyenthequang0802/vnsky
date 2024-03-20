<script>
    import PaginateTag from './PaginateTag.vue';
    import { initFlowbite } from 'flowbite';
    import{onMounted} from 'vue'; 
    // import { DefineComponent } from 'vue';
    onMounted(() => {
        initFlowbite();
    })
    export default{
        data(){
            return{
                removeNumber:{
                    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                    checkedNumbers: []
                },
                cateNumbers:[
                    {
                        id: 1,
                        value: 'locphat',
                        content: 'SIM lộc phát',
                    },
                    {
                        id: 2,
                        value: 'nguquygiua',
                        content: 'SIM ngữ quý giữa'
                    },
                    {
                        id: 3,
                        value: 'ongdia',
                        content: 'SIM ông địa'
                    },
                    {
                        id: 4,
                        value: 'thantai',
                        content: 'SIM thần tài'
                    },
                    {
                        id: 5,
                        value: 'tamhoagiua',
                        content: 'SIM tam hoa giữa'
                    },
                    {
                        id: 6,
                        value: 'sanhtien',
                        content: 'SIM sảnh tiến'
                    },
                ],
                phoneNumbers:[
                    {
                        id: 1,
                        num: '077 615 5468',
                        type: 'Trả trước',
                        price: 50000,
                    },
                    {
                        id: 2,
                        num: '077 660 5468',
                        type: 'Trả trước',
                        price: 50000,
                    },
                    {
                        id: 3,
                        num: '077 622 2410',
                        type: 'Trả trước',
                        price: 50000,
                    },
                    {
                        id: 4,
                        num: '077 618 5386',
                        type: 'Trả trước',
                        price: 50000,
                    },
                    {
                        id: 5,
                        num: '077 697 5639',
                        type: 'Trả trước',
                        price: 50000,
                    },
                    {
                        id: 6,
                        num: '077 690 9578',
                        type: 'Trả trước',
                        price: 50000,
                    },
                    {
                        id: 7,
                        num: '077 693 7568',
                        type: 'Trả trước',
                        price: 50000,
                    },
                    {
                        id: 8,
                        num: '077 613 4039',
                        type: 'Trả trước',
                        price: 50000,
                    },
                    {
                        id: 9,
                        num: '077 688 8593',
                        type: 'Trả trước',
                        price: 50000,
                    },
                    {
                        id: 10,
                        num: '077 642 8123',
                        type: 'Trả trước',
                        price: 50000,
                    },
                    {
                        id: 11,
                        num: '077 643 1345',
                        type: 'Trả trước',
                        price: 50000,
                    },
                    {
                        id: 12,
                        num: '077 678 9234',
                        type: 'Trả trước',
                        price: 50000,
                    },
                    {
                        id: 13,
                        num: '077 999 9569',
                        type: 'Trả trước',
                        price: 50000,
                    },
                ]
            }
        },
        methods: {
            checkedActive (number) {
                const index = this.removeNumber.checkedNumbers.value.indexOf(number);
                if(index === -1){
                    this.removeNumber.checkedNumbers.value.push(number)
                } else {
                    this.removeNumber.checkedNumbers.value.splice(index, 1)
                }
            }
        }
    }
</script>

<template>
    <section class="relative pb-16">
        <div class="container m-auto xl:px-[13rem] py-5">
            <h3 class="md:text-3xl md:leading-normal lg:text-4xl leading-normal font-bold mb-5">Chọn ngay số điện thoại yêu thích</h3>
            <div class="flex items-center">
                <h2 class="font-medium text-[18px] leading-5 mr-[40px]">Loại SIM:</h2>
                <div class="flex mr-[20px] items-baseline">
                    <div class="flex">
                        <div class="flex items-center me-4">
                            <input id="inline-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked>
                            <label for="inline-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">eSIM</label>
                        </div>
                        <div class="flex items-center me-4">
                            <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="inline-2-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">SIM vật lý</label>
                        </div> 
                    </div>
                </div>
            </div>
            <p class="mb-6 text-xs mt-2">
                Lưu ý: eSIM chỉ sử dụng được trên thiết bị có hỗ trợ trong 
                <router-link to="/" class="text-[#005AAA]">danh sách</router-link>
            </p>
            <div class="grid grid-cols-1 hidden md:block">
                <div class="col-span-1">
                    <div class="dark:bg-slate-900 border-0 shadow-lg hover:shadow-xl rounded p-3 bg-[#045AAF]">
                        <div class="relative text-start">
                            <div class="grid lg:grid-cols-12 md:grid-cols-1 grid-cols-1 lg:gap-0 gap-6">
                                <div class="lg:col-span-5 relative flex filter-search">
                                    <input type="number" id="inputNumber" class="w-full pr-[6px] py-0 h-[50px] text-[15px] outline outline-transparent outline-2 rounded-l-[5px] bg-white dark:bg-slate-800 border-0" placeholder="Nhập *68, 68*, *8*8" style="color: #9ea7bd;">
                                    <span class="text-[#7F7475] absolute top-[5px] left-[48%] z-10 text-[24px]">| </span>
                                    <select name="" 
                                        id="categoryNumber" 
                                        class="w-full pl-[6px] py-0 h-[50px] text-[15px] outline outline-transparent outline-2 rounded-r-[5px] bg-white dark:bg-slate-800 border-0 text-[#9ea7bd]">
                                        <option value="">Tất cả danh mục số</option>
                                        <option v-for="(item) in cateNumbers" :key="item.id"  :value="item.value ">{{ item.content }}</option>
                                    </select>
                                </div>
                                <div class="lg:col-span-4 relative flex mx-2 filter-search">
                                    <span class="absolute top-[28%] left-3 z-10 text-[#2a5caa]">Loại trừ:</span>
                                    <div class="w-full pr-[6px] py-0 h-[50px] text-[15px] outline outline-transparent outline-2 bg-white dark:bg-slate-800 border-0" id="removeNumber">
                                        <label v-for="(number, index) in removeNumber.numbers" :key="index">
                                            <input class="hidden" type="checkbox" :value="number" v-model="removeNumber.checkedNumbers">
                                            <span :class="{active: removeNumber.checkedNumbers.includes(number)}" @click="checkedActive(number)">{{ number }}</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="lg:col-span-3 relative flex filter-search">
                                    <button class="text-center text-[1rem] leading-6 tracking-widest duration-500 btnSearchNumber mx-auto">
                                        TÌM KIẾM
                                        <div class="lighteffect"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 block md:hidden">
                <div class="col-span-1">
                    <div class="dark:bg-slate-900 border-0 shadow-lg hover:shadow-xl rounded p-3 bg-[#045AAF]">
                        <div class="relative text-start">
                            <div class="grid lg:grid-cols-12 md:grid-cols-1 grid-cols-1 lg:gap-0 gap-6">
                                <div class="lg:col-span-6 relative flex filter-search">
                                    <input type="text" id="inputNumber" class="w-full text-black pr-[6px] py-0 h-[50px] text-[15px] outline outline-transparent outline-2 rounded-l-[5px] bg-white dark:bg-slate-800 border-0" placeholder="Nhập *68, 68*, *8*8">
                                    <span class="text-[#7F7475] absolute top-[5px] left-[48%] z-10 text-[24px]">| </span>
                                    <select name="" 
                                        id="categoryNumber" 
                                        class="w-full pl-[6px] py-0 h-[50px] text-[15px] outline outline-transparent outline-2 rounded-r-[5px] bg-white dark:bg-slate-800 border-0 text-[#9ea7bd]">
                                        <option value="">Tất cả danh mục số</option>
                                        <option v-for="(item) in cateNumbers" :key="item.id"  :value="item.value ">{{ item.content }}</option>
                                        
                                    </select>
                                </div>
                                <div class="lg:col-span-6 relative flex filter-search lg:mx-2 md:mx-0">
                                    <div class="w-full pr-[4px]">
                                        <span class="absolute top-[28%] left-3 z-10 text-[#2a5caa]">Loại trừ:</span>
                                        <div class="w-full pr-[6px] py-0 h-[50px] text-[15px] outline outline-transparent outline-2 bg-white dark:bg-slate-800 border-0" id="removeNumber">
                                            <label v-for="(number, index) in removeNumber.numbers" :key="index">
                                                <input class="hidden" type="checkbox" :value="number" v-model="removeNumber.checkedNumbers">
                                                <span :class="{active: removeNumber.checkedNumbers.includes(number)}" @click="checkedActive(number)">{{ number }}</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="filter-search">
                                        <button class="text-center text-[1rem] leading-6 tracking-widest duration-500 btnSearchNumber mx-auto" style="width: auto; border-radius: 4px;">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px" style="stroke: rgb(255, 255, 255); height: 30px; width: 30px;"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 
                                            27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 
                                            27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 
                                            20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" style="stroke: rgb(255, 255, 255); fill: rgb(255, 255, 255);"></path></svg>
                                        <div class="lighteffect"></div>
                                    </button>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <!-- bang so dien thoai man hinh mt -->
                <div class="container m-auto hidden lg:block">
                    <div class="mt-8 rounded-md bg-indigo-600/5 shadow-lg hover:shadow-xl">
                        <div class="overflow-auto">
                            <table class="min-w-full divide-y divide-gray-200 table-fixed">
                                <thead>
                                    <tr>
                                        <th class="px-6 py-3 md:text-left text-lg text-gray-500 tracking-wider">Số điện thoại</th>
                                        <th class="px-6 py-3 md:text-left text-lg text-gray-500 tracking-wider">Loại số</th>
                                        <th class="px-6 py-3 md:text-left text-lg text-gray-500 tracking-wider">Giá tiền</th>
                                        <th class="px-6 py-3 text-left text-lg text-gray-500 tracking-wider"></th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white divide-y divide-gray-200">
                                    <tr style="box-shadow: lightslategray 0px 3px 11px -5px;" v-for="(item) in phoneNumbers" :key="item.id">
                                        <td class="px-6 py-4 whitespace-nowrap" style="width: 300px;">
                                            <span class="phoneNumber">{{ item.num }}</span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="labelphone">{{ item.type }}</span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <span class="priceOfPhone">{{ item.price }}đ</span>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <router-link to="/goicuoc">
                                                <button class="btn buynow">
                                                    MUA NGAY
                                                </button>
                                            </router-link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- bang so din thoai man hinh ipad, dienthoai -->
                <div class="container m-auto block lg:hidden">
                    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                        <div class="rounded-md shadow-lg hover:shadow-xl phonenb-item" v-for="(item) in phoneNumbers" :key="item.id">
                            <div class="p-4 flex items-end justify-between">
                                <div class="items-center">
                                    <div><span class="text-[22px] font-semibold text-[#e51b76]">{{ item.num }}</span></div>
                                    <div>
                                        <p class="categoryNumber">
                                            Loại số
                                            <span class="labelphone">{{ item.type }}</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="price-btnbuy">
                                    <p class="priceOfPhone">{{ item.price }}đ</p>
                                    <router-link to="/goicuoc">
                                        <button class="btn buynow">
                                            MUA NGAY
                                        </button>
                                    </router-link>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PaginateTag/>
        </div>
    </section>
</template>

<style scoped>
    #removeNumber{
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        padding-left: 75px !important;
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        justify-content: center;
    }
    #removeNumber span{
        display: block;
        width: 22px;
        line-height: 20px;
        border: 1px solid #e51b76;
        color: #e51b76;
        border-radius: 100%;
        font-weight: 600;
        text-align: center;
        cursor: pointer;
        margin: 1px 2px;
        transition: all .5s;
    }
    .active{
        color: #fff !important;
        background-color: #e51b76;
    }
    .btnSearchNumber{
        width: 155px;
        max-width: 100%;
        position: relative;
        display: inline-block;
        background-color: #e51b76;
        border: #e51b76;
        color: #fff;
        font-weight: 700;
        padding: 10px 20px;
        border-radius: 9999px;
        overflow: hidden;
        display: block;
    }
    .btnSearchNumber .lighteffect{
            position: absolute;
        top: 0;
        left: -100%;
        width: 300%;
        height: 100%;
        transform: skewX(-30deg);
        background-image: linear-gradient(90deg, hsla(0, 0%, 100%, .4) 0, hsla(0, 0%, 100%, 0) 70%);
        animation: btnSearchNumberlighteffect 4s linear infinite;
    }
    .phoneNumber{
        font-weight: 600;
        color: #e51b76;
        font-size: 32px;
    }
    .labelphone{
        display: inline-block;
        margin: 2px;
        background-color: #fff;
        padding: 0 5px;
        text-align: center;
        border-radius: 0.358rem;
        color: #000;
        font-size: 12px;
        font-weight: 500;
        border: 1px solid #005aaa;
    }
    .priceOfPhone{
        font-weight: 600;
        color: #e51b76;
        font-size: 24px;
    }
    .btn.buynow{
        width: 100%;
        height: 40px;
        font-size: 14px;
        font-weight: 700;
        border-radius: 12px !important;
        border: 2px solid #e51b76;
        color: #e51b76;
        justify-content: center;
        text-align: center;
        line-height: 1;
        padding: 0 5px;
        cursor: pointer;
        transition: all .5s;
        display: flex;
        align-items: center;
        position: relative;
        overflow: hidden;
        z-index: 10;
    }
    .btn.buynow:hover{
        color: #fff;
        background-color: #e51b76;
    }
    @media(max-width: 768px){
        .btn.buynow{
            height: 33px;
        }
    }
    @media(max-width: 678px){
        .btn.buynow{
            font-weight: 500!important;
            border:  1px solid #e51b76;
        }
    }
    @media(max-width: 375px){
        .btn.buynow{
            height: 24px;
        }
    }
</style>