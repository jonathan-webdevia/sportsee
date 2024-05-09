import { useParams } from "react-router";

import {
  DashboardContainer,
  Content,
  MainTitle,
  Name,
  Message,
  ContentGrid,
  ChartsGrid,
  MainChart,
} from "../../utils/style/Dashboard";

import { Activities } from "../../components/Activities/Activities";
import { AsideNav } from "../../components/Aside/Aside";
import { Average } from "../../components/Average/Average";
import { DailyActivityChart } from "../../components/Daily/Daily";
import { Header } from "../../components/Header/Header";
import { Group } from "../../components/InfoCard/Group";
import { ScoreChart } from "../../components/Score/Score";

import user from "../../services/APIClass";

import { useEffect, useState } from "react";

export function Dashboard() {
  let { userId } = useParams();
  const [fisrtName, setFN] = useState({});
  useEffect(() => {
    const getData = new user(userId, "");
    getData
      .getFirstName()
      .then((response) => {
        return response;
      })
      .then((data) => {
        setFN(data);
      });
  });

  return (
    <div>
      <Header />

      <DashboardContainer>
        <AsideNav />

        <Content>
          <MainTitle>
            Bonjour <Name>{`${fisrtName}`}</Name>
          </MainTitle>
          <Message>
            <span>
              Félicitations ! Vous avez explosé vos objectifs hier ! &nbsp;👏
            </span>
          </Message>

          <ContentGrid>
            <ChartsGrid>
              <MainChart>
                <DailyActivityChart userId={userId} />
              </MainChart>
              <Average userId={userId} />
              <Activities userId={userId} />
              <ScoreChart userId={userId} />
            </ChartsGrid>
            <Group userId={userId} />
          </ContentGrid>
        </Content>
      </DashboardContainer>
    </div>
  );
}
