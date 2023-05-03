const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Intro from "./screens/Intro";
import OrderStatus from "./screens/OrderStatus";
import AddPayment from "./screens/AddPayment";
import Payments from "./screens/Payments";
import ProfileSettings from "./screens/ProfileSettings";
import OrderCart from "./screens/OrderCart";
import ServiceList from "./screens/ServiceList";
import ServicePage from "./screens/ServicePage";
import Filter from "./screens/Filter";
import Notification1 from "./screens/Notification1";
import Search from "./screens/Search";
import MainPage from "./screens/MainPage";
import Notifications from "./screens/Notifications";
import AddressLocation from "./screens/AddressLocation";
import Location1 from "./screens/Location1";
import Password from "./screens/Password";
import Email from "./screens/Email";
import Login from "./screens/Login";
import Intro2Icon from "./screens/Intro2Icon";

import * as SplashScreen from 'expo-splash-screen';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Basic_regular: require("./assets/fonts/Basic_regular.ttf"),
    "Inria Sans_regular": require("./assets/fonts/Inria_Sans_regular.ttf"),
    "Inria Sans_bold": require("./assets/fonts/Inria_Sans_bold.ttf"),
    Rubik_regular: require("./assets/fonts/Rubik_regular.ttf"),
    Rubik_medium: require("./assets/fonts/Rubik_medium.ttf"),
    Mulish_bold: require("./assets/fonts/Mulish_bold.ttf"),
    "Hind Siliguri_regular": require("./assets/fonts/Hind_Siliguri_regular.ttf"),
    "Hind Siliguri_semibold": require("./assets/fonts/Hind_Siliguri_semibold.ttf"),
    Poppins_bold: require("./assets/fonts/Poppins_bold.ttf"),
  });

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 1000);
  }, []);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="Intro2"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="Intro"
              component={Intro}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrderStatus"
              component={OrderStatus}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddPayment"
              component={AddPayment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Payments"
              component={Payments}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProfileSettings"
              component={ProfileSettings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OrderCart"
              component={OrderCart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ServiceList"
              component={ServiceList}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ServicePage"
              component={ServicePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Filter"
              component={Filter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification"
              component={Notification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainPage"
              component={MainPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddressLocation"
              component={AddressLocation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Location"
              component={Location1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Password"
              component={Password}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Email"
              component={Email}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Intro2"
              component={Intro2Icon}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <Intro />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
