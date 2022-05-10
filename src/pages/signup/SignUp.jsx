import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../../components/forminput/FormInput";
import Button from "../../components/button/Button";
import { SignUpContainer, SignUpWrapper } from "./signup.styles";
import { toast } from "react-toastify";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { name, email, password, confirmPassword } = formFields;

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords doesn't match!");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName: name });
      resetFormFields();
      navigate("/login");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Cannot create user, email already in use.");
      } else {
        console.log("User encountered an error: ", error);
      }
    }
  };

  return (
    <SignUpWrapper>
      <SignUpContainer>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Name"
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
          />

          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            required
            onChange={handleChange}
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            required
            onChange={handleChange}
          />

          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            required
            onChange={handleChange}
          />
          <Button buttonText="Sign Up" type="submit" />
        </form>
      </SignUpContainer>
    </SignUpWrapper>
  );
};

export default SignUp;
