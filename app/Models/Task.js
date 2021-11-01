import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId"

export class Task {
    constructor(data) {
        this.id = data.id || generateId()
        this.taskName = data.taskName
    }

    get Template() {
        return `
        <div class="card">
            <div class="card-body text-light">
                <p>
                    <div class=" bg-light darken-20 shadow-inset">
                        ${this.getTasks()}
                    </div>
                <p class="col-12 text-center">
                ${this.tasksRemaining} / ${this.numberOfTasks}
                </p>
                <h5>TO-DO LIST</h5>
            </div>
        </div>
        `
    }

    getTasks() {
        const tasks = ProxyState.tasks.filter(t => this.id == t.listID)
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