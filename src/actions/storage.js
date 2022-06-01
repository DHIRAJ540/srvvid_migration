import {SET_STORAGE_INFO} from "../utils/constants"

export const updateStorageInfo = (entry) => {
    return {
        type: SET_STORAGE_INFO,
        payload: entry
    }
}