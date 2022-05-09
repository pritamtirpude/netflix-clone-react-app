import { MOVIES_ACTION_TYPES } from "./movies.types";

const INITIAL_STATE = {
  popularMovies: [],
  trendingNow: [],
  trendingTV: [],
  topRatedMovies: [],
  upcomingMovies: [],
  popularTVShows: [],
  topRatedTVShows: [],
  isLoading: false,
  error: null,
};

export const moviesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case MOVIES_ACTION_TYPES.FETCH_MOVIES_START:
      return { ...state, isLoading: true };
    case MOVIES_ACTION_TYPES.FETCH_MOVIES_POPULAR:
      return {
        ...state,
        popularMovies: payload,
        isLoading: false,
      };
    case MOVIES_ACTION_TYPES.FETCH_MOVIES_TRENDING:
      return {
        ...state,
        trendingNow: payload,
        isLoading: false,
      };
    case MOVIES_ACTION_TYPES.FETCH_TV_TRENDING:
      return {
        ...state,
        trendingTV: payload,
        isLoading: false,
      };
    case MOVIES_ACTION_TYPES.FETCH_MOVIES_TOP_RATED:
      return {
        ...state,
        topRatedMovies: payload,
        isLoading: false,
      };
    case MOVIES_ACTION_TYPES.FETCH_MOVIES_UPCOMING:
      return {
        ...state,
        upcomingMovies: payload,
        isLoading: false,
      };
    case MOVIES_ACTION_TYPES.FETCH_POPULAR_TV_SHOWS:
      return {
        ...state,
        popularTVShows: payload,
        isLoading: false,
      };
    case MOVIES_ACTION_TYPES.FETCH_TOP_RATED_TV_SHOWS:
      return {
        ...state,
        topRatedTVShows: payload,
        isLoading: false,
      };
    case MOVIES_ACTION_TYPES.FETCH_MOVIES_FAILED:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
