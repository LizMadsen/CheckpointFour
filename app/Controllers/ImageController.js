import { ProxyState } from "../AppState.js";
import { imagesService } from "../Services/ImagesService.js";

function _drawSandboxImage() {
    const image = ProxyState.image
    let template = ''
    template = image.Template
    document.getElementById('image').innerHTML = template
}

export class ImagesController {
    constructor() {
        this.getImage()

        ProxyState.on('image', _drawSandboxImage)
    }
    async getImage() {
        try {
            await imagesService.getSandboxImage()
        } catch (error) {
            console.error("[Sandbox Image Error]", error)
        }
    }
}