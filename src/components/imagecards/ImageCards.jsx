import { ImageCardsContainer, LinkStyle } from "./imagecards.styles";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import {
  fetchMovieDetailsAsync,
  fetchTVDetailAsync,
  fetchSimalarMoviesAsync,
  fetchSimalarTVAsync,
  fetchMovieTrailersAsync,
  fetchTVTrailersAsync,
  fetchMoviesCastsAsync,
  fetchTVCastsAsync,
} from "../../store/moviedetail/detail.action";

const ImageCards = ({ movies }) => {
  const dispatch = useDispatch();

  const loadDetailsHandler = () => {
    if ("first_air_date" in movies) {
      dispatch(fetchTVDetailAsync(movies.id));
      dispatch(fetchSimalarTVAsync(movies.id));
      dispatch(fetchTVTrailersAsync(movies.id));
      dispatch(fetchTVCastsAsync(movies.id));
    } else {
      dispatch(fetchMovieDetailsAsync(movies.id));
      dispatch(fetchSimalarMoviesAsync(movies.id));
      dispatch(fetchMovieTrailersAsync(movies.id));
      dispatch(fetchMoviesCastsAsync(movies.id));
    }

    document.body.style.overflow = "hidden";
  };

  return (
    <ImageCardsContainer
      onClick={loadDetailsHandler}
      whileHover={{ scale: 1.2 }}
      layout
    >
      <LinkStyle to={`/browse/${movies.id}`}>
        <motion.img
          layout
          src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
          loading="lazy"
          alt={movies.title || movies.original_name}
        />
      </LinkStyle>
    </ImageCardsContainer>
  );
};

export default ImageCards;
