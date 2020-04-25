<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view v-if="isRouterAlive"></router-view>
    </transition>
    <!-- <practice></practice> -->
  </div>
</template>

<script>
import practice from './components/practice'
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data(){
    return{
      transitionName: '',
      isRouterAlive: true
    }
  },
  components:{
    practice
  },
  methods:{
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if(to.meta.index > from.meta.index){
      //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
  },
  mounted(){
    this.$router.afterEach((to, from, next) => {
        window.scrollTo(0, 0)
    })
  }
}
</script>

<style>
body,html,#app{
  width: 100%;
  height:100vh;
  min-width: 1050px;
}


.slide-right-enter-active,
.slide-right-leave-active {
  will-change: transform;
  /* transition: all 2000ms; cubic-bezier(0.14,-1.33,1,0.18)*/
  transition: all .5s ease-in;
  /* position: absolute; */
}
.slide-left-leave-active,
.slide-left-enter-active{
  will-change: transform;
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-right-enter {
  opacity: 0;
  transform: translate3d(-10%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(10%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
  /* transform: translateX(100%); */
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
  /* transform: translateX(100%); */
}



</style>
