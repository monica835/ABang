export default {
    routes: [
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['components/Login.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: resolve => require(['components/Register.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
  
    {
        path: '/reserved',
        name: 'reserved',
        component: resolve => require(['components/frame/Reserved.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
        path: '/nextpage',
        name: 'nextpage',
        component: resolve => require(['components/frame/NextPage.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
            path: '/mainpage',
            name: 'mainpage',
            component: resolve => require(['components/frame/MainPage.vue'], resolve),
            meta: {
                tokenRequired: false
            }
        },
    ]

}