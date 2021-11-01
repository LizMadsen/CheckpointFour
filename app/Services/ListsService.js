import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";

class ListsService {
    constructor() {
    }

    createList() {
        const list = new List()
        ProxyState.list = list
    }
}

export const listsService = new ListsService()