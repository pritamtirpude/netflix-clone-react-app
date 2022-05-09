export const selectMovies = (state) => state.movies.popularMovies;
export const selectTrending = (state) => state.movies.trendingNow;
export const selectTrendingTV = (state) => state.movies.trendingTV;
export const selectTopRated = (state) => state.movies.topRatedMovies;
export const selectUpcoming = (state) => state.movies.upcomingMovies;
export const selectTVShows = (state) => state.movies.popularTVShows;
export const selectTopRatedTVShows = (state) => state.movies.topRatedTVShows;
export const selectIsLoading = (state) => state.movies.isLoading;
