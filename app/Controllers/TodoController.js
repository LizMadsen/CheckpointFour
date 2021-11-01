import { ProxyState } from "../AppState.js";
import { todosServices } from "../Services/TodosServices.js";

export class TodoController {
    constructor() {

        createTask() {
            window.event.preventDefault()
            const form = window.event.target
            let taskData = {
                name: form.taskName.value,
                isChecked: false
            }
            todosServices.createTask(taskData)
        }

        toggleCheckbox(checkbox, id) {
            todosServices.toggleCheckbox(checkbox, id)
        }

        removeTask(id) {
            let result = window.confirm("Are you sure you want to delete this task?")
            console.log(result)
            if (result) {
                todosServices.removeTask(id)
            }
        }
    }
    // ProxyState.on('todo', _drawToDoList)
}