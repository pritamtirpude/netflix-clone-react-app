import { createAction } from "../../utils/reducer/reducer.utils";
import { MOVIES_ACTION_TYPES } from "./movies.types";
import {
  fetchPopularMovies,
  fetchTrendingNow,
  fetchTopRatedMovies,
  fetchUpcomingMovies,
  fetchPopularTVShows,
  fetchTopRatedTVShows,
  fetchTrendingTVShows,
} from "../../api";
import axios from "axios";

const fetchMoviesStart = () =>
  createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_START);

const fetchMoviesPopular = (moviesArray) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_POPULAR, moviesArray);

const fetchMoviesFailed = (error) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_FAILED, error);

const fetchMoviesTrending = (trendingMoviesArray) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_TRENDING, trendingMoviesArray);

const fetchTVShowsTrending = (trendingTvArray) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_TV_TRENDING, trendingTvArray);

const fetchMoviesTopRated = (topRatedArray) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_TOP_RATED, topRatedArray);

const fetchUpcoming = (upcomingArray) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_MOVIES_UPCOMING, upcomingArray);

const fetchTVShowsPopular = (tvShowsArray) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_POPULAR_TV_SHOWS, tvShowsArray);

const fetchTVShowsTopRated = (topRatedTVArray) =>
  createAction(MOVIES_ACTION_TYPES.FETCH_TOP_RATED_TV_SHOWS, topRatedTVArray);

export const fetchMoviesAsync = async (dispatch) => {
  dispatch(fetchMoviesStart);
  const popularMovies = await axios.get(fetchPopularMovies());
  try {
    dispatch(fetchMoviesPopular(popularMovies.data.results));
  } catch (error) {
    dispatch(fetchMoviesFailed(error));
  }
};

export const fetchTrendingAsync = async (dispatch) => {
  dispatch(fetchMoviesStart);
  const trendingMovies = await axios.get(fetchTrendingNow());
  try {
    dispatch(fetchMoviesTrending(trendingMovies.data.results));
  } catch (error) {
    dispatch(fetchMoviesFailed(error));
  }
};

export const fetchTrendingShowsTVAsync = async (dispatch) => {
  dispatch(fetchMoviesStart);

  const trendingTv = await axios.get(fetchTrendingTVShows());

  try {
    dispatch(fetchTVShowsTrending(trendingTv.data.results));
  } catch (error) {
    dispatch(fetchMoviesFailed(error));
  }
};

export const fetchTopRatedAsync = async (dispatch) => {
  dispatch(fetchMoviesStart);
  const trendingtopRatedMovies = await axios.get(fetchTopRatedMovies());
  try {
    dispatch(fetchMoviesTopRated(trendingtopRatedMovies.data.results));
  } catch (error) {
    dispatch(fetchMoviesFailed(error));
  }
};

export const fetchUpcomingAsync = async (dispatch) => {
  dispatch(fetchMoviesStart);
  const upcomingMovies = await axios.get(fetchUpcomingMovies());
  try {
    dispatch(fetchUpcoming(upcomingMovies.data.results));
  } catch (error) {
    dispatch(fetchMoviesFailed(error));
  }
};

export const fetchPopularTVShowsAsync = async (dispatch) => {
  dispatch(fetchMoviesStart);
  const popularTVShows = await axios.get(fetchPopularTVShows());
  try {
    dispatch(fetchTVShowsPopular(popularTVShows.data.results));
  } catch (error) {
    dispatch(fetchMoviesFailed(error));
  }
};

export const fetchTopRatedTVShowsAsync = async (dispatch) => {
  dispatch(fetchMoviesStart);
  const topRatedTVShows = await axios.get(fetchTopRatedTVShows());
  try {
    dispatch(fetchTVShowsTopRated(topRatedTVShows.data.results));
  } catch (error) {
    dispatch(fetchMoviesFailed(error));
  }
};
