import React from "react";
import {
  NativeBaseProvider,
  Input,
  Text,
  Box,
  Button,
  StatusBar
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/components/home";
import DetailsScreen from "./app/components/details";
import UserProvider from "./app/context";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <NativeBaseProvider>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Product" component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </UserProvider>
  );
}
