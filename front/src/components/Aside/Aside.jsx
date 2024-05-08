import {
  AsideNavContainer,
  ActivitiesList,
  ActivityIcon,
  Disclaimer,
} from "../../utils/style/Aside";
import pictoBodybuilding from "../../assets/picto-bodybuilding.png";
import pictoCycling from "../../assets/picto-cycling.png";
import pictoMeditation from "../../assets/picto-meditation.png";
import pictoSwimming from "../../assets/picto-swimming.png";

export function AsideNav() {
  return (
    <AsideNavContainer>
      <nav>
        <ActivitiesList>
          <li>
            <a href="/">
              <ActivityIcon src={pictoMeditation} alt="Méditation" />
            </a>
          </li>
          <li>
            <a href="/">
              <ActivityIcon src={pictoSwimming} alt="Natation" />
            </a>
          </li>
          <li>
            <a href="/">
              <ActivityIcon src={pictoCycling} alt="Cyclisme" />
            </a>
          </li>
          <li>
            <a href="/">
              <ActivityIcon src={pictoBodybuilding} alt="Musculation" />
            </a>
          </li>
        </ActivitiesList>
      </nav>

      <Disclaimer>Copyright SportSee 2021</Disclaimer>
    </AsideNavContainer>
  );
}
