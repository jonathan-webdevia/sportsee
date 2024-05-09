import { BASE_URL, ACTIVITY_BY_KIND } from "../utils/const";

export default class user {
  constructor(userId, service) {
    this.user = userId;

    /**
     * Endpoint determination
     */
    switch (service) {
      case "activities":
        this.URL = `${BASE_URL}/user/${userId}/performance`;
        break;
      case "average-sessions":
        this.URL = `${BASE_URL}/user/${userId}/average-sessions`;
        break;
      case "daily-activity":
        this.URL = `${BASE_URL}/user/${userId}/activity`;
        break;
      default:
        this.URL = `${BASE_URL}/user/${userId}`;
        break;
    }
  }

  /**
   * API call
   */
  async APICalling() {
    let data = null;
    try {
      const response = await fetch(this.URL);
      data = await response.json();
    } catch (err) {
      console.log("Une erreur est survenue");
    }
    return data;
  }

  /**
   * get data methods & preformatting responses
   */
  async getActivities() {
    let data = await this.APICalling();
    const activities = [];
    for (let item of data.data.data) {
      activities.push({
        activity: ACTIVITY_BY_KIND[item.kind],
        value: item.value,
      });
    }
    return activities;
  }

  async getAverageSessions() {
    const data = await this.APICalling();
    let averageSessions = [
      {
        day: "L",
        sessionLength: 0,
      },
      {
        day: "M",
        sessionLength: 0,
      },
      {
        day: "M",
        sessionLength: 0,
      },
      {
        day: "J",
        sessionLength: 0,
      },
      {
        day: "V",
        sessionLength: 0,
      },
      {
        day: "S",
        sessionLength: 0,
      },
      {
        day: "D",
        sessionLength: 0,
      },
    ];
    for (let index in data.data.sessions) {
      averageSessions[index].sessionLength =
        data.data.sessions[index].sessionLength;
    }
    return averageSessions;
  }

  async getDailyActivity() {
    const data = await this.APICalling();
    const dailyActivity = [];
    for (let item of data.data.sessions) {
      // eslint-disable-next-line no-unused-vars
      const [yyyy, mm, dd] = item.day.split("-");

      dailyActivity.push({
        day: `${dd}/${mm}`,
        kilogram: item.kilogram,
        calories: item.calories,
      });
    }

    return dailyActivity;
  }

  async getKeyData() {
    const data = await this.APICalling();
    return data.data.keyData;
  }

  async getFirstName() {
    const data = await this.APICalling();
    return data.data.userInfos.firstName;
  }

  async getScore() {
    const data = await this.APICalling();
    if (data.data.todayScore) {
      return data.data.todayScore;
    }
    return data.data.score;
  }
}
