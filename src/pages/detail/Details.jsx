import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaPlay, FaPlus } from "react-icons/fa";
import { ImCheckmark } from "react-icons/im";
import { GiCancel } from "react-icons/gi";
import {
  selectDetails,
  selectLoading,
  selectSimilarMovies,
  selectMovieTrailers,
} from "../../store/moviedetail/detail.selector";
import { addFavouriteItem } from "../../store/mylist/mylist.action";
import { detailsClear } from "../../store/moviedetail/detail.action";
import { selectFavouriteListItem } from "../../store/mylist/mylist.selector";
import {
  Overlay,
  DetailContainer,
  MovieHeroContainer,
  MovieHeroOverlay,
  HeroInfo,
  HeroButtons,
  DetailedInfo,
  Overview,
  Genre,
  H4,
  Languages,
  SimilarMovie,
} from "./details.styles";
import ReadMoreLess from "../../components/readmoreless/ReadMoreLess";

const Details = () => {
  const isLoading = useSelector(selectLoading);
  const detail = useSelector(selectDetails);
  const listItems = useSelector(selectFavouriteListItem);
  const similarMovies = useSelector(selectSimilarMovies);
  const movieTrailers = useSelector(selectMovieTrailers);

  const offcialTrailer =
    movieTrailers.length > 0
      ? movieTrailers.find(
          (trailer) => trailer.type === "Trailer" || trailer.type === "Clip"
        )
      : "N0 Trailers Found";

  const [isTrailerOpen, setIsTrailerOpen] = useState(false);

  const itemPresentInList = listItems.find((item) => item.id === detail.id);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const exitOverlayHandler = (event) => {
    const element = event.target;

    if (element.classList.contains("overlay")) {
      document.body.style.overflow = "auto";
      dispatch(detailsClear);
      navigate("/profile");
    }
  };

  const addToListHandler = () => {
    dispatch(addFavouriteItem(listItems, detail));
  };

  return (
    <>
      {detail && (
        <Overlay className="overlay" onClick={exitOverlayHandler}>
          <DetailContainer>
            <MovieHeroContainer
              imgUrl={
                detail?.backdrop_path !== null
                  ? detail.backdrop_path
                  : detail.poster_path
              }
            >
              <MovieHeroOverlay />
              <HeroInfo>
                <h3>
                  {detail.title ||
                    detail.name ||
                    detail.original_title ||
                    detail.original_name}
                </h3>
                <HeroButtons>
                  <button onClick={() => setIsTrailerOpen(true)}>
                    <FaPlay />
                    &nbsp; Play
                  </button>
                  <button className="add-to-list" onClick={addToListHandler}>
                    {itemPresentInList ? (
                      <ImCheckmark style={{ color: "white" }} />
                    ) : (
                      <FaPlus style={{ color: "white" }} />
                    )}
                  </button>
                </HeroButtons>
              </HeroInfo>
              {isTrailerOpen ? (
                <div className="video-wrapper">
                  <GiCancel
                    className="cancel"
                    onClick={() => setIsTrailerOpen(false)}
                  />
                  <iframe
                    className="video"
                    title="Youtube player"
                    allowFullScreen
                    sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
                    src={`https://youtube.com/embed/${offcialTrailer.key}?autoplay=0`}
                    loading="lazy"
                  ></iframe>
                </div>
              ) : null}
            </MovieHeroContainer>
            <DetailedInfo>
              <Overview>
                <H4>Overview</H4>
                <div className="overview-info">
                  <h5>Ratings: {detail.vote_average} / 10</h5>
                  <h5>
                    Release Date: {detail.release_date || detail.first_air_date}
                  </h5>
                  <p>{detail.overview}</p>
                </div>
              </Overview>
              <Genre>
                <H4>Genres</H4>
                <div className="genres">
                  {detail?.genres?.map((genre) => (
                    <p key={genre.id}>{genre.name}</p>
                  ))}
                </div>
              </Genre>
              <Languages>
                <H4>Languages</H4>
                <div className="spoken-languages">
                  {detail?.spoken_languages?.map((language, idx) => (
                    <p key={idx}>{language.english_name}</p>
                  ))}
                </div>
              </Languages>
              <SimilarMovie>
                <H4>More Like This</H4>
                <div className="results">
                  {similarMovies
                    ?.filter((_, index) => index < 12)
                    .map((similarMovie) => (
                      <div className="similar-card" key={similarMovie.id}>
                        <img
                          src={`https://image.tmdb.org/t/p/w500${similarMovie.poster_path}`}
                          loading="lazy"
                          alt={
                            similarMovie.title ||
                            similarMovie.original_title ||
                            similarMovie.name ||
                            similarMovie.original_name
                          }
                        />
                        <div className="similar-info">
                          <h5>
                            {similarMovie.title ||
                              similarMovie.original_title ||
                              similarMovie.name ||
                              similarMovie.original_name}
                          </h5>
                          <ReadMoreLess>{similarMovie.overview}</ReadMoreLess>
                        </div>
                      </div>
                    ))}
                </div>
              </SimilarMovie>
            </DetailedInfo>
          </DetailContainer>
        </Overlay>
      )}
    </>
  );
};

export default Details;