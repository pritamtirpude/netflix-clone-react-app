const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = process.env.REACT_APP_API_KEY;

const popularMoviesURL = `movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
const trendingNowURL = `trending/movie/week?api_key=${API_KEY}`;
const topRatedURL = `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const upcomingURL = `movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;
const popularTVshowsURL = `tv/popular?api_key=${API_KEY}&language=en-US&page=1`;
const topRatedTVShowsURL = `tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
const trendingNowTvURL = `trending/tv/week?api_key=${API_KEY}`;

export const fetchPopularMovies = () => `${BASE_URL}${popularMoviesURL}`;
export const fetchTrendingNow = () => `${BASE_URL}${trendingNowURL}`;
export const fetchTopRatedMovies = () => `${BASE_URL}${topRatedURL}`;
export const fetchUpcomingMovies = () => `${BASE_URL}${upcomingURL}`;
export const fetchPopularTVShows = () => `${BASE_URL}${popularTVshowsURL}`;
export const fetchTopRatedTVShows = () => `${BASE_URL}${topRatedTVShowsURL}`;
export const fetchTrendingTVShows = () => `${BASE_URL}${trendingNowTvURL}`;

export const fetchMovieDetails = (movieId) =>
  `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;

export const fetchTvDetails = (tvId) =>
  `${BASE_URL}tv/${tvId}?api_key=${API_KEY}&language=en-US`;

export const fetchSimilarMovies = (movieId) =>
  `${BASE_URL}movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`;

export const fetchSimilarTV = (TvId) =>
  `${BASE_URL}tv/${TvId}/similar?api_key=${API_KEY}&language=en-US&page=1`;

export const fetchMovieTrailers = (movieId) =>
  `${BASE_URL}movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`;

export const fetchTVTrailers = (tvId) =>
  `${BASE_URL}tv/${tvId}/videos?api_key=${API_KEY}&language=en-US`;

export const fetchMovieCasts = (movieId) =>
  `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`;

export const fetchTVCasts = (tvId) =>
  `${BASE_URL}/tv/${tvId}/credits?api_key=${API_KEY}`;
