import {
  HeaderContainer,
  LogoLink,
  LinksList,
  HeaderLink,
} from "../../utils/style/Header";
import SportSeeLogo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <LogoLink href="/">
        <img src={SportSeeLogo} alt="SportSee" />
      </LogoLink>

      <nav>
        <LinksList>
          <li>
            <HeaderLink href="/">Accueil</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/">Profil</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/">Réglages</HeaderLink>
          </li>
          <li>
            <HeaderLink href="/">Communauté</HeaderLink>
          </li>
        </LinksList>
      </nav>
    </HeaderContainer>
  );
}
