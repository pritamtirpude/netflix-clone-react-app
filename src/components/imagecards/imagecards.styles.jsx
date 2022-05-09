import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ImageCardsContainer = styled(motion.div)`
  border-radius: 0.3rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
  h4 {
    font-size: 1.2rem;
  }
`;

export const InfoContainer = styled(motion.div)`
  background: hsl(0, 0%, 12%);
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  padding: 1rem 1rem;

  h4 {
    text-transform: uppercase;
  }
`;

export const LinkStyle = styled(Link)`
  color: var(--white-color);
`;
