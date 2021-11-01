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
            description: form.description.value,
            isChecked: false
        }
        tasksServices.createTask(taskData)
    }

    toggleCheckbox(checkbox, id) {
        tasksServices.toggleCheckbox(checkbox, id)
    }

    removeTask(id) {
        // @ts-ignore
        let result = Swal.fire({
            title: 'Wait!',
            text: 'Are you sure you want to delete this task?',
            icon: 'error',
            confirmButtonText: 'Cool'
        })
        console.log(result)
        if (result) {
            tasksServices.removeTask(id)
        }
    }
}