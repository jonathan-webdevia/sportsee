import styled from "styled-components";
import { styleVar } from "./styleVariables";

const CardsContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  gap: 2rem;

  > * {
    border-radius: 0.25rem;
    overflow: hidden;
  }

  @media (max-width: 1340px) {
    gap: 1.25rem;
  }
`;

const InfoCardContainer = styled.div`
  display: flex;

  padding: 2rem;

  text-align: left;

  background: ${styleVar.grey1};

  @media (max-width: 1340px) {
    padding: 1.75rem 1.25rem;
  }
`;

const InfoCardData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0 0 0 1.5rem;

  @media (max-width: 1340px) {
    padding: 0 0 0 1rem;
  }
`;

const CardValue = styled.div`
  margin: 0.125rem 0;

  font-size: 1.2rem;
  font-weight: 700;

  @media (max-width: 1340px) {
    font-size: 1.1rem;
  }
`;

const InfoCardType = styled.div`
  margin: 0.125rem 0;

  color: ${styleVar.grey3};
`;

export {
  CardsContainer,
  InfoCardContainer,
  InfoCardData,
  CardValue,
  InfoCardType,
};
