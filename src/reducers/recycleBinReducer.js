import dummyFileSystem from "../utils/dummyFileSystem";

import { ADD_RECYCLE_ENTRY, SET_RECYCLE_ENTRY, DELETE_RECYCLE_ENTRY } from "../utils/constants";
import { AddRecycleEntry, SetRecycleEntry, DeleteRecycleEntry } from "../utils/recycleBin";

export default (data = dummyFileSystem, action) => {
  switch (action.type) {
    case ADD_RECYCLE_ENTRY: {
      const newEntry = action.payload;
      return AddRecycleEntry(data, newEntry);
    }

    case DELETE_RECYCLE_ENTRY: {
      return DeleteRecycleEntry(
        JSON.parse(localStorage.getItem("recycleBin")),
        action.payload
      );
    }
    case SET_RECYCLE_ENTRY: {
      return SetRecycleEntry(data, action.payload);
    }
    default:
      return data;
  }
};
