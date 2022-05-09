import { MYLIST_ACTION_TYPES } from "./mylist.types";

const INITIAL_STATE = {
  myList: [],
};

export const myListReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case MYLIST_ACTION_TYPES.SET_MYLIST_ITEMS:
      return {
        ...state,
        myList: payload,
      };
    default:
      return state;
  }
};
