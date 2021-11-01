import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId.js"

export class Task {
    constructor(data) {
        this.id = data.id || generateId()
        this.description = data.description
        this.completed = data.completed
    }

    get Template() {
        return `
        <div class="col-10">
            <input id="checkbox" type="checkbox" class="checkbox" ${this.completed ? 'checked' : ''} onchange="app.taskController.toggleCheckbox('${this.id}')"/>
            <span class="text-light">
                ${this.description}
            </span>
            <button class="trashButton">
                <i class="trashcan text-danger fas fa-trash" onclick="app.taskController.removeTask('${this.id}')">
                </i>
            </button>
        </div>
        `
    }
}