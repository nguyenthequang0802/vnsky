<script>
    import { initFlowbite } from 'flowbite';
    import{onMounted} from 'vue';
    onMounted(() => {
        initFlowbite();
    })
    export default{
        data() {
            return{
                denominations: [
                    {
                        id: 1,
                        title: "10.000",
                        price: 10000,
                    },
                    {
                        id: 2,
                        title: "20.000",
                        price: 20000,
                    },
                    {
                        id: 3,
                        title: "50.000",
                        price: 50000,
                    },
                    {
                        id: 4,
                        title: "100.000",
                        price: 100000,
                    },
                    {
                        id: 5,
                        title: "200.000",
                        price: 200000,
                    },
                    {
                        id: 6,
                        title: "500.000",
                        price: 500000,
                    },
                ],
                selectedDenomination: "",
            }
        },
        methods: {
            changeDenomination(title){
                this.selectedDenomination = title
                console.log(this.selectedDenomination);
            }
        }
    }
</script>

<template>
    <section class="relative py-16">
        <div class="container mx-auto xl:px-[13rem]">
            <h1 class="md:text-4xl md:leading-normal text-2xl leading-normal font-bold text-center">Nạp tiền điện thoại</h1>
            <p class="text-center">Nạp tiền dễ dàng - Gia hạn nhanh chóng</p>
            <div class="flex justify-center md:mt-9 mt-5 gap-5">
                <div>
                    <button class="btn btnrecharge active">Nạp tiền</button>
                </div>
                <div>
                    <router-link to="/goicuoc" class="btn btnbuydata active">Mua gói cước</router-link>
                </div>
            </div>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mt-5">
                <div class="col-span-2 md:col-span-1">
                    <div class="mb-4 input-phoneNumber box">
                        <div class="content">
                            <h3 class="font-bold">
                                Nhập số điện thoại
                                <span class="font-bold text-red-600">(*)</span>
                            </h3>
                            <div class="flex mt-2">
                                <span 
                                    class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600" style="background-color: rgb(249, 249, 255);">
                                    +84
                                </span>
                                <input type="text" 
                                        id="website-admin" 
                                        class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="Nhập số điện thoại">
                            </div>
                        </div>
                    </div>
                    <div class="box input-money">
                        <div class="content">
                            <h3 class="font-bold">
                                Nhập số tiền muốn nạp
                                <span class="font-bold text-red-600">(*)</span>
                            </h3>
                            <div style="background-color: rgb(255, 255, 255); height: 40px; border-radius: 4px;">
                                <input type="number" 
                                        id="website-admin" 
                                        class="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                        placeholder="0.000đ" 
                                        style="cursor: default;"
                                        :value="selectedDenomination">
                            </div>
                            <h3 class="mt-3 font-bold">Hoặc chọn mệnh giá</h3>
                            <div class="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                                <div 
                                    class="ps-4 border border-gray-400 rounded dark:border-gray-400 bg-white w-[97%] h-[83.96px] flex-col justify-center items-end inline-flex p-[12px]  text-black"
                                    :class="{ 'select-card': selectedDenomination == item.title}"
                                    v-for="(item) in denominations" :key="item.title">
                                    <input :id="'bordered-radio-'+ item.id" 
                                            type="radio" 
                                            :value="item.price"
                                            
                                            name="bordered-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 hidden" >
                                    <label for="bordered-radio-1" class="w-full py-4 ms-2 font-medium text-[18px] flex justify-end" 
                                    @click="changeDenomination(item.title)">{{item.title}}đ</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-2 md:col-span-1 pay-box shadow-inner">
                    <div>
                        <div class="pb-[13px]" style="border-bottom: 1px solid rgba(0, 0, 0, 0.12);">
                            <span class="font-bold text-black">Tổng thanh toán</span>
                        </div>
                        <div>
                            <div class="flex justify-between mt-3" style="padding-bottom: 30px; border-bottom:  1px solid rgba(0, 0, 0, 0.12);">
                                <div><span>Số tiền</span></div>
                                <div><span class="font-bold">{{ selectedDenomination }}đ</span></div>
                            </div>
                            <div class="mt-5">
                                <h3 class="font-bold">Phương thức thanh toán</h3>
                                <div class="mt-5" style="padding-bottom: 30px; border-bottom:  1px solid rgba(0, 0, 0, 0.12);">
                                    <p>Cổng thanh toán trực tuyến</p>
                                    <div class="payment_gateways flex justify-between items-center">
                                        <div>
                                            <img src="https://vnsky.vn/img/vi_gd.3cea7f5b.svg" alt="" class="inline-block" style="width: 75px; margin-right: 12px;">
                                            <img src="https://vnsky.vn/img/vnpay.6feac728.svg" alt="" class="inline-block" style="width: 75px; margin-right: 12px;">
                                            <img src="https://vnsky.vn/img/visa.8db00f67.svg" alt="" class="inline-block" style="width: 50px; margin-right: 12px;">
                                            <img src="https://vnsky.vn/img/logo-mastercard-footer.6e10fa76.svg" alt="" class="inline-block" style="width: 35px; margin-right: 12px;">
                                            <img src="https://vnsky.vn/img/atm.ade4df6e.svg" alt="" class="inline-block" style="width: 35px; margin-right: 12px;">
                                        </div>
                                        <div>
                                            <img src="https://vnsky.vn/img/check.9ba32728.svg" alt="" class="inline-block" style="width: 30px;">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-3 flex justify-end">
                                <div class="">
                                    <div style="width: 304px; height: 78px;">
                                        <div>
                                            <iframe title="reCAPTCHA" width="304" height="78" role="presentation" name="a-knlitwfe0kmz" frameborder="0" scrolling="no" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation" src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LcLgbElAAAAAHahx1QEeGMnwtFdDA0hE-aRe2Kh&amp;co=aHR0cHM6Ly92bnNreS52bjo0NDM.&amp;hl=vi&amp;v=QquE1_MNjnFHgZF4HPsEcf_2&amp;theme=light&amp;size=normal&amp;cb=4tnw6z41a6oc"></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-5">
                                <span>Điều kiện và điều khoản giao dịch</span>
                                <div class="mt-3">
                                    <div class="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="default-checkbox" class="ms-2 text-gray-900 dark:text-gray-300" style="font-size: 13px; color: rgb(102, 112, 133);">
                                            Tôi đã đọc và đồng ý với 
                                            <a href="" style="color: rgb(22, 104, 216);">Điều kiện giao dịch chung của VNSKY</a>
                                        </label>
                                    </div>
                                </div>
                                <div class="text-end mt-6 payment">
                                    <button class="btn">
                                        <div class="flex justify-center items-center gap-5">
                                            <div class="">
                                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFMSURBVHgBvVaLccIwDJW5DpBuEDboCIzABs0IbFA6Qa8TtBuUToCZgDBBwgRkAyNx8p0xFl+Jd/dix9LlWZZODoQQpsgl8wtZgSVQ4Dcc4w+sgSITJmFnHmUi3LPoGxjhJXv3yHfkVDnK3jnXn6yiyCzYYUYaLhOko1yDDQbk2OWrtBWww3hUWGzBBgPlsSS4Ahts6PHMCL0k6MFQ0JUs1G1w0O42r5jDYSQYtfPYkhhNJEEPutjGiSSoXTj+2YLtJUFqcQPogBq3F61YoR9BF036/VIv7XCokd/w+NEuYnVK0dVxW2CEUoR0PVEOW9Apnn+MciFa6U6kYw16WJ+NkEVrjvLwu5GZpdz+ZO898hPpi78XgvCSdzlP5k3Br2Lbjk/ovjpgofihiIngG326OMKt4J13idj8jG+T+B4ihXvBx1Rf4Vexr3i17QECaReZGsuuewAAAABJRU5ErkJggg==" alt="">
                                            </div>
                                            <div><span class="text-white font-bold">Thanh toán</span></div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .btnrecharge{
        background: linear-gradient(268deg, rgb(108, 0, 193), rgb(84, 152, 255)), linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
    }
    .btn.active{
        width: 217px;
        height: 32px;
        padding: 7px 52px;
        border-radius: 200px;
        overflow: hidden;
        justify-content: center;
        align-items: center;
        gap: 10px;
        display: inline-flex;
        color: rgb(255, 255, 255);
    } 
    .btnbuydata{
        border: 2px solid rgb(0, 90, 170);
        background-color: rgb(255, 255, 255);
        color: rgb(0, 90, 170)!important;
    }
    .input-phoneNumber{
        border-radius: 20px;
        background: linear-gradient(rgb(205, 3, 148), rgb(97, 39, 191), rgb(62, 16, 116));
        padding: 2px !important;
    }
    .container .grid .box{
        display: flex;
        padding: 28px 68px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 9px;
    }
    .input-phoneNumber .content{
        background-color: rgb(255, 255, 255);
        width: 100%;
        height: 100%;
        border-radius: 18px;
        padding: 28px 68px;
    }
    .input-money{
        border-radius: 20px;
        background: linear-gradient(rgb(205, 3, 148), rgb(97, 39, 191), rgb(62, 16, 116));
        padding: 2px !important;
    }
    .input-money .content{
        width: 100%;
        height: 100%;
        border-radius: 18px;
        padding: 28px 68px;
        background-image: url(https://vnsky.vn/img/bg-naptien.dcc102c5.png);
        background-size: cover;
        background-position: 100% center;
    }
    .pay-box{
        padding: 53px 60px;
        background-color:  #fff;
        border-radius: 20px;
        box-shadow: 0 3px 20px 1px #888;
    }
    .payment button{
        background-image: linear-gradient(270deg, #6c00c1, #5498ff);
        border-radius: 10px;
        color: #fff;
        width: 100%;
        border-radius: 85px;
    }
    .select-card{
        box-shadow: rgb(136, 136, 136) 0px 2px 7px -1px;
        border: #fff;
        color: rgb(255, 255, 255);
        background-image: linear-gradient(270deg, rgb(108, 0, 193), rgb(84, 152, 255));
    }
</style>