export const selectDetails = (state) => state.movieTvDetails.details;
export const selectLoading = (state) => state.movieTvDetails.isLoading;
export const selectSimilarMovies = (state) =>
  state.movieTvDetails.similarMovies;
export const selectMovieTrailers = (state) => state.movieTvDetails.movieVideos;
export const selectCasts = (state) => state.movieTvDetails.casts;
