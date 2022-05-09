import { MovieCardContainer, ImageCardsContainer } from "./cards.styles";
import ImageCards from "../imagecards/ImageCards";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const options = {
  perPage: 3,
  width: "100%",
  gap: "1rem",
  type: "loop",
  pagination: false,
};

const Cards = ({ categoryTitle, categoryData }) => {
  return (
    <MovieCardContainer>
      <h3>{categoryTitle}</h3>
      <ImageCardsContainer>
        <Splide options={options}>
          {categoryData.map((movies) => (
            <SplideSlide key={movies.id}>
              <ImageCards movies={movies} />
            </SplideSlide>
          ))}
        </Splide>
      </ImageCardsContainer>
    </MovieCardContainer>
  );
};

export default Cards;
