// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
//
// Vue.use(Router)
//
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
import Vue from 'vue'
import VueRouter from 'vue-router'
import content from "../components/content";
import main from "../components/main";
import login from "../views/login";
import List from "../views/List";
import profile from "../views/profile";
import home from "../views/home";
import notfound from "../views/notfound";
//安装路由
Vue.use(VueRouter);
//配置导出路由
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      //路由路径
      path: '/content',
      name: 'content',
      //跳转的组件
      component: content
    },
    {
      path: '/main/:name',
      name: 'main',
      component: main,
      props: true,
      children: [
        {path: '/profile:id', component: profile, props: true},
        {path: '/list', component: List}
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/gohome',
      redirect: '/profile'
    },
    {
      path: '*',
      component: notfound
    }
  ]
});
