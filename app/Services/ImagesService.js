import { ProxyState } from "../AppState.js";
import { Image } from "../Models/Image.js";
import { sandboxAPI } from "./AxiosService.js";

class ImagesService {

    async getSandboxImage() {
        const res = await sandboxAPI.get('' + 'images')
        let imageData = {
            url: res.data.largeImgUrl,
            author: res.data.author
        }
        const image = new Image(imageData)
        ProxyState.image = image
    }
}

export const imagesService = new ImagesService()