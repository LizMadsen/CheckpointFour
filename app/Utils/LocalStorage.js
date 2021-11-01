import { ProxyState } from "../AppState.js";
import { Todo } from "../Models/Task.js";

export function saveState() {
    localStorage.setItem('App', JSON.stringify({
        tasks: ProxyState.tasks
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('App'))
    if (data != null) {
        ProxyState.tasks = data.todo.map(t => new Todo(t))
    }
}