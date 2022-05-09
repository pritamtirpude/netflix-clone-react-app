import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

export const DetailContainer = styled.div`
  background: hsl(0, 0%, 12%);
  width: 70%;
  position: absolute;
  top: 10%;
  left: 15%;
  border-radius: 0.5rem;
  overflow: hidden;
`;

export const MovieHeroContainer = styled.div`
  background: ${({ imgUrl }) =>
    imgUrl
      ? `url(https://image.tmdb.org/t/p/original${imgUrl}) no-repeat center/cover`
      : ""};
  min-height: 100vh;
  position: relative;
  z-index: 200;

  .video-wrapper {
    position: relative;
    padding-bottom: 75%;
    overflow: hidden;

    .cancel {
      color: var(--white-color);
      position: absolute;
      right: 4rem;
      top: 10rem;
      font-size: 3rem;
      z-index: 5000;
      cursor: pointer;
    }

    .video {
      position: absolute;
      width: 90%;
      height: 70%;
      top: 50%;
      left: 50%;
      border: 0;
      transform: translate(-50%, -50%);
    }
  }
`;

export const MovieHeroOverlay = styled.div`
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
  z-index: -10;
`;

export const HeroInfo = styled.div`
  position: absolute;
  left: 0;
  bottom: 3rem;
  width: 100%;
  height: auto;
  padding: 0rem 3rem;

  h3 {
    font-size: 5rem;
    line-height: 6rem;
    margin-bottom: 5rem;
    text-transform: uppercase;
  }
`;

export const HeroButtons = styled.div`
  display: flex;

  button {
    border: none;
    font-family: inherit;
    font-weight: bold;
    font-size: 2rem;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 0.3rem;
    background: var(--white-color);
  }

  .add-to-list {
    border-radius: 50%;
    margin-left: 2rem;
    border-width: 2px;
    background-color: rgba(42, 42, 42, 0.6);
    border: 2px solid var(--white-color);
  }

  .checkmark {
    color: var(--white-color);
  }
`;

export const DetailedInfo = styled.div`
  padding: 2rem 2rem;
`;

export const Overview = styled.div`
  .overview-info {
    margin-top: 3rem;

    p {
      margin-top: 2rem;
    }
  }
`;

export const H4 = styled.h4`
  font-size: 2rem;
  text-transform: uppercase;
`;

export const Genre = styled.div`
  margin-top: 3rem;

  .genres {
    display: flex;
    align-items: flex-start;
    margin-top: 2rem;

    p {
      border: 2px solid var(--white-color);
      margin: 0 2rem 0 0;
      padding: 1rem 2rem;
      border-radius: 3rem;
    }
  }
`;

export const Languages = styled.div`
  margin-top: 3rem;

  .spoken-languages {
    display: flex;
    align-items: flex-start;
    margin-top: 2rem;
  }

  p {
    border: 2px solid var(--white-color);
    margin: 0 2rem 0 0;
    padding: 1rem 2rem;
    border-radius: 3rem;
  }
`;

export const SimilarMovie = styled.div`
  margin-top: 3rem;

  img {
    width: 100%;
    height: 30rem;
    object-fit: cover;
  }

  .results {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    column-gap: 2rem;
    row-gap: 2rem;
  }

  .similar-card {
    border-radius: 0.5rem;
    background-color: #2f2f2f;
    overflow: hidden;

    .similar-info {
      padding: 0.5rem 2rem;

      p {
        word-break: break-all;
        font-size: 1.4rem;
        margin-top: 0.5rem;
      }
    }
  }
`;
