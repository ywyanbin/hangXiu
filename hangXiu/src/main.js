// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'

// import THREE from 'three-js'
import * as three from 'three'
// import PhotoSphereViewer from 'photo-sphere-viewer'
// import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'
import PhotoSphereViewer from 'photo-sphere-viewer'
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'

import 'vue-fullpage/vue-fullpage.css'
import VueFullpage from 'vue-fullpage'

import axios from 'axios'
import $ from 'jquery'
import Home from './components/Home'
import Current from './components/Current.vue'
import LocalPlace from './components/LocalPlace.vue'
import HeaderNav from './components/HeaderNav.vue'
import practice from './components/practice.vue'
import HangXiuZhenFa from './components/stitch/HangXiuZhenFa.vue'
import History from './components/history/History.vue'
import PingXiu from './components/stitch/stitch-sort/PingXiu.vue'
import LuanZhenXiu from './components/stitch/stitch-sort/LuanZhenXiu.vue'
import DieXiu from './components/stitch/stitch-sort/DieXiu.vue'
import TieXuXiu from './components/stitch/stitch-sort/TieXuXiu.vue'
import FaXiu from './components/stitch/stitch-sort/FaXiu.vue'
import AngJinXiu from './components/stitch/stitch-sort/AngJinXiu.vue'
import BaoJinXiu from './components/stitch/stitch-sort/BaoJinXiu.vue'

import LzxPro from './components/stitch/stitch-sort/stitch-sort-produce/LzxPro.vue'
import PxPro from './components/stitch/stitch-sort/stitch-sort-produce/PxPro.vue'
import DxPro from './components/stitch/stitch-sort/stitch-sort-produce/DxPro.vue'
import TxxPro from './components/stitch/stitch-sort/stitch-sort-produce/TxxPro.vue'
import FxPro from './components/stitch/stitch-sort/stitch-sort-produce/FxPro.vue'
import AjxPro from './components/stitch/stitch-sort/stitch-sort-produce/AjxPro.vue'
import BjxPro from './components/stitch/stitch-sort/stitch-sort-produce/BjxPro.vue'



import PxPic from './components/stitch/stitch-sort/stitch-sort-picture/PxPic.vue'
import LzxPic from './components/stitch/stitch-sort/stitch-sort-picture/LzxPic.vue'
import DxPic from './components/stitch/stitch-sort/stitch-sort-picture/DxPic.vue'
import TxxPic from './components/stitch/stitch-sort/stitch-sort-picture/TxxPic.vue'
import FxPic from './components/stitch/stitch-sort/stitch-sort-picture/FxPic.vue'
import AjxPic from './components/stitch/stitch-sort/stitch-sort-picture/AjxPic.vue'
import BjxPic from './components/stitch/stitch-sort/stitch-sort-picture/BjxPic.vue'

import Person from './components/person/Person.vue'
import Watch from './components/person/personal/Watch.vue'
import Collect from './components/person/personal/Collect.vue'
import Document from './components/person/personal/Document.vue'
import Message from './components/person/personal/Message.vue'

import Login from './components/login&register/Login.vue'
import LoginUser from './components/login&register/Login-user.vue'
import LoginPhone from './components/login&register/Login-phone.vue'
import RegisterPhone from './components/login&register/Register-Phone.vue'
import RegisterUser from './components/login&register/Reginter-User.vue'

import JinJiaHong from './components/gzs/JinJiaHong.vue'
import ChenShuiQin from './components/gzs/ChenShuiQin.vue'
import WangShengHong from './components/gzs/WangShengHong.vue'
import ZhaoYiJun from './components/gzs/ZhaoYiJun.vue'

import Manner from './components/manner/Manner.vue'
import animated from 'animate.css'
import VideoPlayer from 'vue-video-player'

import Quanjintu from './components/Quanjintu.vue'
import Draw from './components/Draw.vue'
import Weav from './components/Weav.vue'
import Showroom from './components/Showroom.vue'
import 'animate.css'


require('video.js/dist/video-js.css')
// require('vue-video-player/node_modules/video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

axios.defaults.baseURL = 'http://47.101.214.230:8080'



Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VideoPlayer)
Vue.use(animated)
Vue.use(VueFullpage)


