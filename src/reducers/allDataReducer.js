import { SET_ALL_DATA } from "../utils/constants"

const allData = {


}

export default  ( data = allData , action) => {
    switch (action.type){
        case SET_ALL_DATA: {
            const newData = action.payload;
            return newData;
        }

        default:
            return data
    }
}