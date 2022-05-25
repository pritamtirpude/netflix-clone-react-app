import NetflixLogo from "../../assets/netflix.png";
import { Outlet, Link } from "react-router-dom";
import Button from "../button/Button";
import {
  NavigationContainer,
  LogoContainer,
  Header,
} from "./navigation.styles";
import Home from "../../pages/home/Home";

const Navigation = () => {
  return (
    <Header>
      <NavigationContainer>
        <LogoContainer>
          <Link to="/">
            <img src={NetflixLogo} alt="logo" />
          </Link>
        </LogoContainer>
        <div className="navigation-links">
          <Link to="login">
            <Button buttonText="Sign In" />
          </Link>
        </div>
      </NavigationContainer>
      <Home />

      <Outlet />
    </Header>
  );
};

export default Navigation;
