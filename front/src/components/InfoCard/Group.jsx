import { CardsContainer } from "../../utils/style/InfoCards";
import APIClass from "../../services/APIClass";

import { Card } from "./Card";
import { useEffect, useState } from "react";

export function Group({ userId }) {
  const [keyData, setData] = useState({});
  useEffect(() => {
    const getData = new APIClass(userId, "");
    getData
      .getKeyData()
      .then((response) => {
        return response;
      })
      .then((data) => {
        setData(data);
      });
  }, [userId]);
  return (
    <CardsContainer>
      <Card type="Calories" value={keyData.calorieCount} />

      <Card type="Protéines" value={keyData.proteinCount} />

      <Card type="Glucides" value={keyData.carbohydrateCount} />

      <Card type="Lipides" value={keyData.lipidCount} />
    </CardsContainer>
  );
}
