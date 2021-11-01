import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js"

function _draw() {
    const list = ProxyState.list
    let template = list.Template
    document.getElementById('todoList').innerHTML = template
}

export class ListController {
    constructor() {
        ProxyState.on('tasks', _draw)
        listsService.createList()
        _draw()
    }
}