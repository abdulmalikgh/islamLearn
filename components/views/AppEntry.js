import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppText from "../helperviews/AppText";
import AppButton from "../helperviews/AppButton";
import { MaterialIcons } from "@expo/vector-icons";

function AppEntry({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <AppText textStyle={styles.titleStyle}>islamLearn</AppText>
        <View style={styles.rounded}>
          <MaterialIcons name="school" size={100} color="#15C39A" />
        </View>
        <Text style={{ color: "#15C39A", fontSize: 12 }}>
          Study the fundamentals of islam at your own pace
        </Text>
      </View>
      <View style={styles.accountContent}>
        <AppButton
          shadow={true}
          btnWidth={"60%"}
          btnStyle={{ backgroundColor: "#15C39A" }}
          btnTextStyle={{ color: "white" }}
          onPress={() => navigation.navigate("SignUp")}
        >
          Create New Account
        </AppButton>
        <AppButton
          btnTextStyle={{ color: "#15C39A" }}
          onPress={() => navigation.navigate("Login")}
        >
          Sign In
        </AppButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleStyle: {
    fontSize: 30,
    marginTop: 50,
    color: "#15C39A",
  },
  rounded: {
    alignItems: "center",
    justifyContent: "center",
    margin: 30,
    width: 150,
    height: 150,
    borderColor: "#15C39A",
    borderWidth: 2,
    backgroundColor: "white",
    borderRadius: 75,
  },
  logo: { flex: 8, alignItems: "center" },
  accountContent: {
    flex: 2,
    alignItems: "center",
    marginBottom: 30,
  },
});

export default AppEntry;
