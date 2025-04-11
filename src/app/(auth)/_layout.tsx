import { View, Text } from "react-native";
import React from "react";
import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

export default function _layout() {
  const { isSignedIn } = useAuth();
  console.log("isSignedIn", isSignedIn);
  if (isSignedIn) {
    return <Redirect href={"/"} />;
  }
  return (
    <Stack>
      <Stack.Screen name="signIn" options={{ title: "Sign In" }} />
      <Stack.Screen name="signUp" options={{ title: "Sign Up" }} />
    </Stack>
  );
}
