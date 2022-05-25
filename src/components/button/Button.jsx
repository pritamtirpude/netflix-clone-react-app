import { ButtonStyle } from "./button.styles";

function Button({ buttonText, signupstyle, isUserLoading }) {
  return (
    <ButtonStyle
      signupstyle={signupstyle}
      disabled={isUserLoading}
      btnLoading={isUserLoading}
      buttonText
    >
      {buttonText}
    </ButtonStyle>
  );
}

export default Button;
