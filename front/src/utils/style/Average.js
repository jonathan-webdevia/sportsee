import styled from "styled-components";
import { styleVar } from "./styleVariables";

const AverageSessionsChartContainer = styled.div`
  position: relative;
  background: ${styleVar.primaryRed};
`;

const AverageSessionsChartTitle = styled.h2`
  position: absolute;
  top: 1rem;
  left: 1.6rem;
  margin: 0;
  color: white;
  font-size: 0.9rem;
  font-weight: bolder;
`;

const InfoBull = styled.p`
  padding: 0.5rem;
  font-size: 0.7rem;
  font-weight: 500;
  background: white;
`;

export {
  AverageSessionsChartContainer,
  AverageSessionsChartTitle,
  InfoBull,
};
