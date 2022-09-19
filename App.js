import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "expo-status-bar";
import CustomDrawer from "./routes/CustomDrawer";

import { Provider } from "react-redux";
import rootReducer from "./stores/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

const Stack = createStackNavigator();
const store = configureStore({ reducer: rootReducer });

const App = () => {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName={"Home"}
          >
            <Stack.Screen name="Home" component={CustomDrawer} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" />
      </Provider>
    </>
  );
};

export default App;
