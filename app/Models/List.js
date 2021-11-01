import { ProxyState } from "../AppState.js";

export class List {
    constructor() {
    }

    get Template() {
        return `
              <div class="text-light">
                <p>
                <div class=" bg-light darken-20 shadow-inset">
                  ${this.getTasks()}
                </div>
                <p class="col-12 text-center">
                  ${this.tasksRemaining} / ${this.numberOfTasks}
                </p>
              </div>
            <form class="row align-items-end" onsubmit="app.taskController.createTask()">
                <div class="col-10">
                    <input type="text" class="form-control my-2" name="taskName" id="" aria-describedby="helpId" placeholder="Add task" pattern=".{3,50}">
                </div>
                <button class="btn addTaskButton btn-info my-2">
                    Add
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
        return ProxyState.tasks.filter(t => t.isChecked).length
    }

    get numberOfTasks() {
        return ProxyState.tasks
    }
}