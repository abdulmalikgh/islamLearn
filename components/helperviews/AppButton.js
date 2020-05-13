import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

function AppButton({
  btnStyle = {},
  btnWidth = null,
  btnTextStyle = {},
  children,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[
        {
          width: !btnWidth ? "80%" : btnWidth,
          margin: 5,
          borderRadius: 5,
        },
        btnStyle,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, btnTextStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    padding: 8,
    textAlign: "center",
  },
});
export default AppButton;
