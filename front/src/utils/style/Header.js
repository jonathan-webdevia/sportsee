import styled from "styled-components";
import { styleVar } from "./styleVariables";

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 16rem 1fr;

  color: white;
  background: ${styleVar.grey6};
`;

const LogoLink = styled.a`
  padding: 1rem 2rem;

  @media (max-width: 1340px) {
    padding: 0.75rem 1.5rem;
  }
`;

const LinksList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  height: 100%;

  font-weight: 500;
  text-align: center;
`;

const HeaderLink = styled.a`
  padding: 0.5rem 2rem;

  color: white;
  font-size: 1.5rem;
  text-decoration: none;

  @media (max-width: 1340px) {
    font-size: 1.25rem;
  }
`;

export { HeaderContainer, LogoLink, LinksList, HeaderLink };
