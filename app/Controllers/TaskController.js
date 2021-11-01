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
            completed: false
        }
        tasksServices.createTask(taskData)
    }

    toggleCheckbox(id) {
        tasksServices.toggleCheckbox(id)
    }

    removeTask(id) {
        let result = window.confirm("Are you sure you want to delete this task?")
        console.log(result)
        if (result) {
            tasksServices.removeTask(id)
        }
    }
}



// Swal.fire({
//     title: 'Wait!',
//     text: 'Are you sure you want to delete this task?',
//     confirmButtonText: 'Cool',
//     cancelButtonText: 'Nah, bruh',
//     showCancelButton: true,
//     showCloseButton: true