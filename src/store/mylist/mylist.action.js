import { createAction } from "../../utils/reducer/reducer.utils";
import { MYLIST_ACTION_TYPES } from "./mylist.types";

const addToListItem = (listItemArray, movieTVFavouriteObject) => {
  const existingItem = listItemArray.find(
    (listItem) => listItem.id === movieTVFavouriteObject.id
  );

  if (existingItem) {
    return listItemArray.map((item) =>
      item.id === movieTVFavouriteObject.id ? { ...item } : item
    );
  }

  return [...listItemArray, { ...movieTVFavouriteObject }];
};

export const addFavouriteItem = (listItemArray, movieTvObject) => {
  const newItemsList = addToListItem(listItemArray, movieTvObject);
  return createAction(MYLIST_ACTION_TYPES.SET_MYLIST_ITEMS, newItemsList);
};
