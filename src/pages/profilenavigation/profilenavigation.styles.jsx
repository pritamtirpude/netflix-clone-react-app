import styled from "styled-components";
import { motion } from "framer-motion";
export const Header = styled.header`
  width: 100%;
  background: ${({ imgUrl }) =>
    imgUrl
      ? `url(https://image.tmdb.org/t/p/original${imgUrl}) no-repeat center/cover`
      : ""};
  min-height: 100vh;
  overflow: hidden;
  position: relative;
  z-index: 100;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .list-link {
    color: var(--white-color);
    margin-left: 2rem;
    transition: all 0.5s ease;

    &:hover {
      color: #e5e5e5;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0,
    rgba(0, 0, 0, 0) 40%,
    rgba(0, 0, 0, 0) 75%,
    rgba(0, 0, 0, 0.8) 100%
  );
  z-index: -100;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  padding: 0rem 5rem;

  @media screen and (max-width: 768px) {
    padding: 0rem 2rem;
  }
`;

export const MovieInfo = styled(motion.div)`
  padding: 0rem 5rem;
  margin-top: 20rem;
  width: 80%;
  position: absolute;
  left: 0;
  bottom: 3rem;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    padding: 0rem 2rem;
    width: 100%;
  }

  h3 {
    font-size: 5rem;
    text-transform: uppercase;
    line-height: 5.5rem;

    @media screen and (max-width: 768px) {
      font-size: 3rem;
      line-height: 3rem;
    }
  }

  p {
    word-break: break-all;
  }
`;
