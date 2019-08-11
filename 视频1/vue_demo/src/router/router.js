/**

 * @author BY

 * @date 2019-08-11 08:03

 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 声明使用vue-router插件
/*
内部定义并注册了2个组件标签(router-link/router-view),
给组件对象添加了2个属性:
    1. $router: 路由器
    2. $route: 当前路由
 */

import About from '../views/About'
import Home from '../views/Home'
import News from '../views/subViews/News'
import Messages from '../views/subViews/Messages'
import MessageDetails from '../views/subViews/MessageDetails'

export default new VueRouter({
    // 路由配置 注册应用中所有的路由
    routes: [
        { path: '/', redirect: '/about' },
        { path: '/about', component: About },
        {
            path: '/home',
            component: Home,
            children: [
                { path: '', redirect: '/home/news' },
                { path: 'news', component: News},
                {
                    path: 'messages',
                    component: Messages,
                    children: [
                        { path: 'messageDetails/:id', component: MessageDetails}
                    ]
                }
            ]
        }
    ]
})

