import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import Colors from "./src/constants/Colors";
import AuthStorage from "./src/auth/storage";
import AuthContext from "./src/auth/context";
import AuthNavigator from "./src/navigation/AuthNavigator";
import AppNavigator from "./src/navigation/AppNavigator";
enableScreens();
export default function App() {
  const [user, setUser] = useState(undefined);
  const restoreToken = async () => {
    try {
      let user = await AuthStorage._retrieveData();
      if (!user) return;
      setUser(user);
    } catch (error) {}
  };
  useEffect(() => {
    restoreToken();
  }, []);
  return (
    <>
      <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
      <AuthContext.Provider value={{ user, setUser }}>
        <SafeAreaProvider>
          <NavigationContainer>
            {!user ? <AuthNavigator /> : <AppNavigator />}
          </NavigationContainer>
        </SafeAreaProvider>
      </AuthContext.Provider>
    </>
  );
}
