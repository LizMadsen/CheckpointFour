import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"

function _draw() {
    const list = ProxyState.list
    let template = list.Template
    document.getElementById('list').innerHTML = template
}

export class ListController {
    constructor() {
        listsService.createList()
        loadState()
        _draw()
    }
}