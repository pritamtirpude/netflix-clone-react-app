import styled from "styled-components";
import { motion } from "framer-motion";

export const MovieCardContainer = styled.div`
  margin: 3rem 0rem;
  h3 {
    font-size: 2rem;
    padding: 0rem 5rem;
    @media screen and (max-width: 768px) {
      padding: 0rem 2rem;
    }
  }
`;

export const ImageCardsContainer = styled(motion.div)`
  .my-swiper {
    padding: 3rem 0rem;

    @media screen and (max-width: 768px) {
      padding: 0rem 0rem;
    }
  }

  .card {
    overflow: visible;
    &:hover {
      z-index: 500;
    }
  }
`;
