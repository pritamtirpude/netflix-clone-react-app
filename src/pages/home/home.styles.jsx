import styled from "styled-components";

export const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;
export const HomeContainer = styled.div`
  width: 60rem;
  text-align: center;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 5rem 2rem;
    width: 100%;
  }

  h1 {
    font-size: 5rem;
    line-height: 6rem;

    @media screen and (max-width: 768px) {
      font-size: 3rem;
      line-height: 4rem;
    }
  }

  h2 {
    @media screen and (max-width: 768px) {
      margin-top: 2rem;
      line-height: 3rem;
    }
  }
`;
