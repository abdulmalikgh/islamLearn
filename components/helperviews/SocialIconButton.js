import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function SocialIconButton({ children, icon, btnStyle, onPress }) {
  return (
    <Icon.Button
      name={icon}
      iconStyle={{ marginRight: 50 }}
      backgroundColor={btnStyle}
      onPress={() => alert("Login with Facebook")}
    >
      {children}
    </Icon.Button>
  );
}
const styles = StyleSheet.create({
  button: {
    width: "80%",
    margin: 5,
    borderRadius: 5,
  },
  text: { color: "white", padding: 5 },
});
export default SocialIconButton;
