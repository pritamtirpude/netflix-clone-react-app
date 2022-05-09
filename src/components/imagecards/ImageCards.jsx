import {
  ImageCardsContainer,
  InfoContainer,
  LinkStyle,
} from "./imagecards.styles";
import { useDispatch } from "react-redux";
import {
  fetchMovieDetailsAsync,
  fetchTVDetailAsync,
  fetchSimalarMoviesAsync,
  fetchSimalarTVAsync,
  fetchMovieTrailersAsync,
  fetchTVTrailersAsync,
} from "../../store/moviedetail/detail.action";

const ImageCards = ({ movies }) => {
  const dispatch = useDispatch();

  const loadDetailsHandler = () => {
    if ("first_air_date" in movies) {
      dispatch(fetchTVDetailAsync(movies.id));
      dispatch(fetchSimalarTVAsync(movies.id));
      dispatch(fetchTVTrailersAsync(movies.id));
    } else {
      dispatch(fetchMovieDetailsAsync(movies.id));
      dispatch(fetchSimalarMoviesAsync(movies.id));
      dispatch(fetchMovieTrailersAsync(movies.id));
    }

    document.body.style.overflow = "hidden";
  };

  return (
    <ImageCardsContainer onClick={loadDetailsHandler}>
      <LinkStyle to={`/profile/${movies.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
          loading="lazy"
          alt={movies.title || movies.original_name}
        />
        <InfoContainer>
          <h4>{movies.title || movies.name}</h4>
        </InfoContainer>
      </LinkStyle>
    </ImageCardsContainer>
  );
};

export default ImageCards;
