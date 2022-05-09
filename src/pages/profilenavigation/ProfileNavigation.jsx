import {
  Header,
  NavContainer,
  MovieInfo,
  Overlay,
  Logo,
} from "./profilenavigation.styles";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import NetflixLogo from "../../assets/netflix.png";
import Button from "../../components/button/Button";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectMovies } from "../../store/movies/movies.selector";

const ProfileNavigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const popularMovie = useSelector(selectMovies);

  const heroMovie = popularMovie[0];

  return (
    <Header imgUrl={heroMovie?.backdrop_path}>
      <Overlay></Overlay>
      <NavContainer>
        <Logo>
          <Link to="/profile">
            <img src={NetflixLogo} alt="logo" />
          </Link>
          <Link className="list-link" to="/mylist">
            <p>My List</p>
          </Link>
        </Logo>
        {currentUser && (
          <div>
            <Link onClick={signOutUser} to="/">
              <Button buttonText="Sign Out" />
            </Link>
          </div>
        )}
      </NavContainer>
      <MovieInfo>
        <h3>
          {heroMovie?.name || heroMovie?.original_name || heroMovie?.title}
        </h3>
        <p>{heroMovie?.overview}</p>
      </MovieInfo>
      <Outlet />
    </Header>
  );
};

export default ProfileNavigation;
