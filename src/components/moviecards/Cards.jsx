import { MovieCardContainer, ImageCardsContainer } from "./cards.styles";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ImageCards from "../imagecards/ImageCards";

const Cards = ({ categoryTitle, categoryData }) => {
  return (
    <MovieCardContainer>
      <h3>{categoryTitle}</h3>
      <ImageCardsContainer>
        <Swiper
          spaceBetween={10}
          slidesPerView={5}
          loop={true}
          navigation
          modules={[Navigation]}
          className="my-swiper"
          breakpoints={{
            375: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 5,
            },
          }}
        >
          {categoryData.map((movies) => (
            <SwiperSlide key={movies.id} className="card">
              <ImageCards movies={movies} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ImageCardsContainer>
    </MovieCardContainer>
  );
};

export default Cards;
