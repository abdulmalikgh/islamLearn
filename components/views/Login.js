import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import AppButton from "../helperviews/AppButton";
import AppTextInput from "../helperviews/AppTextInput";
import Loading from "../helperviews/Loading";
import SocialIconButton from "../helperviews/SocialIconButton";

function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = () => {
    setIsLoading(true);
  };
  const handleLogIn = () => {
    navigation.navigate("Dashboard");
  };
  return (
    <View style={styles.container}>
      <AppTextInput
        placeholder={"E-mail"}
        value={email}
        onChangeText={(email) => setEmail(email)}
      />
      <AppTextInput
        placeholder={"password"}
        value={password}
        onChangeText={(password) => setPassword(password)}
      />

      <AppButton
        shadow={true}
        btnStyle={{ backgroundColor: "#15C39A" }}
        btnTextStyle={{ color: "white" }}
        onPress={() => handleLogIn()}
      >
        Log In
      </AppButton>
      <AppButton btnTextStyle={{ color: "#15C39A", fontSize: 12 }}>
        Forgot Pasword?
      </AppButton>

      <Text style={{ height: "20%" }}></Text>
      <Loading loading={isLoading} />
      <View style={{ width: "80%", marginTop: 50 }}>
        <SocialIconButton icon="facebook-square" btnStyle="rgb(66, 103, 178)">
          Sign In with Facebook
        </SocialIconButton>
      </View>
      <View style={{ width: "80%", marginTop: 10 }}>
        <SocialIconButton icon="google-plus" btnStyle="rgb(221, 75, 57)">
          Sign In with Google+
        </SocialIconButton>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    top: 0,
    bottom: 0,
    alignItems: "center",
    marginTop: 20,
  },
  textinputs: {
    flex: 10,
    alignItems: "center",
    marginTop: 50,
  },
  buttontext: {
    flex: 2,
    justifyContent: "flex-end",
  },
  googleButton: {
    backgroundColor: "rgb(221, 75, 57)",
    opacity: 1,
  },
  facebookButton: {
    backgroundColor: "rgb(66, 103, 178)",
  },
});

export default Login;
