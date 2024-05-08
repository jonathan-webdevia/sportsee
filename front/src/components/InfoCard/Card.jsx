import { ICON_BY_TYPE, UNIT_BY_TYPE } from "../../utils/const";
import {
  InfoCardContainer,
  InfoCardData,
  CardValue,
  InfoCardType,
} from "../../utils/style/InfoCards";

export function Card({ type, value }) {
  return (
    <InfoCardContainer>
      <img src={ICON_BY_TYPE[type]} alt={type} width="60" height="60" />
      <InfoCardData>
        <CardValue>
          {value !== 0 ? `${value}${UNIT_BY_TYPE[type]}` : "-"}
        </CardValue>

        <InfoCardType>{type}</InfoCardType>
      </InfoCardData>
    </InfoCardContainer>
  );
}
