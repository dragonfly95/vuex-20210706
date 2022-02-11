import HelloWorld from '@/components/HelloWorld'
import Example from '@/components/Example'
import TodoPage from '@/components/TodoPage'

import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Hello',
        component: HelloWorld 
    },
    {
        path: '/example',
        name: 'Example',
        component: Example
    },
    {
        path: '/todos',
        name: 'TodoPage',
        component: TodoPage
    }
]

const router = new VueRouter({
    mode: "history",
    routes
});

export default  router;