import ProfileNavigation from "../profilenavigation/ProfileNavigation";
import Cards from "../../components/moviecards/Cards";
import {
  selectMovies,
  selectTrending,
  selectTopRated,
  selectUpcoming,
  selectTVShows,
  selectTopRatedTVShows,
  selectTrendingTV,
} from "../../store/movies/movies.selector";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const UserProfile = () => {
  const popularMovies = useSelector(selectMovies);
  const trendingNow = useSelector(selectTrending);
  const topRatedMovies = useSelector(selectTopRated);
  const upcomingMovies = useSelector(selectUpcoming);
  const popularTVShows = useSelector(selectTVShows);
  const topRatedTVShows = useSelector(selectTopRatedTVShows);
  const trendingTVShows = useSelector(selectTrendingTV);

  return (
    <>
      <ProfileNavigation />
      <Cards categoryTitle="Popular on NetFlix" categoryData={popularMovies} />
      <Cards categoryTitle="Trending Movies" categoryData={trendingNow} />
      <Cards categoryTitle="Top Rated Movies" categoryData={topRatedMovies} />
      <Cards categoryTitle="Movies Coming Soon" categoryData={upcomingMovies} />
      <Cards categoryTitle="Popular TV Shows" categoryData={popularTVShows} />
      <Cards categoryTitle="Trending TV Shows" categoryData={trendingTVShows} />
      <Cards
        categoryTitle="Top Rated TV Shows"
        categoryData={topRatedTVShows}
      />
      <Outlet />
    </>
  );
};

export default UserProfile;
