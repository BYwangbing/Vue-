/**

 * @author BY

 * @date 2019-08-14 15:45

 */

// vuex核心管理模块store对象

import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})