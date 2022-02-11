
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

import userStore from '@/store/modules/userStore';
import postStore from '@/store/modules/postStore';

export default new Vuex.Store({
    // state: {
    //     count: 0
    // },
    // mutations: {
    //     increment (state) {
    //         state.count++
    //     },
    //     decrement (state) {
    //         state.count--
    //     }
    // }
    modules: {
        userStore: userStore,
        postStore: postStore
    }
});