import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Colors from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";

const Stack = createStackNavigator();
const commonStyle = {
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: Colors.primary,
    elevation: 0,
  },
  headerTintColor: Colors.secondry,
};

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "HOME",
          ...commonStyle,
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
