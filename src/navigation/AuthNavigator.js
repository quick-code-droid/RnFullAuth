import React from "react";

import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

import Colors from "../constants/Colors";
import SigninScreen from "../screens/SigninScreen";
import SignupScreen from "../screens/SignupScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";

const Stack = createStackNavigator();
const commonStyle = {
  headerTitleAlign: "center",
  headerStyle: {
    backgroundColor: Colors.primary,
    elevation: 0,
  },
  headerTintColor: Colors.secondry,
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="signin"
        component={SigninScreen}
        options={{
          title: "LOGIN",
          ...commonStyle,
        }}
      />
      <Stack.Screen
        name="signup"
        component={SignupScreen}
        options={{
          title: "REGISTER",
          ...commonStyle,
        }}
      />
      <Stack.Screen
        name="forgotPassword"
        component={ForgotPasswordScreen}
        options={{
          title: "FORGOT PASSWORD",
          ...commonStyle,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
