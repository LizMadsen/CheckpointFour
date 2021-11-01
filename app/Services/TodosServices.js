import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Task.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"

class TodosServices {
    createTask(taskData) {
        const task = new Todo(taskData)
        ProxyState.todo = [...ProxyState.todo, task]
    }

    removeTask(id) {
        let banana = ProxyState.todo.find(l => l.id == listID)
        ProxyState.todo = ProxyState.todo.filter(t => t.id != id)
    }

    toggleCheckbox(checkbox, id) {
        console.log(checkbox.checked)
        let taskIndex = ProxyState.todo.findIndex(l => l.id == id)
        let task = ProxyState.todo[taskIndex]
        task.isChecked = !task.isChecked
        ProxyState.todo[taskIndex] = task
        ProxyState.todo = ProxyState.todo
        saveState();
    }
}

export const todosServices = new TodosServices()