import { SET_STORAGE_INFO } from "../utils/constants"

const storageData = {

    imageCount: 0,
    audioCount: 0,
    videoCount: 0,
    documentCount: 0,
    othersCount: 0,
    imageSize: 0,
    audioSize: 0,
    videoSize: 0,
    documentSize: 0,
    othersSize: 0

}

export default  ( data = storageData , action) => {
    switch (action.type){
        case SET_STORAGE_INFO: {
            const newInfo = action.payload;
            return newInfo;
        }

        default:
            return data
    }
}