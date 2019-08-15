/**

 * @author BY

 * @date 2019-08-14 15:03

 */

// 包含n个用于间接更新状态的方法的对象模块
// 包含多个接收组件通知触发mutation调用间接更新状态的方法的对象
import storageUtils from '../utils/storageUtils'
import { ADD_TODO, DELETE_TODO, DELETE_COMPLETE_TODO, SELECT_ALL, RECEIVE_TODO } from './mutations_types'
export default {
    add_tod({commit}, todo) {
        // 提交一个mutation请求
        commit(ADD_TODO, {todo}) // 传递给mutation的是一个包含数据的对象
    },
    delete_Todo({commit}, index) {
        commit(DELETE_TODO, {index})
    },
    deleteCompleteTodo({commit}) {
        commit(DELETE_COMPLETE_TODO)
    },
    select_All({commit}, isCheck) {
        commit(SELECT_ALL, {isCheck})
    },
    //异步获取TODO并更新状态
    reqTodo({commit}) {
        setTimeout(() => {
            // 读取数据
            const todo = storageUtils.readTodo();
            commit(RECEIVE_TODO, todo)
        }, 1000)
    }
}