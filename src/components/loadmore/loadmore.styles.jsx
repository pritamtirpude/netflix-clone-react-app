import styled from "styled-components";

export const LoadMoreContainer = styled.div`
  margin-top: 2rem;
  position: relative;

  .load-more-btn {
    position: absolute;
    width: 6rem;
    height: 6rem;
    background: transparent;
    top: -3rem;
    left: 50%;
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;
    @media screen and (max-width: 768px) {
      transform: none;
      left: 45%;
    }
  }
`;
