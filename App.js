import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ClubList from "./src/screens/ClubList";
import EventList from "./src/screens/EventList";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Event_List: EventList,
    Club_List: ClubList,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Campus Events",
      headerShown: false,
    },
  }
);

export default createAppContainer(navigator);
