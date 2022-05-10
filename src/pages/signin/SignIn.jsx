import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FormInput from "../../components/forminput/FormInput";
import Button from "../../components/button/Button";
import {
  fetchMoviesAsync,
  fetchTrendingAsync,
  fetchTopRatedAsync,
  fetchUpcomingAsync,
  fetchPopularTVShowsAsync,
  fetchTopRatedTVShowsAsync,
  fetchTrendingShowsTVAsync,
} from "../../store/movies/movies.action";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { SignInContainer } from "./signin.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAsync);
    dispatch(fetchTrendingAsync);
    dispatch(fetchTrendingShowsTVAsync);
    dispatch(fetchTopRatedAsync);
    dispatch(fetchUpcomingAsync);
    dispatch(fetchPopularTVShowsAsync);
    dispatch(fetchTopRatedTVShowsAsync);
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      navigate("/profile");
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          toast.error("Wrong Password");
          break;
        case "auth/user-not-found":
          toast.error("No user associated with this email");
          break;
        default:
          console.log({ error });
      }
    }
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  return (
    <SignInContainer>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
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

        <Button buttonText="Sign In" type="submit" />
      </form>
    </SignInContainer>
  );
};

export default SignIn;