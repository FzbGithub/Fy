/**
 * Created by sks on 2017/1/6.
 */
import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
Vue.use(Vuex);
Vue.use(VueRouter);

import routes from "./router";
var router= new VueRouter({
    routes
});
var store = new Vuex.Store({
    state:{
        count:0
    },
    mutations: {
        increment (state) {
            // 变更状态
            state.count++
        }
    }
});
var vm=new Vue({
    el:"#app",
    router,
    store,
    data:{

    },
    
    computed:{
        count1() {
            return store.state.count;
        }

    },
    methods: {
        counter () {
            store.commit("increment");
        }
    }

});