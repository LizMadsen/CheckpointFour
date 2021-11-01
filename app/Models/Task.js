import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/generateId"

export class Task {
    constructor(data) {
        this.id = data.id || generateId()
        this.taskName = data.taskName
        this.isChecked = data.isChecked
    }

    get Template() {
        return `
        <div class="col-10">
            <input id="checkbox" type="checkbox" class="checkbox" ${this.isChecked ? 'checked' : ''} onchange="app.tasksController.toggleCheckbox(this, '${this.id}')"/> ${this.taskName}
            <button class="trashButton">
                <i class="trashcan fas fa-trash" onclick="app.tasksController.removeTask('${this.id}')">
                </i>
            </button>
        </div>
        `
    }
}