import { styleVar } from "./styleVariables";
import styled from "styled-components";

const ScoreChartContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${styleVar.grey1};
`;

const ScoreLabel = styled.p`
  position: absolute;
  font-size: 1.1rem;
  text-align: center;
`;

const ScoreValue = styled.span`
  font-size: 1.5em;
  font-weight: bolder;
  text-align: center;
`;

export { ScoreChartContainer, ScoreLabel, ScoreValue };
