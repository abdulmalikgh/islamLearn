import React from "react";
import { ActivityIndicator } from "react-native";

export default function Loading({ loading }) {
  return <ActivityIndicator size="large" color="black" animating={loading} />;
}
