import styled from "styled-components";
import { styleVar } from "./styleVariables";

const DashboardContainer = styled.main`
  display: grid;
  grid-template-columns: 7rem 1fr;
`;

const Content = styled.section`
  padding: 1.5rem 2rem;
`;

const MainTitle = styled.h1`
  margin: 0;

  font-size: 3rem;
  font-weight: 500;

  @media (max-width: 1340px) {
    font-size: 2.5rem;
  }
`;

const Name = styled.span`
  color: ${styleVar.primaryRed};
`;

const Message = styled.p`
  margin: 2rem 0 4rem 0;

  font-size: 1.1rem;

  @media (max-width: 1340px) {
    margin: 0.5rem 0 2rem 0;

    font-size: 1.05rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media (max-width: 1340px) {
    gap: 1rem;
  }
`;

const ChartsGrid = styled.div`
  grid-column: 1/4;

  display: grid;
  grid-template: 20rem 16rem / repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 1340px) {
    grid-template: 18rem 14rem / repeat(3, 1fr);
    gap: 1rem;
  }

  > * {
    border-radius: 0.25rem;
    overflow: hidden;
  }
`;

const MainChart = styled.div`
  grid-column: 1/4;
`;

export {
  DashboardContainer,
  Content,
  MainTitle,
  Name,
  Message,
  ContentGrid,
  ChartsGrid,
  MainChart,
};
