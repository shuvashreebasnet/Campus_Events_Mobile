import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ClubList from "./src/screens/ClubList";
import EventList from "./src/screens/EventList";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Club_List: ClubList,
    Event_List: EventList,
  },
  {
    initialRouteName: "Event_List",
    defaultNavigationOptions: {
      title: "App",
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
