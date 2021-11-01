import { ProxyState } from "../AppState.js";

export class List {
    constructor() {
    }

    get Template() {
        return `
              <div class="text-light">
                <p>
                <div class="darken-20 shadow-inset ">
                  ${this.getTasks()}
                </div>
                <p class="col-12 text-center">
                  ${this.tasksRemaining} / ${this.numberOfTasks} Remaining
                </p>
              </div>
            <form class="row align-items-end text-center" onsubmit="app.taskController.createTask()">
                <div class="col-10">
                    <input type="text" class="form-control my-2" name="description" id="" aria-describedby="helpId" placeholder="Add task" pattern=".{3,50}">
                </div>
                <button class="btn addTaskButton btn-primary my-2">
                    <i class="fas text-light fa-plus"></i>
                </button>
            </form>
        `
    }

    getTasks() {
        const tasks = ProxyState.tasks
        let template = ''
        tasks.forEach(t => {
            template += t.Template
        })
        return template
    }

    get tasksRemaining() {
        return ProxyState.tasks.filter(t => !t.isChecked).length
    }

    get numberOfTasks() {
        return ProxyState.tasks.length
    }
}