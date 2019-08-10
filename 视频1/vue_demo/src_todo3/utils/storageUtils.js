/**

 * @author BY

 * @date 2019-08-09 17:27

 */
const TODO_KEY = 'todo_key';
export default {
    readTodo() {
        return JSON.parse(localStorage.getItem(TODO_KEY) || '[]')
    },
    saveTodo(todo) {
        localStorage.setItem(TODO_KEY, JSON.stringify(todo))
    }
}