import styled from "styled-components";

export const SignUpWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0rem;
  min-height: 80vh;

  @media screen and (max-width: 768px) {
    padding: 5rem 2rem;
  }
`;

export const SignUpContainer = styled.div`
  width: 50rem;
  height: auto;
  padding: 5rem 5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 0.4rem;

  @media screen and (max-width: 768px) {
    padding: 5rem 2rem;
  }

  h2 {
    font-size: 3rem;
    margin: 0rem 0rem 2.8rem;
  }
`;
