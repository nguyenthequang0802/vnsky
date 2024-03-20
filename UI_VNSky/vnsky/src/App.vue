<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import HomeScreen from './pages/HomeScreen.vue'
</script>

<template>
  <Header/>
  <router-view></router-view>
  <!-- <HomeScreen/> -->
  <Footer/>
  <div id="cs-live-chat">
    <img src="https://2.bp.blogspot.com/-GwRpoYvNe14/ZImO41mzYHI/AAAAAAAkpYk/MYtx5PjzRHMa0ALXuqv_kqSyf1mGOcLiACNcBGAsYHQ/chat_01.png?imgmax=3000" alt="" id="cs_widget_logo">
  </div>
</template>

<style scoped>
  #cs-live-chat{
    position: fixed;
    background: transparent;
    z-index: 999999999;
    transition-duration: 200ms;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    transition-property: bottom, transform;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 5px 40px;
    border-radius: 50%;
    cursor: pointer;
    bottom: 0px;
    overflow: hidden;
    width: 60px;
    height: 60px;
    right: 0px;
    left: auto;
    margin: 20px;
  }
  #cs_widget_logo{
        width: 60px;
    height: 60px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
  }
</style>
