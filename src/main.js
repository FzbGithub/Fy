/**
 * Created by sks on 2017/1/6.
 */
import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

var store3 = new Vuex.Store({
    state:{
        count:0
    },
    mutations: {
        increment (state) {
            // 变更状态
            state.count++
        }
    },
    actions: {
        increment (context) {
            context.commit('increment')
        }
    }
});
var vm=new Vue({
    el:"#app",
    data:{

    },
    store:store3,
    computed:{
        count1() {
            return store3.state.count;
        }

    },
    methods: {
        counter () {
            this.count1++;
        }
    }

});