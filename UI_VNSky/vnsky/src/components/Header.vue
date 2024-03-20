<script setup>
  import router from '@/router';
  import { initFlowbite } from 'flowbite';
  import{onMounted} from 'vue';
  onMounted(() => {
    initFlowbite();
  })
</script>

<template>
  <header class="h-[87px]">
      <nav
        class="bg-white dark:bg-gray-900 fixed w-full z-40 top-0 start-0 border-b border-gray-200 dark:border-gray-600 shadow-[7px_7px_8px_rgba(0,0,0,.3)]"
      >
        <div
          class="max-w-screen-xl flex flex-wrap items-center justify-around mx-auto p-4"
        >
          <router-link
            to="/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://vnsky.vn/img/logo.2d2d0d2c.svg"
              class="h-12"
              alt="Flowbite Logo"
            />
          </router-link>
          <div
            class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
          >
            <a href="">
              <button
                type="button"
                class="text-white bg-gray-400 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm"
              >
                <img
                  src="https://vnsky.vn/img/icon-cart.f8cf6d65.svg"
                  alt=""
                  style="height: 36px; width: 36px"
                />
              </button>
            </a>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul
              class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <router-link
                  to="/chon-so"
                  class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-[#161c2d] md:p-0 hover:text-[#37a2e0] text-sm font-bold hover:bg-white"
                  aria-current="page"
                  >Chọn số</router-link
                >
              </li>
              <li>
                <router-link to="/goicuoc"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:text-[#161c2d] md:p-0 hover:text-[#37a2e0] text-sm font-bold hover:bg-white"
                  >Gói cước</router-link
                >
              </li>
              <li>
                <router-link 
                  to="/naptien"
                  class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:text-[#161c2d] md:p-0 hover:text-[#37a2e0] text-sm font-bold hover:bg-white"
                  >Nạp tiền</router-link
                >
              </li>
              <li>
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  class="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:text-[#161c2d] md:p-0 hover:text-[#37a2e0] text-sm font-bold hover:bg-white"
                  type="button"
                >
                  Tiện ích
                  <svg
                    class="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <!-- Dropdown menu -->
                <div
                  id="dropdownHover"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 top-[24px]"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <router-link
                        to="/"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-[#161c2d] font-bold text-[11px] hover:text-[#2A5CAA]"
                        >eSIM</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/doi-cap-sim"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-[#161c2d] font-bold text-[11px] hover:text-[#2A5CAA]"
                        >Đổi/cấp lại SIM</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/tracuuvandon"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-[#161c2d] font-bold text-[11px] hover:text-[#2A5CAA]"
                        >Tra cứu đơn hàng</router-link
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover2"
                  data-dropdown-trigger="hover"
                  class="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:text-[#161c2d] md:p-0 hover:text-[#37a2e0] text-sm font-bold hover:bg-white"
                  type="button"
                >
                  Hỗ trợ
                  <svg
                    class="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <!-- Dropdown menu -->
                <div
                  id="dropdownHover2"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 top-[24px]"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <router-link
                        to="/faqs"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-[#161c2d] font-bold text-[11px] hover:text-[#2A5CAA]"
                        >Câu hỏi thường gặp</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/danh-sach-diem-cung-cap"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-[#161c2d] font-bold text-[11px] hover:text-[#2A5CAA]"
                        >Danh sách điểm cung cáp</router-link
                      >
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover3"
                  data-dropdown-trigger="hover"
                  class="flex items-center justify-between w-full py-2 px-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:text-[#161c2d] md:p-0 hover:text-[#37a2e0] text-sm font-bold hover:bg-white"
                  type="button"
                >
                  Giới thiệu
                  <svg
                    class="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <!-- Dropdown menu -->
                <div
                  id="dropdownHover3"
                  class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 top-[24px]"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <router-link
                        to=""
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-[#161c2d] font-bold text-[11px] hover:text-[#2A5CAA]"
                        >Về VNSKY</router-link
                      >
                    </li>
                    <li>
                      <router-link
                        to="/tin-tuc"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-[#161c2d] font-bold text-[11px] hover:text-[#2A5CAA]"
                        >Tin tức</router-link
                      >
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
</template>

<style scoped>

</style>
