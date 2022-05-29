import { DETAIL_ACTION_TYPES } from "./detail.types";

const INITIAL_STATE = {
  details: {},
  similarMovies: [],
  movieVideos: [],
  casts: [],
  isLoading: false,
  error: null,
};

export const detailReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case DETAIL_ACTION_TYPES.DETAIL_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case DETAIL_ACTION_TYPES.DETAILS_SUCCESS:
      return {
        ...state,
        details: payload,
        isLoading: false,
      };
    case DETAIL_ACTION_TYPES.DETAILS_CLEAR:
      return {
        ...state,
        details: {},
      };
    case DETAIL_ACTION_TYPES.DETAILS_SIMILAR_MOVIES:
      return {
        ...state,
        similarMovies: payload,
        isLoading: false,
      };
    case DETAIL_ACTION_TYPES.DETAILS_MOVIES_TRAILERS:
      return {
        ...state,
        movieVideos: payload,
        isLoading: false,
      };
    case DETAIL_ACTION_TYPES.DETAILS_CAST:
      return {
        ...state,
        casts: payload,
        isLoading: false,
      };
    case DETAIL_ACTION_TYPES.DETAIL_ERROR:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
