import { SET_ALL_DATA } from "../utils/constants"

export const updateAllDataInfo = (entry) => {
    return {
        type: SET_ALL_DATA,
        payload: entry
    }
}