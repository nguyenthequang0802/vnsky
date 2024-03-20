import { createRouter, createWebHashHistory } from "vue-router";
import HomeScreen from "./pages/HomeScreen.vue";
import SelectNumber from "./pages/SelectNumber.vue";
import SelectData from "./pages/SelectData.vue";
import RechargePage from "./pages/RechargePage.vue";
import SearchOrder from "./pages/SearchOrder.vue";
import Renewed from "./pages/Renewed.vue";
import ListStore from "./pages/ListStore.vue";
import FaqsPage from "./pages/FaqsPage.vue";
import NewsPage from "./pages/NewsPage.vue";
import DetailPostNews from "./pages/DetailPostNews.vue";

const routes = [
  {
    path: "/",
    component: HomeScreen,
  },
  {
    path: "/chon-so",
    component: SelectNumber,
  },
  {
    path: "/goicuoc",
    component: SelectData,
  },
  {
    path: "/naptien",
    component: RechargePage,
  },
  {
    path: "/tracuuvandon",
    component: SearchOrder,
  },
  {
    path: "/doi-cap-sim",
    component: Renewed,
  },
  {
    path: "/danh-sach-diem-cung-cap",
    component: ListStore,
  },
  {
    path: "/faqs",
    component: FaqsPage,
  },
  {
    path: "/tin-tuc",
    component: NewsPage,
  },
  {
    path: "/tin-tuc/detail-post",
    component: DetailPostNews,
  },
];
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
