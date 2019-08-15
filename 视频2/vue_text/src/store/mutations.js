/**

 * @author BY

 * @date 2019-08-14 15:02

 */
// 包含n个由action触发用于直接更新状态的方法的对象模块
import { ADD_TODO, DELETE_TODO, DELETE_COMPLETE_TODO, SELECT_ALL, RECEIVE_TODO } from './mutations_types'
export default {
    [ADD_TODO](state, {todo}) {
        state.todo.unshift(todo)
    },
    [DELETE_TODO](state, {index}) {
        state.todo.splice(index, 1)
    },
    [DELETE_COMPLETE_TODO](state) {
        state.todo = state.todo.filter(todo => !todo.complete)
    },
    [SELECT_ALL](state, {isCheck}) {
        state.todo.forEach(todo => todo.complete = isCheck)
    },
    [RECEIVE_TODO](state, todo) {
        state.todo = todo
    }
}