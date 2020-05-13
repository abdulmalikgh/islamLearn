import React from "react";
import { Text } from "react-native";

function AppText({ children, textStyle = {} }) {
  return <Text style={[{ textAlign: "center" }, textStyle]}>{children}</Text>;
}

export default AppText;
