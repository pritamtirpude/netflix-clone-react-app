import styled from "styled-components";
import { motion } from "framer-motion";

export const MovieCardContainer = styled.div`
  margin: 3rem 0rem;
  h3 {
    font-size: 2rem;
    padding: 0rem 5rem;
  }
`;

export const ImageCardsContainer = styled(motion.div)`
  .my-swiper {
    padding: 2rem 0rem;
  }

  .card {
    overflow: visible;
    &:hover {
      z-index: 500;
    }
  }
`;
