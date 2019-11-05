export default {
    routes: [
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: resolve => require(['components/Login.vue'], resolve),
    //     meta: {
    //         tokenRequired: false
    //     }
    // },
    // {
    //     path: '/register',
    //     name: 'register',
    //     component: resolve => require(['components/Register.vue'], resolve),
    //     meta: {
    //         tokenRequired: false
    //     }
    // },
    {
        path: '/bus',
        name: 'bus',
        component: resolve => require(['components/frame/Bus.vue'], resolve),
        meta: {
            tokenRequired: false
        }
    },
    {
            path: '/car',
            name: 'car',
            component: resolve => require(['components/frame/Car.vue'], resolve),
            meta: {
                tokenRequired: false
            }
        },
    {
            path: '/van',
            name: 'van',
            component: resolve => require(['components/frame/Van.vue'], resolve),
            meta: {
                tokenRequired: false
            }
        },
    {
            path: '/boat',
            name: 'boat',
            component: resolve => require(['components/frame/Boat.vue'], resolve),
            meta: {
                tokenRequired: false
            }
        },
    {
            path: '/motor',
            name: 'motor',
            component: resolve => require(['components/frame/Motor.vue'], resolve),
            meta: {
                tokenRequired: false
            }
        },
    // {
    //     path: '/logout',
    //     name: 'logout',
    //     component: resolve => require(['components/frame/Logout.vue'], resolve),
    //     meta: {
    //         tokenRequired: true
    //     }
    // },
    // {
    //     path: '/timeline',
    //     name: 'timeline',
    //     component: resolve => require(['components/Timeline.vue'], resolve),
    //     meta: {
    //         tokenRequired: false
    //     }
    // },
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