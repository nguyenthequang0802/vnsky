<script>
    import ChatContact from '@/components/ChatContact.vue';
    import { initFlowbite } from 'flowbite';
    import{onMounted} from 'vue';
    onMounted(() => {
        initFlowbite();
    })
    export default{
        data() {
            return {
                listQues:[
                    {
                        Topicname: "Thông tin chung",
                        Questions:[
                            {
                                id: 1,
                                title: "Tôi muốn biết thêm về VNSKY",
                                Answer: 'VNSKY là mạng di động mới thuộc hệ sinh thái đa dịch vụ của VNPAY. Tiếp nối sứ mệnh "Cho cuộc sống đơn giản hơn" mà VNPAY nỗ lực không ngừng trong những suốt những năm qua, VNSKY mong muốn mang đến dịch vụ viễn thông rộng khắp, nhiều tiện ích, là tấm vé thông hành đưa Bạn bước tới thế giới số, giúp cuộc sống số dễ dàng hơn.'
                            },
                            {
                                id: 2,
                                title: "Tôi có thể dùng được mạng VNSKY ở đâu?",
                                Answer: 'Ngay từ khi ra mắt, VNSKY phủ sóng 63 Tỉnh/TP khắp cả nước, từ thành thị đến nông thôn, với hàng chục nghìn trạm thu phát sóng 4G.'
                            },
                            {
                                id: 3,
                                title: "Danh sách điểm cung cấp dịch vụ viễn thông của VNSKY?",
                                Answer: 'Hiện tại VNSKY có các địa điểm cung cấp dịch vụ viễn thông cố định tại Hà Nội và Thành phố Hồ Chí Minh.'
                            },
                        ]
                    },
                    {
                        Topicname: "Mua Sim số",
                        Questions:[
                            {
                                id: 1,
                                title:'Tôi có thể mua SIM VNSKY ở đâu?',
                                Answer: 'Hiện tại, khách hàng có thể đặt mua SIM VNSKY trên website http://vnsky.vn. Trong thời gian tới, VNSKY sẽ mở rộng kênh bán trên ứng dụng VNSKY, ứng dụng Ví VNPAY, các ứng dụng ngân hàng, các sàn TMĐT, các nền tảng mạng xã hội, hệ thống cửa hàng/đại lý ủy quyền trên toàn quốc.'
                            },
                            {
                                id: 2,
                                title:'Có những hình thức thanh toán nào khi mua SIM trên website và ứng dụng VNSKY?',
                                Answer: 'Có 2 hình thức thanh toán khi mua trên website hoặc ứng dụng VNSKY: 1. Thanh toán online: Thẻ nội địa và tài khoản ngân hàng, thẻ thanh toán quốc tế, Ví VNPAY, ứng dụng thanh toán hỗ trợ VNPAY-QR. 2. Thanh toán COD: Thanh toán khi nhận hàng.'
                            },
                        ]
                    },
                    {
                        Topicname: "Gói Cước",
                        Questions:[
                            {
                                id: 1,
                                title:'Tôi có thể mua SIM VNSKY ở đâu?',
                                Answer: 'Hiện tại, khách hàng có thể đặt mua SIM VNSKY trên website http://vnsky.vn. Trong thời gian tới, VNSKY sẽ mở rộng kênh bán trên ứng dụng VNSKY, ứng dụng Ví VNPAY, các ứng dụng ngân hàng, các sàn TMĐT, các nền tảng mạng xã hội, hệ thống cửa hàng/đại lý ủy quyền trên toàn quốc.'
                            },
                            {
                                id: 2,
                                title:'Có những hình thức thanh toán nào khi mua SIM trên website và ứng dụng VNSKY?',
                                Answer: 'Có 2 hình thức thanh toán khi mua trên website hoặc ứng dụng VNSKY: 1. Thanh toán online: Thẻ nội địa và tài khoản ngân hàng, thẻ thanh toán quốc tế, Ví VNPAY, ứng dụng thanh toán hỗ trợ VNPAY-QR. 2. Thanh toán COD: Thanh toán khi nhận hàng.'
                            },
                        ]
                    },
                    {
                        Topicname: "Kích hoạt SIM",
                        Questions:[
                            {
                                id: 1,
                                title:'Tôi có thể mua SIM VNSKY ở đâu?',
                                Answer: 'Hiện tại, khách hàng có thể đặt mua SIM VNSKY trên website http://vnsky.vn. Trong thời gian tới, VNSKY sẽ mở rộng kênh bán trên ứng dụng VNSKY, ứng dụng Ví VNPAY, các ứng dụng ngân hàng, các sàn TMĐT, các nền tảng mạng xã hội, hệ thống cửa hàng/đại lý ủy quyền trên toàn quốc.'
                            },
                        ]
                    },
                    {
                        Topicname: "eSIM",
                        Questions:[
                            {
                                id: 1,
                                title:'Tôi có thể mua SIM VNSKY ở đâu?',
                                Answer: 'Hiện tại, khách hàng có thể đặt mua SIM VNSKY trên website http://vnsky.vn. Trong thời gian tới, VNSKY sẽ mở rộng kênh bán trên ứng dụng VNSKY, ứng dụng Ví VNPAY, các ứng dụng ngân hàng, các sàn TMĐT, các nền tảng mạng xã hội, hệ thống cửa hàng/đại lý ủy quyền trên toàn quốc.'
                            },
                        ]
                    },
                    {
                        Topicname: "Nạp Tiền",
                        Questions:[
                            {
                                id: 1,
                                title:'Tôi có thể mua SIM VNSKY ở đâu?',
                                Answer: 'Hiện tại, khách hàng có thể đặt mua SIM VNSKY trên website http://vnsky.vn. Trong thời gian tới, VNSKY sẽ mở rộng kênh bán trên ứng dụng VNSKY, ứng dụng Ví VNPAY, các ứng dụng ngân hàng, các sàn TMĐT, các nền tảng mạng xã hội, hệ thống cửa hàng/đại lý ủy quyền trên toàn quốc.'
                            },
                        ]
                    },
                    {
                        Topicname: "Vận chuyển, giao hàng",
                        Questions:[
                            {
                                id: 1,
                                title:'Tôi có thể mua SIM VNSKY ở đâu?',
                                Answer: 'Hiện tại, khách hàng có thể đặt mua SIM VNSKY trên website http://vnsky.vn. Trong thời gian tới, VNSKY sẽ mở rộng kênh bán trên ứng dụng VNSKY, ứng dụng Ví VNPAY, các ứng dụng ngân hàng, các sàn TMĐT, các nền tảng mạng xã hội, hệ thống cửa hàng/đại lý ủy quyền trên toàn quốc.'
                            },
                        ]
                    },
                    {
                        Topicname: "Chuyển đổi SIM/eSIM",
                        Questions:[
                            {
                                id: 1,
                                title:'Tôi có thể mua SIM VNSKY ở đâu?',
                                Answer: 'Hiện tại, khách hàng có thể đặt mua SIM VNSKY trên website http://vnsky.vn. Trong thời gian tới, VNSKY sẽ mở rộng kênh bán trên ứng dụng VNSKY, ứng dụng Ví VNPAY, các ứng dụng ngân hàng, các sàn TMĐT, các nền tảng mạng xã hội, hệ thống cửa hàng/đại lý ủy quyền trên toàn quốc.'
                            },
                        ]
                    },
                    {
                        Topicname: "Chuyển quyền sở hữu",
                        Questions:[
                            {
                                id: 1,
                                title:'Tôi có thể mua SIM VNSKY ở đâu?',
                                Answer: 'Hiện tại, khách hàng có thể đặt mua SIM VNSKY trên website http://vnsky.vn. Trong thời gian tới, VNSKY sẽ mở rộng kênh bán trên ứng dụng VNSKY, ứng dụng Ví VNPAY, các ứng dụng ngân hàng, các sàn TMĐT, các nền tảng mạng xã hội, hệ thống cửa hàng/đại lý ủy quyền trên toàn quốc.'
                            },
                        ]
                    },
                    {
                        Topicname: "Hướng dẫn sử dụng",
                        Questions:[
                            {
                                id: 1,
                                title:'Tôi có thể mua SIM VNSKY ở đâu?',
                                Answer: 'Hiện tại, khách hàng có thể đặt mua SIM VNSKY trên website http://vnsky.vn. Trong thời gian tới, VNSKY sẽ mở rộng kênh bán trên ứng dụng VNSKY, ứng dụng Ví VNPAY, các ứng dụng ngân hàng, các sàn TMĐT, các nền tảng mạng xã hội, hệ thống cửa hàng/đại lý ủy quyền trên toàn quốc.'
                            },
                        ]
                    },
                ],
                selectedTopic: 'Thông tin chung',
            }
        },
        methods: {
            changeTopic(title) {
                this.selectedTopic = title;
            }
        }
    }
