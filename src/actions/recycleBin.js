import { ADD_RECYCLE_ENTRY, DELETE_RECYCLE_ENTRY, SET_RECYCLE_ENTRY } from "../utils/constants";

export const addRecycleEntry = (entry) => {
  return {
    type: ADD_RECYCLE_ENTRY,
    payload: entry,
  };
};

export const deleteRecycleEntry = (entry) => {
  return {
    type: DELETE_RECYCLE_ENTRY,
    payload: entry,
  };
};

export const setRecycleEntry = (entry) => {
  return {
    type: SET_RECYCLE_ENTRY,
    payload: entry,
  };
};
