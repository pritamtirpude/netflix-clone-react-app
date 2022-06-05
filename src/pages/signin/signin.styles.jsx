import styled from "styled-components";

export const ParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;

  @media screen and (max-width: 768px) {
    padding: 5rem 2rem;
  }
`;

export const SignInContainer = styled.div`
  width: 50rem;
  height: auto;
  padding: 5rem 5rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 0.4rem;

  @media screen and (max-width: 768px) {
    padding: 5rem 2rem;
    width: 100%;
  }

  h2 {
    font-size: 3rem;
    margin: 0rem 0rem 2.8rem;
  }
`;
