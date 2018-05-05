<template>
   <div class="home">
     <mt-header fixed :title="selected">
       <div slot="left">
         <mt-button v-link="'/'" icon="back"></mt-button>
       </div>
     </mt-header>
     <div>
       <router-view></router-view>
     </div>
     <mt-tabbar v-model="selected">
         <mt-tab-item id="外卖">
         <img slot="icon">
         外卖
       </mt-tab-item>
       <mt-tab-item id="订单">
         <img slot="icon">
         订单
       </mt-tab-item>
       <mt-tab-item id="发现">
         <img slot="icon">
         发现
       </mt-tab-item>
       <mt-tab-item id="我的">
         <img slot="icon">
         我的
       </mt-tab-item>
     </mt-tabbar>
   </div>
</template>

<script>
    export default {
      name: "home",
      data() {
        return {
          selected: '外卖',
        }
      },
      methods: {},
      watch: {
        selected: function (val, oldVal) {
          switch (val){
            case '外卖':
              this.$router.push('/home/indexPage1');
              break;
            case '订单':
              this.$router.push('/home/indexPage2');
              break;
            case '发现':
              this.$router.push('/home/indexPage3');
              break;
            case '我的':
              this.$router.push('/home/indexPage4');
              break;
          }
        }
      },
      mounted(){
        this.$router.push('/home/indexPage1')
      }
    }
</script>

<style scoped>

</style>
