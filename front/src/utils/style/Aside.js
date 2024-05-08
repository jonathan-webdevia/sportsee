import styled from "styled-components";
import { styleVar } from "./styleVariables";

const AsideNavContainer = styled.div`
  color: white;
  background: ${styleVar.grey6};
  @media (max-width: 1340px) {
    max-height: 692px;
  }
`;

const ActivitiesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 16rem);
  gap: 2rem;
`;

const ActivityIcon = styled.img`
 width: auto;
`;

const Disclaimer = styled.p`
position: relative;
bottom: 40px;
  display: flex;
  align-items: center;
  padding: 2rem;
  font-size: 0.9rem;
  transform: rotate(180deg);
  writing-mode: vertical-lr;
`;

export { AsideNavContainer, ActivitiesList, ActivityIcon, Disclaimer };
