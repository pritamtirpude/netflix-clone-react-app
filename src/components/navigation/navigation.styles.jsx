import styled from "styled-components";
import backgroundImage from "../../assets/background.jpg";

export const Header = styled.header`
  background: url(${backgroundImage}) no-repeat center/cover;
  min-height: 100vh;
  z-index: 100;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0) 75%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: -100;
  }
`;
export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 5rem;
  margin: 0;

  @media screen and (max-width: 768px) {
    padding: 0rem 2rem;
  }
`;

export const LogoContainer = styled.div``;
