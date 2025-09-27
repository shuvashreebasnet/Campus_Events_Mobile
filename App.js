import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ClubList from "./src/screens/ClubList";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Club_List: ClubList,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
