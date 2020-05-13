import React from "react";
import { TextInput, StyleSheet } from "react-native";

function AppTextInput({ onChangeText, value, placeholder, onBlur, onFocus }) {
  return (
    <TextInput
      style={styles.textstyle}
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
      onBlur={onBlur}
      onFocus={onFocus}
      clearButtonMode="always"
      autoCorrect={false}
    />
  );
}
const styles = StyleSheet.create({
  textstyle: {
    width: "80%",
    marginBottom: 15,
    borderBottomColor: "#15C39A",
    color: "#15C39A",
    borderBottomWidth: 1,
    padding: 5,
  },
});
export default AppTextInput;
