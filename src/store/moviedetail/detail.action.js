import { createAction } from "../../utils/reducer/reducer.utils";
import { DETAIL_ACTION_TYPES } from "./detail.types";
import {
  fetchMovieDetails,
  fetchTvDetails,
  fetchSimilarMovies,
  fetchSimilarTV,
  fetchMovieTrailers,
  fetchTVTrailers,
  fetchMovieCasts,
  fetchTVCasts,
} from "../../api";
import axios from "axios";

const fetchDetailLoading = () =>
  createAction(DETAIL_ACTION_TYPES.DETAIL_IS_LOADING);

const fetchDetailSuccess = (detailObject) =>
  createAction(DETAIL_ACTION_TYPES.DETAILS_SUCCESS, detailObject);

const fetchDetailError = (error) =>
  createAction(DETAIL_ACTION_TYPES.DETAIL_ERROR, error);

const fetchSimilarMoviesSuccess = (similarMoviesArray) =>
  createAction(DETAIL_ACTION_TYPES.DETAILS_SIMILAR_MOVIES, similarMoviesArray);

const fetchMovieTrailersSuccess = (trailersArray) =>
  createAction(DETAIL_ACTION_TYPES.DETAILS_MOVIES_TRAILERS, trailersArray);

const fetchCastsDetails = (castsArray) =>
  createAction(DETAIL_ACTION_TYPES.DETAILS_CAST, castsArray);

const detailsClearSuccess = () =>
  createAction(DETAIL_ACTION_TYPES.DETAILS_CLEAR);

export const fetchMovieDetailsAsync = (movie_id) => async (dispatch) => {
  dispatch(fetchDetailLoading);

  const movieDetails = await axios.get(fetchMovieDetails(movie_id));

  try {
    dispatch(fetchDetailSuccess(movieDetails.data));
  } catch (error) {
    dispatch(fetchDetailError(error));
  }
};

export const fetchTVDetailAsync = (tv_id) => async (dispatch) => {
  dispatch(fetchDetailLoading);

  const tvDetails = await axios.get(fetchTvDetails(tv_id));

  try {
    dispatch(fetchDetailSuccess(tvDetails.data));
  } catch (error) {
    dispatch(fetchDetailError(error));
  }
};

export const fetchSimalarMoviesAsync = (movie_id) => async (dispatch) => {
  dispatch(fetchDetailLoading);

  const similarMovies = await axios.get(fetchSimilarMovies(movie_id));

  try {
    dispatch(fetchSimilarMoviesSuccess(similarMovies.data.results));
  } catch (error) {
    dispatch(fetchDetailError(error));
  }
};

export const fetchSimalarTVAsync = (tv_id) => async (dispatch) => {
  dispatch(fetchDetailLoading);

  const similarTVShows = await axios.get(fetchSimilarTV(tv_id));

  try {
    dispatch(fetchSimilarMoviesSuccess(similarTVShows.data.results));
  } catch (error) {
    dispatch(fetchDetailError(error));
  }
};

export const fetchMovieTrailersAsync = (movie_id) => async (dispatch) => {
  dispatch(fetchDetailLoading);

  const trailers = await axios.get(fetchMovieTrailers(movie_id));

  try {
    dispatch(fetchMovieTrailersSuccess(trailers.data.results));
  } catch (error) {
    dispatch(fetchDetailError(error));
  }
};

export const fetchTVTrailersAsync = (tv_id) => async (dispatch) => {
  dispatch(fetchDetailLoading);

  const trailers = await axios.get(fetchTVTrailers(tv_id));

  try {
    dispatch(fetchMovieTrailersSuccess(trailers.data.results));
  } catch (error) {
    dispatch(fetchDetailError(error));
  }
};

export const fetchMoviesCastsAsync = (movieId) => async (dispatch) => {
  dispatch(fetchDetailLoading);

  const movieCasts = await axios.get(fetchMovieCasts(movieId));

  try {
    dispatch(fetchCastsDetails(movieCasts.data.cast));
  } catch (error) {
    dispatch(fetchDetailError(error));
  }
};

export const fetchTVCastsAsync = (tvId) => async (dispatch) => {
  dispatch(fetchDetailLoading);

  const tvCasts = await axios.get(fetchTVCasts(tvId));

  try {
    dispatch(fetchCastsDetails(tvCasts.data.cast));
  } catch (error) {
    dispatch(fetchDetailError(error));
  }
};

export const detailsClear = (dispatch) => {
  try {
    dispatch(detailsClearSuccess());
  } catch (error) {
    dispatch(fetchDetailError(error));
  }
};
