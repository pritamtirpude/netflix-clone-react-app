import { ButtonStyle } from "./button.styles";

const Button = ({ buttonText, signupstyle, isUserLoading }) => {
  return (
    <ButtonStyle signupstyle={signupstyle} disabled={isUserLoading}>
      {buttonText}
    </ButtonStyle>
  );
};

export default Button;
