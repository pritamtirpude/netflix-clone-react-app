import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ImageCardsContainer = styled(motion.div)`
  overflow: hidden;
  margin-top: 2rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  h4 {
    font-size: 1.2rem;
  }
`;

export const LinkStyle = styled(Link)`
  color: var(--white-color);
`;
