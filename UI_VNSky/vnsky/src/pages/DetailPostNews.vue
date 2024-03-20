<script setup>
    import AttentionNews from "../components/AttentionNews.vue"
    import { initFlowbite } from 'flowbite';
    import{onMounted} from 'vue';
    onMounted(() => {
        initFlowbite();
    })
</script>

<template>
    <div class="container mx-auto lg:px-[13rem]">
        <router-link to="/tin-tuc">
            <div class="flex items-center">
                <div>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABAEAYAAAD6+a2dAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAAAAAAAAPlDu38AAAAJcEhZcwAAAGAAAABgAPBrQs8AAAAHdElNRQfnCBEEKwaHWgohAAADiklEQVR42u3cTUgUUQAH8P/b3USCvIRfhQRJaEhYhEYKhSIURQXWbEgERaBJdUo6RB/0gUUFQUbpYlFYWWvUoUN70JUOKepBKSRDgihKkaSDUom7O10aqHVJ9/O9N/x/15ld3uP/Z5jd92YAIiIiIiIiIiIisj8hewDRM/Z4n6SlAc7rEJWVgMgwRxwOIC3jx2m/H7gvDopfv2SPUhcaFcAwvN6cHMB1QdT7fIA4b94uLv7rBB/w/j3gdLk+btoEtE1Un5iYkD1q1TlkD2B+VvCLCuHp7o4QvGUrUFAABAcDKxoaZI9aFwoXIDx4fEBtYeECPngNZ/LyZI9eFwoWIObg/zCPiSMvX8qehS4UKkC8wQOAxwO0r9xzrK1N9mx0oUABahY/ms7OBhaVo7mzE9EHPwbcuQOsejhs1NcDgBCmKXtWupD4K8AKXjS6dnZ1AejH4aKiKL7ACt4/bNTWAufEOREKyZuPniQUgMGrJIUFYPAqSkEBGLzKklgABq+DJBQg7uBP4XhrK7Bq9fCnujoGn1wJLACD11ECCsDgdRZHARi8HcRQAAZvJ1EUgMHb0QIKwODt7D8FiHt17hTaZ2YAM4CaFy8AcQlnuUiTAjkIBYMA+szBt2+B9PL0qqYm4O7VXT1TU+EnRyjAZrPbdLmAZbPfsnt6AHHAvFlSIntWFLOlQH8/8OVGplFeDrwSFSIQsA5GWA5e/m5iW1kZg7eNSaC0FMjdMplfWhp+MEIBHKedvbxU24+4Fro8N9cIBfj8dOn33l7AvCeODgzIHjbFrRE3+vqAr2syjbl58ibQfqybwMtiw5s3wOw+c3tTE9Dx1L13ejr85AX8DNyf9exKVhYQPBnw+f3gqp6tRPFHEItgRzH8Fcwi2Ekci0Esgh0kYDmYRdBZAjeEsAg6SsKWMBZBJ0ncFMoi6CAF28JZBJWl8MEQFkFFEh4NYxFUIvHhUBZBBQq8I4hFkEmB9wNYL3OafY3DVVUA8uEZGYniC3KBQ4eA0ami5bduyZ6NbhS4AoSLdxla7ACqq4GHNW738+eyZ6M6Ba4A4To63O7xcWB2BLUVFYj6imCOAZWVsmehCwULYIm5CCXmxtFR2aPXhcIFsMwpwp8tTuHMi7ja1QV8P7jkZ0uL7FHrQsF7gPkYhtfrdALOrY4H69YBWI/cYBB4vHZ389AQwJdEEREREREREREREf3rNxpUdmlfIhRdAAAAAElFTkSuQmCC" alt="" style="width: 20px;">
                </div>
                <h3 class="mx-2">Quay lại</h3>
            </div>
        </router-link>
        <h1>eSIM LÀ GÌ? LỢI ÍCH KHI SỬ DỤNG eSIM</h1>
        <div class="grid grid-cols-12 mt-5">
            <div class="col-span-12">
                <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div class="lg:col-span-9 xl:grid-cols-9 md:col-span-12 sm:col-span-12">
                        <img src="https://cms.vnsky.vn/webform/cms/assets/images/tintuc/18c9bc642eb0000000002202879.png" class="block" alt="">
                        <p class="sub-title mt-3 font-bold">
                            <img src="https://vnsky.vn/img/1f4cd.16d417b8.svg" alt="" style="display: inline-block; margin-top: -10;">
                            eSIM là một trong những ứng dụng và tiện ích công nghệ mang đến nhiều tiện ích cho người dùng. Cùng tìm hiểu những thông tin thú vị về eSIM ở bài viết dưới đây. 

                        </p>
                        <p class="public-date text-[#9999b1]">05 tháng 02 , 2024</p>
                        <div class="flex mt-3 mb-2">
                            <div>
                                <p>Chia sẻ:</p>
                            </div>
                            <div class="mx-2">
                                <a href="" class="inline-block"><img src="https://vnsky.vn/img/facebook.f33c4942.svg" alt=""></a>
                            </div>
                        </div>
                        <div class="content" style="border-bottom: 1px solid rgb(139, 139, 139); padding-bottom: 20px;"></div>
                        <p class="font-bold mt-5">Biên tập: Team VNSKY</p>
                    </div>
                    <div class="lg:col-span-3 xl:grid-cols-3 md:col-span-12 sm:col-span-12 attention-news" style="position: sticky; top: 80px;">
                        <AttentionNews/>
                    </div>
                </div>
                <div class="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
                    <div class="lg:col-span-9 xl:grid-cols-9 md:col-span-12 sm:col-span-12">
                        <div class="banner mt-5">
                            <a href="">
                                <img src="https://cms.vnsky.vn/webform/cms/assets/images/banner/00d08e4bdd1ac375c32e258d2d426c9e.jpeg" class="object-cover" alt="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>