</script>

<template>
    <section class="relative md:py-24 py-16">
        <div class="container mx-auto lg:px-[13rem]">
            <h1 class="font-bold text-5xl text-center mb-12 md:text-3xl text-faq">Câu hỏi thường gặp</h1>
            <div class="hidden lg:block">
                <div class="grid md:grid-cols-5 grid-cols-2 justify-center gap-[30px] mb-6">
                    <div class="relative shadow mx-auto w-full leading-9 text-center" 
                        v-for="(item) in listQues" 
                        :key="item.Topicname" 
                        @click="changeTopic(item.Topicname)" >
                        <button type="button" :class="{active: selectedTopic == item.Topicname }" :id="item.Topicname">{{ item. Topicname }}</button>
                    </div>
                    <!-- <button type="button" v-for="(item) in listQues" 
                        :key="item.Topicname" 
                        @click="changeTopic(item.Topicname)" :class="{active: selectedTopic == item.Topicname }" :id="item.Topicname">{{ item.Topicname}}</button> -->
                    <!-- <button type="button" class="" id="muasimso">Mua SIM số</button>
                    <button type="button" class="" id="goicuoc">Gói cước</button>
                    <button type="button" class="" id="ekyc">Kích hoạt SIM</button>
                    <button type="button" class="" id="eSIM">eSIM</button> -->
                </div>
                <!-- <div class="grid md:grid-cols-5 grid-cols-2 justify-center gap-[30px] title-faq"> -->
                    <!-- <button type="button" class="" id="naptien">Nạp tiền</button>
                    <button type="button" class="" id="vcgh">Vận chuyển, giao hàng</button>
                    <button type="button" class="" id="chuyendoisim">Chuyển đổi SIM/eSIM</button>
                    <button type="button" class="" id="sohuu">Chuyển quyền sở hữu</button>
                    <button type="button" class="" id="huongdan">Hướng dẫn sử dụng</button> -->
                <!-- </div> -->
            </div>

            <div class="block lg:hidden">
                <div class="grid md:grid-cols-2 grid-cols-2 justify-center gap-[30px] mb-6" >
                    <div class="relative shadow overflow-hidden mx-auto w-full leading-9 text-center" 
                        v-for="(item) in listQues" 
                        :key="item.Topicname" 
                        @click="changeTopic(item.Topicname)" >
                        <button type="button" :class="{active: selectedTopic == item.Topicname }" :id="item.Topicname">{{ item. Topicname}}</button>
                    </div>
                </div>
            </div>

            <div class="mb-12 mt-10">
                <div class="" id="thongtinchung1">
                    <div id="accordion-collapse" data-accordion="collapse" class="mt-6">
                        <div class="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden ques-box">
                            <h2 id="accordion-collapse-heading-1" class="text-base font-semibold">
                                <button type="button" class="flex items-center justify-between w-full p-3 font-medium rtl:text-right ltr:text-left" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
                                    <span>Tôi muốn biết thêm về VNSKY?</span>
                                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                    </svg>
                                </button>
                            </h2>
                        </div>
                        <div id="accordion-collapse-body-1" class="" aria-labelledby="accordion-collapse-heading-1">
                            <div class="p-5">
                                <p class="">VNSKY là mạng di động mới thuộc hệ sinh thái đa dịch vụ của VNPAY. Tiếp nối sứ mệnh "Cho cuộc sống đơn giản hơn" mà VNPAY nỗ lực không ngừng trong những suốt những năm qua, VNSKY mong muốn mang đến dịch vụ viễn thông rộng khắp, nhiều tiện ích, là tấm vé thông hành đưa Bạn bước tới thế giới số, giúp cuộc sống số dễ dàng hơn. </p>
                                    
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <ChatContact/>
        </div>
    </section>
</template>

<style scoped>
    .title-faq{
        border-bottom: 1px solid #ccc;
        height: 45px;
    }
    button{
        color: #000;
    }
    .active{
        width: 100%;
        border-bottom: 2px solid #e0aabd;
    } 
    .ques-box{
        background-color: #e6f5ff !important;
        border: 1px solid #4da3e2;
    }
</style>

