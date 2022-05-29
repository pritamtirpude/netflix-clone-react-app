import styled from "styled-components";

export const ButtonStyle = styled.button`
  padding: 0.6rem 2.3rem;
  border: none;
  border-radius: 0.3rem;
  font-family: inherit;
  font-weight: bold;
  font-size: 1.6rem;
  cursor: ${(props) => (props.btnLoading ? "unset" : "pointer")};
  background-color: var(--netflix-color);
  color: var(--white-color);
  width: ${(props) => (props.signupstyle ? props.signupstyle : "100%")};
  margin-top: ${(props) => (props.signupstyle ? "2rem" : "")};
  opacity: ${(props) => (props.btnLoading ? "0.8" : "1")};
`;
