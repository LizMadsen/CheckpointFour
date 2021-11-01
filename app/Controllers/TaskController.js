import { ProxyState } from "../AppState.js";
import { tasksServices } from "../Services/TasksServices.js";

export class TaskController {
    constructor() {
    }

    createTask() {
        window.event.preventDefault()
        const form = window.event.target
        let taskData = {
            // @ts-ignore
            name: form.taskName.value,
            isChecked: false
        }
        tasksServices.createTask(taskData)
    }

    toggleCheckbox(checkbox, id) {
        tasksServices.toggleCheckbox(checkbox, id)
    }

    removeTask(id) {
        let result = window.confirm("Are you sure you want to delete this task?")
        console.log(result)
        if (result) {
            tasksServices.removeTask(id)
        }
    }
}