//配置路由
const router = new VueRouter({
  routes: [
    {path: '/person',component: Person,children:[
      {path:'/person/',component: Watch},
      {path:'/person/collect',component: Collect},
      {path:'/person/document',component: Document},
      {path:'/person/message',component: Message}
    ]},
    {path: '/quanjintu',component: Quanjintu},
    {path:'/draw',component:Draw},
    {path:'/weav',component:Weav},
    {path:'/showroom',component: Showroom},
    
    {path:'/login',component: Login},
    {path: '/loginuser', component: LoginUser},
    {path: '/loginphone', component: LoginPhone},
    {path: '/registerphone', component: RegisterPhone},
    {path: '/registeruser', component: RegisterUser},
    {path: '/',component: Home, meta:{index:1}},
    {path: '/current', component: Current, meta:{index:2}},
    
    {path: '/localplace', component: LocalPlace, meta:{index:2}},  
    {path: '/localplace/jinjiahong',component: JinJiaHong},
    {path: '/localplace/chenshuiqin',component: ChenShuiQin},
    {path: '/localplace/wangshenghong',component: WangShengHong},
    {path: '/localplace/zhaoyijun', component: ZhaoYiJun},

    {path: '/hangxiuzhenfa', component: HangXiuZhenFa, meta:{index:3}}, //对象的index用来定义当前路由的层级,由小到大,由低到高
    {path: '/history', component: History, meta:{index:3}},
    {path: '/manner', component: Manner, meta:{index:3}},
    {path: '/hangxiuzhenfa/pingxiu',component: PingXiu, meta:{index:4}},
    {path: '/hangxiuzhenfa/luanzhenxiu', component: LuanZhenXiu, meta:{index:4}},
    {path: '/hangxiuzhenfa/diexiu', component: DieXiu, meta:{index:4}},
    {path: '/hangxiuzhenfa/tiexuxiu', component: TieXuXiu, meta:{index:4}},
    {path: '/hangxiuzhenfa/faxiu', component: FaXiu, meta:{index:4}},
    {path: '/hangxiuzhenfa/angjinxiu', component: AngJinXiu, meta:{index:4}},
    {path: '/hangxiuzhenfa/baojinxiu', component: BaoJinXiu, meta:{index:4}},
    {path: '/hangxiuzhenfa/baojinxiu/bjxpic',component: BjxPic,meta:{index:5}},
    {path: '/hangxiuzhenfa/pingxiu/pxpic',component: PxPic,meta:{index:5}},
    {path: '/hangxiuzhenfa/luanzhenxiu/lzxpic',component: LzxPic,meta:{index:5}},
    {path: '/hangxiuzhenfa/diexiu/dxpic',component: DxPic,meta:{index:5}},
    {path: '/hangxiuzhenfa/tiexuxiu/txxpic',component: TxxPic,meta:{index:5}},
    {path: '/hangxiuzhenfa/faxiu/fxpic',component: FxPic,meta:{index:5}},
    {path: '/hangxiuzhenfa/angjinxiu/ajxpic',component: AjxPic,meta:{index:5}},

    {path: '/hangxiuzhenfa/luanzhenxiu/lzxpro', component: LzxPro, meta:{index:6}},
    {path: '/hangxiuzhenfa/pingxiu/pxpro', component: PxPro, meta:{index:6}},
    {path: '/hangxiuzhenfa/diexiu/dxpro', component: DxPro, meta:{index:6}},
    {path: '/hangxiuzhenfa/tiexuxiu/txxpro', component: TxxPro, meta:{index:6}},
    {path: '/hangxiuzhenfa/faxiu/fxpro', component: FxPro, meta:{index:6}},
    {path: '/hangxiuzhenfa/angjinxiu/ajxpro', component: AjxPro, meta:{index:6}},
    {path: '/hangxiuzhenfa/baojinxiu/bjxpro', component: BjxPro, meta:{index:6}},
  ],
  
  mode: "hash",
  // base: '/dist/',
  scrollBehavior(to,from,savedPosition){
    if(to.hash){
      return{
        selector:to.hash
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  components: { App },
  template: '<App/>'
})
