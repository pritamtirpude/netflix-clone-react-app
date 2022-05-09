import styled, { css } from "styled-components";

const shrinkLabelStyle = css`
  top: -0rem;
  font-size: 1.2rem;
`;

export const InputLabel = styled.label`
  position: absolute;
  top: 30%;
  left: 2rem;

  transition: 300ms ease all;
  pointer-events: none;
  color: #8c8c8c;
  ${({ shrink }) => shrink && shrinkLabelStyle}
`;

export const Input = styled.input`
  padding: 1.6rem 2rem;
  font-family: inherit;
  border-radius: 0.4rem;
  border: none;
  width: 100%;
  background: #3b3b3b;
  color: var(--white-color);
  &:focus {
    outline: none;
    background-color: #4e4e4e;
  }

  &:focus ~ ${InputLabel} {
    ${shrinkLabelStyle}
  }
`;

export const FormControl = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;
