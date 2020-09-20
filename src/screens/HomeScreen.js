import React, { useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import useAuth from "../auth/useAuth";
const HomeScreen = (props) => {
  const { logOut } = useAuth();
  const onSignout = async () => {
    try {
      logOut();
    } catch (error) {}
  };

  return (
    <>
      <View style={styles.body}>
        <Text>Home screen</Text>
        <Button title="Sign out" onPress={onSignout} />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  body: {
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
