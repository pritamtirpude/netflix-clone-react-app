import Button from "../../components/button/Button";
import { Link, useLocation } from "react-router-dom";
import { HomeContainer } from "./home.styles";

const Home = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" ? (
        <HomeContainer>
          <h1>Unlimited movies, TV shows and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <Link to="signup">
            <Button buttonText="Sign Up" signupstyle="50%" />
          </Link>
        </HomeContainer>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
