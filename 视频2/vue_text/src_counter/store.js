/**

 * @author BY

 * @date 2019-08-14 09:38

 */

// vuex最核心的管理对象store

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

// 相当于data对象的状态对象
const state = {
    count: 0
};
// 包含了n个直接更新状态的方法的对象
// 触发: action 中的 commit('mutation 名称')
const mutations = {
    INCREMENT(state) {
        state.count++;
    },
    DECREMENT(state) {
        state.count--;
    }
};

// 通过执行: commit()来触发 mutation 的调用, 间接更新 state
// 触发: 组件中: $store.dispatch('action 名称', data1)
// 可以包含异步代码(定时器, ajax)
const actions = {
    increment({commit}) {
        commit('INCREMENT')
    },
    decrement({commit}) {
        commit('DECREMENT')
    },
    incrementIfOdd({commit, state}) {
        if (state.count%2 === 1) {
            commit('INCREMENT')
        }
    },
    // 可以包含异步代码(定时器, ajax)
    incrementAsync({commit}) {
        setTimeout(() => {
            commit('INCREMENT')
        }, 1000)
    }
};

// 读取: 组件中: $store.getters.xxx
//不需要调用，只需要读取属性值
const getters = {
    evenOrOdd(state) {
        return state.count%2 === 0 ? '偶数':'奇数'
    }
};

export default new Vuex.Store({
    state, //vuex 管理的状态对象
    mutations,  //包含多个直接更新 state 的方法(回调函数)的对象
    actions, //包含多个事件回调函数的对象
    getters, //包含多个计算属性(get)的对象
})
