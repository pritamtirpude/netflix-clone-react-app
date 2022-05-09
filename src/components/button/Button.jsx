import { ButtonStyle } from "./button.styles";

const Button = ({ buttonText, signupstyle }) => {
  return <ButtonStyle signupstyle={signupstyle}>{buttonText}</ButtonStyle>;
};

export default Button;
