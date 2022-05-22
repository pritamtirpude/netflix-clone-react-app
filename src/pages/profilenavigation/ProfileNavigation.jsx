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
import { motion } from "framer-motion";

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
      <MovieInfo
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
        transition={{ duration: "1.2", delayChildren: "0.2" }}
      >
        <motion.h3 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {heroMovie?.name || heroMovie?.original_name || heroMovie?.title}
        </motion.h3>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {heroMovie?.overview}
        </motion.p>
      </MovieInfo>
      <Outlet />
    </Header>
  );
};

export default ProfileNavigation;
