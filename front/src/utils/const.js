import calorieIcon from "../assets/icon-calorie.png";
import carbohydrateIcon from "../assets/icon-carbohydrate.png";
import lipidIcon from "../assets/icon-lipid.png";
import proteinIcon from "../assets/icon-protein.png";

const BASE_URL = "http://localhost:3000";
const ACTIVITY_BY_KIND = {
  1: "Cardio",
  2: "Energie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
};
const ICON_BY_TYPE = {
  Calories: calorieIcon,
  Glucides: carbohydrateIcon,
  Protéines: proteinIcon,
  Lipides: lipidIcon,
};

const UNIT_BY_TYPE = {
  Calories: "kCal",
  Glucides: "g",
  Protéines: "g",
  Lipides: "g",
};

const ACTIVITIES_ORDER = [
  "Intensité",
  "Vitesse",
  "Force",
  "Endurance",
  "Energie",
  "Cardio",
];

export {
  BASE_URL,
  ACTIVITY_BY_KIND,
  ICON_BY_TYPE,
  UNIT_BY_TYPE,
  ACTIVITIES_ORDER,
};
