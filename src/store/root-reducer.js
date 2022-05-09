import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { moviesReducer } from "./movies/movies.reducer";
import { detailReducer } from "./moviedetail/detail.reducer";
import { myListReducer } from "./mylist/mylist.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  movies: moviesReducer,
  movieTvDetails: detailReducer,
  myListData: myListReducer,
});
