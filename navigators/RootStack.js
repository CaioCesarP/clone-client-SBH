import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { colors } from "../components/colors";
import Welcome from "../screen/Welcome/Welcome";

const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.grayXLight,
            shadowColor: colors.grayLight,
            borderBottomWidth: 0.5,
            shadowOpacity: 90,
            elevation: 0,
            height: 80,
          },
          headerTintColor: colors.gray,
          headerRight: () => <></>,
        }}
        initialRouteName="Welcome"
      >
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
