import styled from "styled-components";

export const MyListContainer = styled.div`
  padding: 2rem 5rem;
`;

export const ItemContainer = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  column-gap: 5rem;
  row-gap: 5rem;
`;

export const ItemCard = styled.div`
  border-radius: 0.5rem;
  background-color: #2f2f2f;
  overflow: hidden;
  transition: transform 0.8s ease;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transform: scale(0.99);
  }

  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }

  .info {
    text-align: center;
    padding: 2rem 2rem;
  }
`;
